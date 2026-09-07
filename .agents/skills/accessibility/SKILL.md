---
name: accessibility
description: Guidelines for web accessibility (WCAG AA), keyboard navigation, semantic markup, and ARIA roles.
---

# Accessibility (a11y)

Ensure all components and user flows are accessible to all users.

## Checklist

- **Semantic HTML**: Use native semantic tags (`<button>`, `<main>`, `<nav>`, `<header>`, `<footer>`, `<dialog>`) instead of generic `<div>` clickables.
- **Keyboard Navigation**: All interactive elements must have clear focus rings (`:focus-visible`) and be navigable via Tab/Shift+Tab and Enter/Space.
- **Color Contrast**: Verify contrast ratios meet WCAG AA standards (minimum 4.5:1 for normal text, 3:1 for large text).
- **ARIA Attributes**: Add `aria-label`, `aria-expanded`, and `aria-hidden` where required, without redundant ARIA roles on semantic elements.
- **Form Controls**: Every input must have an associated `<label>` or descriptive `aria-label`.
