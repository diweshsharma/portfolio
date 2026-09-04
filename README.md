# AI/ML Engineer Portfolio

A premium, production-ready portfolio built with Next.js (Frontend) and FastAPI + Groq (Backend for an intelligent AI assistant).

## Project Structure
- `app/` & `components/` & `lib/`: Next.js frontend building blocks.
- `backend/`: FastAPI backend serving the RAG-enabled chatbot.
- `data/`: JSON datasets powering the candidate profile.

## Getting Started

### 1. Requirements
Ensure you have installed:
- Node.js (for Next.js)
- Python 3+ (for FastAPI backend)

### 2. Backend Setup
Navigate to the backend folder:
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # On Windows
pip install -r requirements.txt
```
Create a `.env` file inside `backend/` and add your Groq API key:
```env
GROQ_API_KEY=your_groq_api_key_here
```
Run the local backend server:
```bash
uvicorn main:app --port 8000
```

### 3. Frontend Setup
In a separate terminal, install the Node dependencies at the root folder:
```bash
npm install
```
Start the development server:
```bash
npm run dev
```

Your web app will now be accessible at `http://localhost:3000`. You can interact with the portfolio and the AI Assistant built-in!
