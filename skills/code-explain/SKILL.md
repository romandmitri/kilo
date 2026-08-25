---
name: code-explain
description: Protocol for conducting architectural, lifecycle flow, design pattern, and domain walkthroughs of codebases, modules, or complex subsystems
---

# Code & Architecture Walkthrough Protocol

This skill establishes a structured protocol for analyzing and explaining complex codebases, services, modules, or algorithms with high architectural clarity and zero fluff.

***

## When to Run This Protocol

- When asked to explain, walk through, or analyze how a system, module, or specific file works.
- When onboarding or inspecting unfamiliar architectures, design patterns, or execution paths.
- When preparing for major refactoring or integrating new systems into legacy structures.

***

## Phase 1: Context & Dependency Analysis

Inspect the target file(s) and their immediate relationships using search tools (`read`, `grep`, `glob`):

1. **Module Boundary & Entry Points**:
   - Identify exported interfaces, classes, functions, and public APIs.
   - Trace callers and upstream invocations.

2. **Upstream & Downstream Dependencies**:
   - Trace imports (standard library, third-party packages, internal modules).
   - Identify database connections, network endpoints, message queues, and external IO boundaries.

***

## Phase 2: Structural Breakdown

Analyze the code across five structured dimensions:

1. **Core Purpose**:
   - Define the primary business/domain problem this code solves in 1–2 sentences.

2. **Key Components & Lifecycle Flow**:
   - Detail the primary data structures, lifecycle stages, state mutations, and method execution order from entry to exit.

3. **Design Patterns & Architecture**:
   - Identify established patterns (e.g., Factory, Adapter, Observer, Middleware, Dependency Injection, Strategy).
   - Explain why this pattern was chosen and how it isolates responsibilities.

4. **Integration Points & Boundary Contracts**:
   - Document how this code interfaces with external services, databases, or neighboring services/modules.

5. **Edge Cases, Concurrency & Failure Modes**:
   - Highlight error handling paths, timeouts, retry mechanics, race conditions, memory management, or caching strategies.

***

## Phase 3: Walkthrough Synthesis

Deliver a concise, structured walkthrough adhering to the following format:

```markdown
### 1. Executive Summary
[High-level purpose and core domain responsibility]

### 2. Architecture & Data Flow
[Step-by-step lifecycle from entry to exit, state transitions, and key interactions]

### 3. Design Patterns & Structural Idioms
[Identified patterns and architectural paradigms]

### 4. Integration Boundaries & IO
[APIs, database operations, external queues, environment configs]

### 5. Critical Edge Cases & Failure Modes
[Non-obvious logic, concurrency considerations, timeout/error recoveries]
```
