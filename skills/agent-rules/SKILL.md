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

1. **Scope Classification**:
   - **Global / Cross-Project**: Universal preferences (e.g., package manager habits, comment density, default shell tools). Target: `~/.config/kilo/AGENTS.md`.
   - **Project Root**: Repository-wide architectural and coding standards. Target: `/AGENTS.md`.
   - **Service-Specific**: Framework or domain rules (e.g., Next.js conventions, React component templates, backend service patterns). Target: `services/{name}/AGENTS.md`.
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
   - Update the target `AGENTS.md` file using `edit` or `write`.
   - Ensure markdown hierarchy and list formatting remain consistent with the rest of the document.

3. **Global Promotion Recommendation**:
   - If the preference applies globally across all projects, explicitly recommend that the user persist it in `~/.config/kilo/AGENTS.md` or apply it directly to the global configuration.

***

## Quality Checklist

- [ ] Rule is concise, unambiguous, and directly actionable.
- [ ] Correct target file selected (root, service-specific, or nested).
- [ ] No duplicate or contradictory entries created.
- [ ] Examples provided for syntax-sensitive or formatting-sensitive rules.
- [ ] Global promotion recommended if broadly applicable.
