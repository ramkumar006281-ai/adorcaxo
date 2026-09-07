# Project Development Rules

## Before making changes

Always:

1. Inspect the existing implementation.
2. Understand the relevant components.
3. Check existing design patterns.
4. Reuse existing components where possible.
5. Identify all affected files.
6. Make a short implementation plan before coding.

Do not unnecessarily rewrite working code.

---

## UI Development

The UI must feel like one coherent product.

Check:

- typography
- spacing
- colors
- buttons
- cards
- borders
- border radius
- shadows
- imagery
- section spacing
- container widths
- navigation
- forms
- visual hierarchy

Do not introduce a new visual pattern when an existing
project pattern can be reused.

---

## Responsive Design

Every UI change must be considered at:

- 375px
- 390px
- 430px
- 768px
- 820px
- 1024px
- 1280px
- 1440px
- 1920px

Check for:

- horizontal scrolling
- overflow
- clipping
- overlapping elements
- broken grids
- bad image cropping
- typography problems
- excessive whitespace
- insufficient whitespace
- mobile navigation problems
- unusable buttons

---

## Browser Validation

When making UI changes:

1. Start the application.
2. Open the affected page.
3. Inspect the actual rendered page.
4. Test interactions.
5. Check responsive layouts.
6. Identify visual problems.
7. Fix them.
8. Re-check the page.

Do not assume the UI is correct because the code compiles.

---

## Testing

Run relevant tests after implementation.

Fix failures instead of disabling tests.

---

## Code Quality

Prefer:

- existing architecture
- reusable components
- TypeScript types
- minimal changes
- maintainable code

Avoid:

- unnecessary dependencies
- duplicated components
- arbitrary hacks
- magic numbers
- huge components
- unrelated changes

---

## Completion Rule

Do not report a task as complete until:

- requested functionality works
- browser validation has been performed
- responsive behavior has been checked
- relevant tests pass
- obvious visual inconsistencies are fixed
- the final code has been reviewed

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
