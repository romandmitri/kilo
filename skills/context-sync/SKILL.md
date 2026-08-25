---
name: context-sync
description: Protocol for auditing repository architecture, directory topology, and reconciling CONTEXT.md with the actual codebase
---

# Context Synchronization Protocol

This skill establishes a structured workflow for auditing repository structure, identifying documentation drift, and reconciling `CONTEXT.md` to ensure high accuracy and token efficiency.

***

## When to Run This Protocol

- Periodically as the codebase grows, restructures, or adds new services.
- After creating or deleting services, core modules, schemas, or tech stack layers.
- When an AI agent demonstrates drift or incorrect assumptions about codebase topology.
- Following major refactoring or milestone releases.

***

## Phase 1: Topography Audit

Inspect the actual state of the codebase using search tools (`glob`, `grep`, `read`):

1. **Service & Module Layout**:
   - List root folders, services (`services/*`), applications, and packages.
   - Discover domain modules (`src/modules/*` or service-specific module trees).

2. **Configuration & Manifests**:
   - Inspect package manifests (`package.json`, `Cargo.toml`, `go.mod`, etc.).
   - Identify active frameworks, runtime engines, and primary libraries.

3. **Core Entities & Schemas**:
   - Identify primary database schemas (Prisma, Drizzle, TypeORM, migrations) or core type definitions (`src/**/type/*`, `src/**/schema/*`).
   - Note critical external integration boundaries (APIs, auth providers, queues).

***

## Phase 2: Drift Detection & Gap Analysis

Read current `CONTEXT.md` and cross-reference with Phase 1 findings:

1. **Deleted / Renamed Paths**: Remove references to paths, services, or configurations that no longer exist.
2. **Missing Services / Modules**: Add newly introduced subprojects or architectural boundaries.
3. **Tech Stack Alignments**: Update versions, runtime details, or architectural paradigms if shifted.
4. **Token Budget Check**: Ensure the document stays concise (50–150 lines) and excludes ephemeral or function-level details.

***

## Phase 3: Reconciliation & Lean Update

Apply minimal, structured updates to `CONTEXT.md` following this structure:

```markdown
# Project Context

[High-level mission and repository type]

## Architecture & Services
- `services/<service-a>`: [Purpose, tech stack, key entry points]
- `services/<service-b>`: [Purpose, tech stack, key entry points]

## Core Domain Models & Schemas
- `[Entity A]`: [Core data structure or role]
- `[Entity B]`: [Core data structure or role]

## Boundaries & Technical Constraints
- [Runtimes, database engines, message queues, external APIs]
```

***

## Quality Rules

1. **No Code Snippets or Function Signatures**: Keep `CONTEXT.md` focused on architectural topography.
2. **Single Source of Truth**: Keep operational coding rules in `AGENTS.md` and repository map in `CONTEXT.md`.
3. **Zero Decoration**: Avoid unnecessary filler text to maximize prompt token efficiency.
