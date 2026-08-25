---
description: Evaluate technical feasibility, platform limitations, and API viability before building
agent: feasibility-checker
---

Critically evaluate the technical feasibility, platform limitations, and architectural viability for: $ARGUMENTS.

Current Git diff context:
!`git diff HEAD~1..HEAD 2>/dev/null || git diff 2>/dev/null || echo "No git diff available"`

Apply the `feasibility-spike` protocol:
1. Identify all OS, sandbox, browser, network, and runtime boundary constraints.
2. Probe unverified assumptions, library compatibility, and API rate limits.
3. Formulate a 10–20 line minimal proof-of-concept spike to validate riskiest assumptions.
4. Deliver a structured verdict: Status (FEASIBLE / HIGH_RISK / IMPOSSIBLE), Hard Constraints, Spike Design, and Go/No-Go Recommendation.
