---
name: debugging
description: Systematic troubleshooting runbook for locating and resolving runtime, compile-time, and rendering issues.
---

# Debugging

Systematic approach to identifying and fixing defects.

## Procedure

1. **Reproduce**: Confirm and isolate the exact issue in local development or logs.
2. **Inspect Console & Terminal**: Check terminal compile output, Next.js build errors, and browser console warnings.
3. **Trace Root Cause**: Inspect relevant components and data flows rather than applying surface-level band-aids.
4. **Minimal Fix**: Implement the most precise, clean fix that solves the root cause without side effects.
5. **Verify**: Test the scenario that triggered the error and run existing tests to ensure no regressions.
