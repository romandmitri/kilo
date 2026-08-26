---
name: agent-rules
description: Protocol for capturing, categorizing, and persisting behavioral feedback, coding conventions, and architectural preferences into hierarchical AGENTS.md files
---

# Agent Rules & Behavioral Persistence Protocol

This skill provides a systematic protocol for capturing user feedback, corrections, and workflow preferences during conversations and persisting them into the appropriate `AGENTS.md` hierarchy so the user never has to repeat themselves.

***

## When to Run This Protocol

- Whenever the user instructs an agent to change its behavior, style, workflow, or architectural pattern.
- When the user provides corrective feedback ("do not do X", "always use Y", "format Z like this").
- When establishing or adjusting service-specific or directory-scoped coding standards.
- When auditing, de-duplicating, or promoting local rules to global Kilo configuration.

***

## Phase 1: Scope & Intent Analysis

Analyze the user's instruction to determine scope and durability:

1. **Scope Classification & Global Target Priority**:
   - **Global / Cross-Project (Default for General Rules)**: Whenever behavioral feedback, engineering standards, subagent definitions, or skill adjustments apply across projects or represent developer habits, **directly update the global configuration in `~/.config/kilo/`** (specifically `~/.config/kilo/AGENTS.md`, `~/.config/kilo/agent/*.md`, `~/.config/kilo/skills/*`), even when currently working in a deeper or separate repository.
   - **Project Root**: Rules strictly unique to a specific repository. Target: `/AGENTS.md`.
   - **Service-Specific**: Rules strictly unique to a service tree (e.g., Next.js conventions, React component templates). Target: `services/{name}/AGENTS.md`.
   - **Nested Sub-Module**: Scoped to deep directories, plugins, or isolated boundaries. Target: `{path}/AGENTS.md`.

2. **Durability Check**:
   - Ensure the instruction is an enduring rule/guardrail rather than a transient, one-time task request.

***

## Phase 2: Conflict Resolution & Categorization

1. **Inspect Existing Rules**:
   - Read the target `AGENTS.md` file (and parent `AGENTS.md` if applicable).
   - Check for conflicting, redundant, or obsolete rules.

2. **Categorize the Rule**:
   - **Core Operating Principles**: High-level workflow, verification, communication rules.
   - **Lean & Minimalist Coding Mandates**: Simplicity, ternary bans, styling constraints, configuration single source of truth, package pinning.
   - **Engineering & Language Standards**: TypeScript/JS strictness, imports, type aliases, async/await patterns.
   - **Service / Component Guidelines**: Component templates, extraction rules, UI library placement (e.g., shadcn).
   - **Security & Data Protection**: Secret management, shell safety, injection defense.

3. **Supersede Conflicting Rules**:
   - If the new instruction contradicts an older rule, remove or update the outdated rule cleanly.

***

## Phase 3: Formatting & Persistence

1. **Write Direct, Actionable Rules**:
   - Use concise, imperative language.
   - Include clear "Correct" vs. "Incorrect" examples when syntax or formatting is involved.
   - Avoid conversational filler or timestamps in the guideline text.

2. **Apply Scoped Update**:
   - Update the target file using `edit` or `write`.
   - When the rule is a general convention or behavioral update, target `~/.config/kilo/AGENTS.md` (and corresponding global subagents/skills in `~/.config/kilo/`) regardless of the active working directory.
   - Ensure markdown hierarchy and list formatting remain consistent with the rest of the document.

***

## Quality Checklist

- [ ] Rule is concise, unambiguous, and directly actionable.
- [ ] Correct target file selected (root, service-specific, or nested).
- [ ] No duplicate or contradictory entries created.
- [ ] Examples provided for syntax-sensitive or formatting-sensitive rules.
- [ ] Global configuration files in `~/.config/kilo/` updated directly for general behavioral/coding standards.
