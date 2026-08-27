# Rules of Engagement & Agent Guidelines

This document sets the operational standards, minimalist coding guidelines, security mandates, verification commands, and collaboration protocols for AI coding assistants working within this repository.

***

## 1. Core Operating Principles

1. **Verify Before Modifying**:
   - Always inspect existing code, directory structures, dependencies, and configuration before writing or editing code.
   - Use dedicated file and search tools (`glob`, `grep`, `read`) rather than shell-based utilities where possible.
   - Ground all assumptions in repository evidence.

2. **Feasibility-First Mindset**:
   - Before implementing complex features or major refactors, critically verify that target APIs, platform capabilities, and system dependencies exist and are supported.
   - Identify platform boundary constraints (sandboxes, background limits, OS API availability) before writing code.
   - If technical feasibility is uncertain, conduct an isolated micro-spike or invoke the `feasibility-checker` subagent.

3. **Idiomatic Integration**:
   - Strictly adhere to established patterns, directory structures, naming conventions, and typing rules.
   - Match existing indentation, linting rules, and framework paradigms.
   - Keep diffs focused: avoid unnecessary reformatting or restructuring of unrelated code.

4. **Self-Verification Loop**:
   - Never consider a task complete without verification.
   - Identify and execute relevant build, type-check, lint, and test commands before declaring completion.
   - If a test or check fails, diagnose the root cause and resolve it cleanly; do not bypass or disable tests without explicit instruction.

5. **Comments & Communication**:
   - Only include comments if the code is non-trivial. Comment the *why* behind complex logic, non-obvious trade-offs, or boundary conditions.
   - Place comments into structured blocks above a function or into blocks within the function. One-line comments scattered here and there are discouraged.
   - Never write self-referential comments (e.g., `// Added by AI assistant`).
   - Never communicate with the user through source code comments.

6. **Zero Repetition & Global Feedback Persistence**:
   - Whenever the user instructs an agent to do something differently (e.g. coding styles, architectural patterns, workflow habits, package preferences), immediately persist this instruction into the relevant `AGENTS.md` file so the user never has to repeat themselves.
   - **Global Configuration Target (`~/.config/kilo/`)**: Even when working inside a deeper or separate repository/worktree, general behavioral rules, engineering standards, subagent definitions, and skills MUST directly target and update the global configuration files in `~/.config/kilo/` (specifically `~/.config/kilo/AGENTS.md`, `~/.config/kilo/agent/*.md`, `~/.config/kilo/skills/*`, `~/.config/kilo/kilo.jsonc`).

***

## Lean & Minimalist Coding Mandates

1. **Absolute Minimal Implementation (Happy Path First)**:
   - Write only the simplest, bare-bones code required to achieve the goal in the perfect/happy-path scenario first.
   - Avoid premature abstractions, speculative edge cases, and over-engineered architecture until explicitly demanded.
   - Keep functions compact and single-purpose.
   - Avoid defensive programming against improbable edge cases or nested, redundant safety checks; assume clean, expected input shapes and let standard exceptions handle errors naturally.

2. **Zero Ternary Operators**:
   - Do **NOT** use ternary operators (`condition ? a : b`) for logic, assignments, or returns.
   - Use explicit, readable `if (...) { ... } else { ... }` blocks to ensure clean stack traces and readable branching.

3. **Zero Em Dashes & Clean Punctuation**:
   - Never use long em dashes (`—`).
   - Only use spaced hyphens (` - `) if necessary, and prefer avoiding dashes altogether by writing cleaner, direct sentences.

4. **Minimal Styling & No CSS Bloat**:
   - Restrict styles to bare-bones layout rules and clean semantic HTML/components.
   - Do **NOT** generate massive walls of Tailwind CSS utility classes or decorative styling that clutter and obscure component logic.
   - Keep styling strictly functional and minimal unless explicit design tokens or detailed CSS are requested.

4. **Centralized Configuration & Single Source of Truth**:
   - For all services, ENVs must come from a single file (e.g., `src/common/Config.ts`) structured as:
     ```typescript
     export const Config = {
       AlphaValue: process.env.ALPHA_VALUE,
       BravoValue: () => process.env.BRAVO_VALUE,
     }
     ```
   - Choose direct access (`AlphaValue` style) over getter functions (`BravoValue` style) unless the getter function is necessary for platform or runtime reasons.
   - Do **NOT** chain cascading environment fallbacks (e.g., `process.env.PRIMARY || process.env.SECONDARY || 'default'`).
   - Enforce a single, explicit configuration key or environment variable. If missing, fail fast with a clear error message.
   - Always provide example values for all environment variables (e.g., in `.env.example`).

5. **Standard Package Manager (`npm`) & Strict Dependency Versioning**:
   - Always initialize, scaffold, and manage projects using `npm` by default. Do not use or introduce alternative package managers (`yarn`, `pnpm`, `bun`) unless explicitly requested.
   - **Explicit Version Pinning**: Always use explicit, exact versions when adding or modifying dependencies in `package.json`. Completely ban range prefixes like tilde (`~`) or caret (`^`).
     - Correct: `"express": "4.18.2"`
     - Incorrect: `"express": "^4.18.2"`
   - **Latest Packages First**: Always install explicit latest packages (e.g. `npm install <pkg>@latest --save-exact`). If the latest version is unavailable or conflicts occur, work down toward a stable compatible version or try a different suitable package.

