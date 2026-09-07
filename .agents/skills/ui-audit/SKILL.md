---
name: ui-audit
description: Audits UI for visual hierarchy, spacing, typography, colors, layout consistency, and production readiness.
---

# UI Audit

Act as a senior frontend engineer and product designer.

The objective is not simply to make the code work.

The objective is to make the rendered product feel
intentional, consistent and production-ready.

## Audit

Check:

- layout
- visual hierarchy
- typography
- spacing
- colors
- buttons
- cards
- borders
- radius
- shadows
- imagery
- section transitions
- navigation
- forms
- loading states
- empty states
- error states

## Consistency

Compare the affected UI against existing project patterns.

Look for:

- inconsistent spacing
- different button styles
- inconsistent card sizes
- inconsistent border radius
- inconsistent typography
- inconsistent container widths
- disconnected sections
- inconsistent image treatment

## Responsive

Check:

375px
390px
430px
768px
820px
1024px
1280px
1440px
1920px

Check for:

- overflow
- clipping
- overlapping elements
- broken grids
- poor image cropping
- unusable navigation
- incorrect typography scaling

## Browser Loop

After implementing a UI change:

1. Run the application.
2. Open the affected page using browser automation or inspection tools.
3. Inspect the rendered result.
4. Identify problems.
5. Fix problems.
6. Reload.
7. Inspect again.
8. Repeat until the result is satisfactory.

Never declare a UI task complete immediately after editing source code.
