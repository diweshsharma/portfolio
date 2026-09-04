import json
import os
import chromadb

def seed_database():
    print("Initializing ChromaDB...")
    client = chromadb.PersistentClient(path="./chroma_db")
    
    # Try to delete existing collection to start fresh
    try:
        client.delete_collection("portfolio")
    except:
        pass
        
    collection = client.create_collection(
        name="portfolio",
        metadata={"hnsw:space": "cosine"}
    )

    documents = []
    metadatas = []
    ids = []
    
    # 1. Profile Data
    profile_path = os.path.join("..", "data", "profile.json")
    if os.path.exists(profile_path):
        with open(profile_path, "r") as f:
            profile = json.load(f)
            text = f"Candidate Profile:\nName: {profile['name']}\nRole: {profile['role']}\nPositioning: {profile['positioning']}\nCertifications: {', '.join(profile['certifications'])}"
            documents.append(text)
            metadatas.append({"source": "profile", "type": "overview"})
            ids.append("profile-1")

    # 2. Education Data
    edu_path = os.path.join("..", "data", "education.json")
    if os.path.exists(edu_path):
        with open(edu_path, "r") as f:
            education = json.load(f)
            for idx, edu in enumerate(education):
                text = f"Education: {edu['degree']} from {edu['institution']}, {edu['location']} ({edu['date']}). GPA/Score: {edu['gpa']}"
                documents.append(text)
                metadatas.append({"source": "education", "type": "degree"})
                ids.append(f"edu-{idx}")

    # 3. Skills Data
    skills_path = os.path.join("..", "data", "skills.json")
    if os.path.exists(skills_path):
        with open(skills_path, "r") as f:
            skills = json.load(f)
            for idx, cat in enumerate(skills):
                text = f"Skill Category: {cat['category']}. Technologies/Skills: {', '.join(cat['skills'])}"
                documents.append(text)
                metadatas.append({"source": "skills", "type": "technical"})
                ids.append(f"skills-{idx}")

    # 4. Project Data
    projects_path = os.path.join("..", "data", "projects.json")
    if os.path.exists(projects_path):
        with open(projects_path, "r") as f:
            projects = json.load(f)
            for idx, proj in enumerate(projects):
                # We chunk high-density project info for better retrieval
                overview = f"Project: {proj['title']}\nSummary: {proj['summary']}\nTechnologies: {', '.join(proj['technologies'])}"
                details = f"Project Details for {proj['title']}:\nProblem: {proj['problem']}\nSolution: {proj['solution']}\nArchitecture: {proj['architecture']}\nChallenges: {proj['challenges']}\nResults: {', '.join(proj['results'])}"
                
                documents.append(overview)
                metadatas.append({"source": "projects", "project_id": proj['id'], "chunk": "overview"})
                ids.append(f"proj-{idx}-overview")
                
                documents.append(details)
                metadatas.append({"source": "projects", "project_id": proj['id'], "chunk": "details"})
                ids.append(f"proj-{idx}-details")

    print(f"Adding {len(documents)} documents to ChromaDB...")
    collection.add(
        documents=documents,
        metadatas=metadatas,
        ids=ids
    )
    print("Database seeding complete!")

if __name__ == "__main__":
    seed_database()
