---
name: feasibility-spike
description: Systematic 4-phase protocol for validating technical feasibility, platform constraints, and micro-spike proof of concepts
---

# Technical Feasibility & Micro-Spike Protocol

This skill establishes an empirical, 4-phase protocol to validate technical feasibility, uncover platform constraints, and run micro-spikes before writing production code.

***

## When to Run This Protocol

- Before introducing a new external library, native module, or API integration.
- Before embarking on major architectural refactoring across core boundaries.
- When working on platform-sensitive capabilities (background tasks, IPC, WebSockets, file system access, sandbox escapes).
- Whenever implementation feasibility is uncertain or relies on unverified assumptions.

***

## Phase 1: Constraint Identification

Enumerate all boundary constraints that the proposed solution must operate within:

1. **Operating System & Runtime Constraints**:
   - Background execution timeouts (e.g., iOS background fetch limits, Android battery optimization, serverless timeouts).
   - Memory and CPU limits (e.g., V8 heap boundaries, mobile device memory ceilings).
   - Platform availability (e.g., Node.js vs. edge vs. browser APIs).

2. **Sandbox & Security Boundaries**:
   - File system isolation and permissions.
   - Cross-Origin Resource Sharing (CORS) and Content Security Policy (CSP).
   - Storage quotas (LocalStorage, IndexedDB, OPFS).

3. **Dependency & API Boundaries**:
   - Rate limits, quotas, and authentication mechanics.
   - Licensing compatibility and maintenance health of third-party libraries.
   - Breaking changes or deprecation notices in active versions.

***

## Phase 2: Assumption Validation

Critically probe all assumed capabilities:

1. **Search Platform Documentation & Issue Trackers**:
   - Check upstream GitHub issues for open bugs matching the target use case.
   - Verify minimum supported engine/runtime versions (`engines` in `package.json`, Python version compatibility).

2. **Inspect Existing Codebase State**:
   - Use `grep` and `glob` to verify if similar patterns or conflicting dependencies already exist.
   - Confirm active build pipeline configurations and bundling constraints (e.g., ESM vs. CommonJS, Webpack vs. Vite vs. esbuild).

***

## Phase 3: Minimal Proof-of-Concept Spike

Design and run an isolated micro-test:

1. **Scope the Spike**:
   - Limit the spike to 10–20 lines of code targeting only the single riskiest assumption.
   - Isolate the test from the broader codebase (standalone script, scratchpad file, or hermetic test case).

2. **Define Empirical Pass/Fail Criteria**:
   - What exact output, return value, or behavior constitutes success?
   - What constitutes failure or prohibitive performance?

3. **Execute & Observe**:
   - Run the micro-spike using project verification runners or isolated node/python executions.
   - Record exact error messages, stack traces, or performance timings.

***

## Phase 4: Go/No-Go Decision Matrix

Synthesize findings into a definitive verdict:

| Verdict | Meaning | Next Action |
|---|---|---|
| **GO (Feasible)** | Viability confirmed; no blocking platform constraints. | Proceed with leanest happy-path implementation. |
| **PIVOT (High Risk)** | Viable only with significant workarounds or trade-offs. | Propose alternative architectural approach before coding. |
| **NO-GO (Impossible)** | Hard platform, security, or API blocker prevents execution. | Document blocker, halt implementation, and report to user. |

### Output Verdict Template

```markdown
### Feasibility Verdict: [GO | PIVOT | NO-GO]

- **Primary Constraints Identified**: [Summary of hard boundaries]
- **Spike Outcome**: [Results of micro-spike validation]
- **Identified Risks**: [Key risks and mitigation strategies]
- **Recommended Action**: [Lean implementation plan or proposed alternative]
```
