---
description: Re-reads repository structure, detects architectural drift, and updates CONTEXT.md
agent: context-sync
---

Perform a full repository reconciliation and update `CONTEXT.md`:
1. Audit all service directories, configuration manifests, and core domain schemas.
2. Cross-reference existing `CONTEXT.md` entries with the current state of the filesystem.
3. Remove stale services, obsolete patterns, or deleted file references.
4. Add newly introduced services, shared boundaries, and core entities.
5. Apply lean updates directly to `CONTEXT.md`.
