# AGENTS.md — Ironwood Business Consulting

## Project Overview
Marketing website for Ironwood Business Consulting, a South African accounting, tax, and advisory firm targeting SMEs. Single Next.js app — content-driven, stateless beyond the callback form pipeline.

**Live site:** https://ironwoodbc.co.za
**Repo:** https://github.com/TheophilusChinomona/ironwoodbc
**Theo approves:** all PRs before merge, all deployments before going live

---

## Agent Roster

| Agent | Role | Handles |
|-------|------|---------|
| **Zach** | Orchestrator | Plans work, creates task files, dispatches agents, reviews PRs |
| **pixel** | Frontend | UI components, pages, Tailwind styling, animations, copy |
| **backend (Atlas)** | Backend | API routes, email, Google Sheets integration, validation |
| **forge** | Infrastructure | Docker, GitHub Actions CI, Dokploy deployment, env vars |

---

## Task Board — `.tasks/`

All work flows through `.tasks/`. Agents pick up their task files on session start.

### File naming
- `pixel-<slug>.md` — frontend tasks
- `backend-<slug>.md` — backend/API tasks
- `forge-<slug>.md` — infra/deploy tasks
- `plan-<slug>.md` — Zach's breakdown plan (reference only, do not modify)

### Task file format
```markdown
# <Task Title>

**Agent:** pixel | backend | forge
**Status:** pending | in-progress | done | blocked
**Priority:** high | medium | low
**Branch:** <agent>/<feature-slug>

## Objective
## Scope
- [ ] deliverable
## Context
## Acceptance Criteria
## Notes
```

### Rules
1. Read your task file first, before touching any code
2. Update `Status:` to `in-progress` when you start
3. Check off scope items as you complete them
4. Update `Status:` to `done` when finished
5. Open a PR — never push directly to `main` or `staging`
6. Completed tasks can be archived to `.tasks/done/` after merge

---

## Repo Layout (agent-relevant)

```
ironwoodbc/
├── .tasks/                            # Task board — read on session start
├── .github/workflows/                 # CI (ci.yml) — lint + build on all branches
└── ironwood-website/my-app/           # Next.js app root (work here)
    ├── app/                           # Pages and API routes
    │   ├── page.tsx                   # Homepage (all sections)
    │   ├── layout.tsx                 # Root layout (Header + Footer)
    │   ├── services/[slug]/page.tsx   # Dynamic service detail pages
    │   └── api/callback/route.ts      # Form submission endpoint
    ├── components/
    │   ├── sections/                  # Homepage section components
    │   ├── forms/callback-form.tsx    # Lead capture form (client)
    │   ├── layout/                    # Header, Footer, Container
    │   └── shared/                   # Reusable UI atoms
    ├── lib/
    │   ├── data/services.ts           # All 6 service definitions (source of truth for content)
    │   ├── email.ts                   # Nodemailer SMTP setup
    │   ├── google-sheets.ts           # Lead tracking via Sheets API
    │   └── validations/               # Zod schemas
    └── public/                        # Static assets
```

---

## Stack

- **Framework:** Next.js 16 (App Router, TypeScript strict)
- **Styling:** Tailwind CSS v4 + shadcn/ui (Radix primitives)
- **Forms:** React Hook Form + Zod
- **Email:** Nodemailer → SMTP at cp65.domains.co.za
- **Lead tracking:** Google Sheets via googleapis
- **Container:** Docker multi-stage (Node 22 Alpine)
- **Deployment:** Dokploy (self-hosted) — prod from `main`, staging from `staging`
- **CI:** GitHub Actions — lint + build on every push/PR

---

## Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production — deploys to ironwoodbc.co.za |
| `staging` | Staging environment |
| `pixel/<slug>` | Frontend feature branches |
| `backend/<slug>` | Backend/API branches |
| `forge/<slug>` | Infra branches |

PRs must target `main` (or `staging` for pre-production testing). CI must pass before merge.

---

## Environment Variables

Never commit values. Keys only:

```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
FROM_EMAIL=
TO_EMAIL=
NEXT_PUBLIC_APP_URL=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
GOOGLE_SHEET_ID=
DOKPLOY_URL=
DOKPLOY_API_KEY=
```

---

## Conventions

- **Server components by default** — only add `'use client'` when you need browser APIs, hooks, or interactivity
- **Content lives in `lib/data/`** — do not hardcode copy into page/component files
- **Tailwind utility classes only** — no inline styles, no custom CSS unless absolutely necessary
- **No analytics** — not integrated yet, do not add without Theo's instruction
- **Images:** Put in `/public/` and use `next/image`
- **Commit prefix:** `feat:` / `fix:` / `chore:` / `style:`
- **Do not add "Co-Authored-By: Claude"** to commit messages

## Do NOT touch
- `lib/data/services.ts` copy without explicit instruction — client-approved content
- `.env` or any credentials — Theo manages these
- Deployed Docker image tags — Forge handles container versioning
