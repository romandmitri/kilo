# Project Context

This repository serves as a centralized source of truth for AI tooling configurations, subagents, skills, custom slash commands, and domain-specific agent instructions (e.g., Kilo Code).

## Architecture & Layout

- **Root Configurations**:
  - `AGENTS.md`: Global coding standards, minimalist mandates, and verification protocols.
  - `CONTEXT.md`: Repository topography, domain entities, and active tooling registry.
  - `.kilo/kilo.jsonc`: Master Kilo configuration (permissions, models, plugins, MCPs).

- **Services**:
  - `services/react/`: React-specific conventions and component standards (`AGENTS.md`).
  - `services/nextjs/`: Next.js-specific conventions and component standards (`AGENTS.md`).

- **AI Agents & Skills**:
  - `agent/feasibility-checker.md`: Subagent for technical risk, platform limits, and API feasibility audits.
  - `agent/context-sync.md`: Subagent for repository structure discovery and `CONTEXT.md` reconciliation.
  - `skills/feasibility-spike/`: Systematic 4-phase micro-spike verification protocol.
  - `skills/context-sync/`: Systematic 3-phase repository audit and context reconciliation protocol.
  - `skills/agent-rules/`: Systematic 3-phase protocol for capturing, categorizing, and persisting agent rules.
  - `skills/code-explain/`: Systematic 3-phase protocol for architectural, lifecycle, and component walkthroughs.
  - `themes/`: Custom TUI color themes (`cyber-matrix.json`).
  - `plugin/`: Custom Kilo TypeScript plugins (`sample-plugin.ts`).

## Technical Boundaries & Constraints
- Platform: Linux / POSIX compatible shell.
- Tooling: Kilo Code CLI / Agent Manager ecosystem with TypeScript/Node.js runtime.
