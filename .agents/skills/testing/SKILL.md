---
name: testing
description: Guidelines for running relevant unit, integration, and UI verification tests.
---

# Testing

Before changing code:

Understand existing tests.

After changing code:

1. Run relevant tests.
2. Check failures.
3. Identify root causes.
4. Fix implementation.
5. Run tests again.

For UI changes also perform browser validation.

Never:

- delete tests to make them pass
- disable failing tests without justification
- ignore console errors
- ignore TypeScript errors
- claim success without verification