***

## Engineering & Language Standards

### TypeScript & JavaScript
- **Strict Mode**: Maintain 100% strict type compliance. Disallow implicit or unchecked `any`.
- **Package Manager**: Use `npm` for dependency installation with exact versions (`--save-exact`) and project scaffolding.
- **Avoid Primitive `string`**: The generic `string` type should rarely be used directly. Instead, define semantic type aliases in `src/modules/{name}/type/MyString.ts` with `export type MyString = string` and use them across the codebase to ensure clarity. Explain the purpose of the type with comments in the definition file.
- **Async/Await**: Prefer `async`/`await` over raw promise chaining. Handle rejection branches explicitly.
- **Imports**: Use explicit ES module imports with standard ordering: standard library -> external packages -> internal modules. Always use absolute paths instead of relative paths for imports.
- **Functional & Immutable**: Favor pure functions, immutability, and explicit schema validations (e.g., Zod).

### General Code Hygiene
- **DRY with Prudence**: Avoid premature abstractions. Prefer duplication over the wrong abstraction until three distinct call sites emerge.
- **Defensive Programming**: Validate external inputs at system boundaries (HTTP request payloads, CLI args, file inputs).

### Service & Directory Structure
- **Service Layout**: Structure service/application directories (under `services/{name}`) as:
  - `src/`
  - `src/common/adapters/...`
  - `src/common/components/...`
  - `src/common/utility/...`
  - `src/common/Config.ts`
  - `src/common/...`
  - `src/modules/...`
- **Isolation**: Avoid shared `libs` or common folders across different services. Keep each service self-contained.
- **Hierarchical `AGENTS.md` Maintenance**: Actively create and maintain scoped `AGENTS.md` files across the codebase:
  - **Global Base (`~/.config/kilo/AGENTS.md`)**: Root source of truth for global operating standards, minimalist coding mandates, security rules, and engineering baselines applied across all projects.
  - **Project Root (`/AGENTS.md`)**: Project-specific architecture, tech stack baselines, and repository-level conventions.
  - **Service Level (`services/{name}/AGENTS.md`)**: Service-specific rules, framework patterns (React, Next.js, etc.), and local architectural templates.
  - **Deeper Nested Folders**: Create and maintain nested `AGENTS.md` files as needed for complex sub-modules, plugins, or isolated architectural boundaries.

## Security & Data Protection Mandates

- **Secrets & Credentials**:
  - Never commit API keys, tokens, private keys, database connection strings, or `.env` files containing live credentials.
  - Check `.gitignore` before creating any environment or temporary config files.
  - If a secret is encountered in code, report it immediately and do not duplicate it across logs or prompts.

- **Injection Defense**:
  - Use parameterized queries or ORM/query builders for all database interactions.
  - Sanitize untrusted input before rendering into HTML, shell executions, or file paths.
  - Avoid `eval()`, `new Function()`, `exec()`, or unsanitized `child_process.exec()`.

- **Safe Shell Execution**:
  - Avoid destructive commands (`rm -rf /`, `mkfs`, force pushes) unless explicitly instructed.
  - Quote all file paths containing potential spaces or special characters.

## Multi-Agent Protocols & Subagent Delegation

### Kilo Architecture: Skills as Single Source of Truth (SSOT)

To maintain clarity, eliminate configuration drift, and ensure clean separation of concerns, all Kilo agents, skills, and commands must strictly follow the **3-Tier SSOT Architecture**:

1. **Skills (`{skill,skills}/<name>/SKILL.md`, `~/.config/kilo/skills/*/SKILL.md`) — Single Source of Truth**:
   - The authoritative source for all domain rules, business logic, formatting standards, STAR method constraints, quality gates, evaluation checklists, and execution protocols.
   - All procedural guidelines, step-by-step instructions, schemas, and templates MUST reside here.

2. **Agents (`{agent,agents}/<name>.md`, `~/.config/kilo/agent/*.md`) — Lean Execution Shells**:
   - Define runtime configuration: permissions (`edit`, `read`, `glob`, `grep`, `bash`, `skill`, etc.), target models, and execution steps.
   - System prompts must remain minimal: establish persona/identity and explicitly delegate execution to the matching skill using the `skill` tool.
   - **Zero Duplication**: Agents MUST NOT duplicate, paraphrase, or embed domain rules, formatting checklists, or procedures defined in skills.

3. **Commands (`{command,commands}/<name>.md`) — Minimal Invocation Wrappers**:
   - Concise slash-command entrypoints that bind to their target agent (`agent: <name>`) and forward parameters (`$ARGUMENTS` or positional args `$1`, `$2`) directly to the agent.

### Subagent Delegation
- **Read-Only Reviewers & Auditors**: Review, security, and feasibility subagents must operate with read permissions (`edit: deny`, `write: deny`) and refrain from direct code mutations.
- **Feasibility Verification**: Invoke `feasibility-checker` before attempting risky or multi-layer integrations.
- **Context Synchronization**: Whenever a task introduces, removes, or restructures services (`services/*`), top-level modules, or foundational schemas, invoke the `context-sync` subagent via the `task` tool before declaring task completion to ensure `CONTEXT.md` remains synchronized.
- **Handoff Artifacts**: When handing off between agents, provide concrete file paths, line numbers, and structured summaries of findings.
