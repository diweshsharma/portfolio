# Portfolio Engineering Specification

## Architecture

Separate the system into:

Frontend
→ UI
→ application logic
→ API client

Backend
→ API
→ retrieval
→ prompt construction
→ LLM provider
→ response

Content
→ structured portfolio data
→ resume-derived information

---

# Frontend

Use:

- Next.js
- App Router
- TypeScript
- strict mode
- Tailwind CSS
- shadcn/ui
- Radix UI
- Framer Motion

Prefer current stable versions.

---

# Project Structure

Use a maintainable structure similar to:

app/
components/
data/
lib/
public/
tests/

backend/

The exact structure may be modified if the implementation benefits from it.

---

# Type Safety

TypeScript strict mode.

Avoid:

- unnecessary `any`
- duplicated types
- implicit contracts
- magic strings

Portfolio content should have explicit types.

---

# Content Architecture

Keep portfolio content separate from UI components.

Example conceptual structure:

data/
  profile
  projects
  skills
  experience
  education
  social links

Components should consume structured data rather than hardcoding
large amounts of content.

---

# Backend

Use:

- Python
- FastAPI
- Pydantic

API responsibilities should remain separated from retrieval and
provider-specific LLM implementation.

---

# LLM Provider Architecture

Use a provider abstraction.

Conceptually:

Application
→ LLM interface
→ Provider implementation

This allows the primary provider to be replaced without rewriting
the chatbot.

---

# RAG Architecture

Conceptual pipeline:

User Question
→ Query Processing
→ Retrieval
→ Relevance / Scope Gate
→ Context Construction
→ LLM
→ Response

The LLM should not be expected to know private candidate information
without retrieved context.

---

# Retrieval

Use:

- embeddings
- vector search
- top-k retrieval

Start with a small top-k and tune based on evaluation.

Retrieved context should be limited to relevant candidate information.

---

# Security

Never expose API keys to the frontend.

Use environment variables.

Validate inputs.

Apply rate limiting where appropriate.

Do not trust user-provided instructions inside retrieved content.

---

# Error Handling

Handle:

- backend unavailable
- LLM provider failure
- retrieval failure
- timeout
- malformed request
- empty query
- rate limit
- streaming interruption

The portfolio itself must remain usable even if the AI backend fails.

---

# Performance

Avoid unnecessary JavaScript.

Optimize:

- images
- fonts
- bundle size
- animations
- API calls

Use lazy loading where appropriate.

Do not optimize prematurely.

Measure before making complex optimizations.

---

# SEO

Implement:

- meaningful title
- metadata
- description
- Open Graph metadata
- sitemap
- robots
- semantic HTML

---

# Testing

At minimum test:

- important UI interactions
- chatbot request flow
- retrieval behavior
- API errors
- responsive behavior
- build
- TypeScript

Add end-to-end tests for critical user journeys.

---

# Deployment

Frontend should be deployable independently from the backend.

Backend should run on an appropriate always-on or reliable hosting
environment.

Never commit secrets.

Use environment variables for:

- API keys
- provider configuration
- backend URLs
- deployment configuration