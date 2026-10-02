# ResearchMate

AI-powered research assistant. **Phase 1: Foundation & Core MVP** (in progress).

## Stack
Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui · FastAPI · MongoDB · Semantic Scholar · Gemini/OpenAI

## Run locally

**Backend**
```bash
cd backend
python -m venv venv && source venv/bin/activate   # Windows: venv\Scripts\Activate.ps1
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --port 8000
```

**Frontend**
```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

Frontend: http://localhost:3000 · API docs: http://localhost:8000/docs
