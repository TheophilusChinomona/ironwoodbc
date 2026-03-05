# .tasks/ — Agent Task Board

This directory is the task board for this project. Zach (orchestrator) creates task files here before dispatching agents.

## How It Works

1. Theo requests work → Zach plans and breaks it into scoped tasks
2. Zach creates a task file per agent: `<agent>-<slug>.md`
3. Zach dispatches the agent to this repo
4. Agent reads `.tasks/`, picks up their task(s), does the work
5. Agent updates the task file status to `done` and creates a PR
6. Zach or Theo reviews and merges

## Task File Format

```markdown
# <Task Title>

**Agent:** pixel | backend | forge
**Status:** pending | in-progress | done | blocked
**Priority:** high | medium | low
**Branch:** <agent>/<feature-slug>

## Objective

What needs to be built/changed and why.

## Scope

- [ ] Specific deliverable 1
- [ ] Specific deliverable 2

## Context

Relevant files, design refs, API contracts, or links.

## Acceptance Criteria

What "done" looks like.

## Notes

Anything else — constraints, gotchas, dependencies on other tasks.
```

## Naming Convention

- `pixel-<slug>.md` — frontend tasks for Pixel
- `backend-<slug>.md` — backend tasks for Atlas
- `forge-<slug>.md` — infra/deploy tasks for Forge
- `plan-<slug>.md` — Zach's breakdown plan (read-only reference for agents)

## Rules

- Agents read their own task files on session start
- Agents update `Status:` as they work
- Agents check off scope items as completed
- Task files are committed to the repo (provides history)
- Completed tasks can be moved to `.tasks/done/` or deleted after merge
