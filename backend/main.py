import os
import json
import asyncio
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from dotenv import load_dotenv

# Load env variables including GROQ_API_KEY
load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    query: str

def load_knowledge_base():
    documents = []
    base_path = os.path.join("..", "data")
    
    try:
        if os.path.exists(os.path.join(base_path, "profile.json")):
            with open(os.path.join(base_path, "profile.json"), "r") as f:
                prof = json.load(f)
                documents.append(f"Profile: {prof['name']}, {prof['role']}, {prof['positioning']}")
                documents.append(f"Contact Links: {prof.get('links', {})}")
                
        if os.path.exists(os.path.join(base_path, "projects.json")):
            with open(os.path.join(base_path, "projects.json"), "r") as f:
                projs = json.load(f)
                for p in projs:
                    documents.append(f"Project {p['title']}: {p['summary']}. Technologies: {', '.join(p['technologies'])}")
                    documents.append(f"Project Details for {p['title']}: Problem: {p['problem']}. Solution: {p['solution']}. Challenges: {p['challenges']}")
                    
        if os.path.exists(os.path.join(base_path, "skills.json")):
            with open(os.path.join(base_path, "skills.json"), "r") as f:
                skills = json.load(f)
                for s in skills:
                    documents.append(f"Skills - {s['category']}: {', '.join(s['skills'])}")
    except Exception as e:
        print("Error loading knowledge base:", e)
        
    return documents

KNOWLEDGE_BASE = load_knowledge_base()
FORBIDDEN_TERMS = ["ignore previous instructions", "system prompt", "forget", "reveal"]

GROQ_API_KEY = os.environ.get("GROQ_API_KEY")

async def generate_groq_stream(query: str, context: list):
    import groq
    
    if not GROQ_API_KEY or "paste_your_groq_api_key_here" in GROQ_API_KEY:
        yield "I am currently running in offline fallback mode because no valid LLM API key was provided. Here is the relevant context from the portfolio:\n\n".encode('utf-8')
        for doc in context:
            yield f"- {doc}\n\n".encode('utf-8')
            await asyncio.sleep(0.5)
        return

    client = groq.AsyncGroq(api_key=GROQ_API_KEY)
    
    system_prompt = f"""You are the professional AI assistant for Diwesh Sharma's portfolio.
Answer evaluating and using ONLY the provided retrieving context. Do not invent facts, metrics, or technologies not present in the context.
Keep your response concise, professional, and recruiter-friendly. If the context does not contain the answer, explicitly state that you don't know based on the portfolio data.

RETRIEVED CONTEXT:
{" | ".join(context)}
"""
    
    models_to_try = [
        "llama-3.1-8b-instant",
        "llama-3.3-70b-versatile",
        "llama3-70b-8192"
    ]
    
    for idx, model_id in enumerate(models_to_try):
        try:
            response_stream = await client.chat.completions.create(
                model=model_id, 
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": query}
                ],
                stream=True
            )
            
            async for chunk in response_stream:
                content = chunk.choices[0].delta.content
                if content:
                    yield content.encode('utf-8')
            return # success, exit generator
        except Exception as e:
            if idx == len(models_to_try) - 1:
                yield f"AI Backend exhausted all fallback models! Final error: {str(e)}".encode('utf-8')

@app.post("/api/chat")
async def chat_endpoint(req: ChatRequest):
    query = req.query.strip().lower()
    
    if not query or any(term in query for term in FORBIDDEN_TERMS):
        raise HTTPException(status_code=400, detail="Invalid or unsupported query.")
        
    query_terms = set(word for word in query.split() if len(word) > 2)
    retrieved_docs = []
    
    for doc in KNOWLEDGE_BASE:
        doc_lower = doc.lower()
        score = sum(1 for term in query_terms if term in doc_lower)
        if score > 0:
            retrieved_docs.append((score, doc))
            
    retrieved_docs.sort(key=lambda x: x[0], reverse=True)
    top_docs = [doc for score, doc in retrieved_docs[:3]]

    if not top_docs:
        top_docs = KNOWLEDGE_BASE[:2] if KNOWLEDGE_BASE else ["No information available."]

    return StreamingResponse(generate_groq_stream(req.query, top_docs), media_type="text/plain")
