# React Agent Guidelines

These rules apply to React service trees and extend the root `AGENTS.md` guidelines.

***

## 1. Minimal Component & Example Construction

- **Bare-Bones HTML & Minimal Tailwind**: When building examples or new components, use simple `<div>` elements with absolute minimum Tailwind CSS styling (e.g., `flex flex-col`) to generate the example.
- **Do Not Overdecorate**: Prioritize concept understanding over pretty visuals.
- **Minimal Effort on Styling**: Only create or update styles when explicitly requested. Do the least amount of work required.

***

## 2. Component Structure & Syntax

- Follow the standard component template:

```typescript
type Props = {}

export const Component = (p: Props) => {

}
```

***

## 3. Component Extraction & Placement

- **Extract Repeated Patterns**: When there is an obvious pattern of repeated components, extract and reuse them.
- **Placement Hierarchy**:
  - Place components in a nearby relevant folder.
  - Or in the respective module (`src/modules/...`).
  - Or in the service common components folder (`services/{name}/src/common/components/`).

***

## 4. Shadcn UI Components

- **Download on Demand**: Download and install shadcn components when they are missing.
- **Location**: Place all shadcn components into `services/{name}/src/common/components/shadcn/`.
