# ADORCA 360 — PERMANENT AGENT RULES

## READ THIS BEFORE EXECUTING ANY PHASE

These rules apply to **EVERY phase of the Adorca 360 redesign**.

They override convenience, speed, personal assumptions, and the temptation to make isolated sections look impressive.

You are not merely implementing UI.

You are building a **coherent visual system**.

---

# RULE 01 — UNDERSTAND BEFORE MODIFYING

Never modify code simply because you think something could look better.

Before changing anything:

1. Inspect the existing implementation.
2. Understand component relationships.
3. Understand the current design system.
4. Identify reusable components.
5. Identify existing responsive behavior.
6. Identify existing animation infrastructure.
7. Identify existing assets.
8. Identify dependencies.
9. Identify potential regressions.

Do not destroy existing functionality to achieve visual changes.

---

# RULE 02 — PRESERVE FUNCTIONALITY

Visual redesign must not break:

* navigation
* routing
* forms
* CTAs
* links
* interactive elements
* API integrations
* analytics
* SEO functionality
* accessibility
* responsive behavior
* existing business logic

If an existing component works correctly, improve its presentation before replacing its underlying behavior.

---

# RULE 03 — NEVER REDESIGN IN ISOLATION

Every new component must belong to the global Adorca design system.

Before creating a new:

* button
* card
* badge
* heading
* section
* animation
* border treatment
* spacing pattern
* interaction

ask:

> Does this already exist?

If yes:

**reuse it.**

If it needs improvement:

**improve the shared component.**

Do not create five slightly different versions of the same pattern.

---

# RULE 04 — ONE WEBSITE, NOT A COLLECTION OF SECTIONS

The website must feel like one continuous experience.

A visitor should not feel:

```text
Hero = one design
Growth Intelligence = another design
Services = another design
Case Studies = another design
CTA = another design
```

Instead:

```text
ONE BRAND
ONE DESIGN LANGUAGE
ONE VISUAL SYSTEM
ONE EXPERIENCE
```

Individual sections may have different environments, but they must share the same underlying design DNA.

---

# RULE 05 — DESIGN SYSTEM BEFORE DECORATION

Do not start by adding:

* gradients
* shadows
* glow
* particles
* animation
* photography
* 3D
* decorative graphics

First solve:

```text
Hierarchy
Composition
Typography
Spacing
Grid
Contrast
Information architecture
```

Decoration comes last.

---

# RULE 06 — STATIC DESIGN MUST WORK WITHOUT MOTION

This is critical.

Before adding significant animation, temporarily disable motion.

Ask:

> Does this section still look premium?

If NO:

**fix the layout.**

Never use animation to hide weak composition.

---

# RULE 07 — NEVER USE MOTION AS DECORATION

Every meaningful animation must have a reason.

Good:

```text
Graph → shows growth
Node → shows connection
Counter → shows measurable result
Timeline → shows progression
Signal → shows movement through system
Map → shows geographic scale
```

Bad:

```text
Random floating objects
Random particles
Random parallax
Random text movement
Random glowing elements
```

Motion must communicate meaning.

---

# RULE 08 — REDUCE VISUAL NOISE

When deciding between:

```text
MORE
```

and:

```text
LESS BUT BETTER
```

prefer:

**LESS BUT BETTER.**

Premium design is not achieved by filling empty space.

Whitespace is part of the design.

---

# RULE 09 — CARD DISCIPLINE

Cards are a tool, not the default layout.

Before creating a card ask:

> Does this information genuinely require containment?

If not:

Use:

* typography
* whitespace
* dividers
* editorial layout
* numbered structure
* visual hierarchy

instead.

Avoid:

```text
CARD CARD CARD
CARD CARD CARD
CARD CARD CARD
```

across the entire website.

---

# RULE 10 — NO RANDOM VISUAL TRENDS

Do not introduce trends merely because they are currently popular.

Avoid automatically adding:

* glassmorphism
* neon gradients
* purple AI gradients
* excessive rounded corners
* giant floating blobs
* generic 3D
* AI brains
* humanoid robots
* cyberpunk dashboards
* crypto aesthetics

Ask:

> Does this strengthen Adorca's positioning?

If not:

**do not use it.**

---

# RULE 11 — TYPOGRAPHY IS A PRIMARY DESIGN ELEMENT

Do not treat typography as secondary.

Typography should create:

* hierarchy
* rhythm
* scale
* emotion
* authority
* editorial character

Use large typography strategically.

Do not make every heading enormous.

Use contrast between:

```text
DISPLAY
HEADLINE
BODY
METADATA
```

---

# RULE 12 — WHITESPACE IS INTENTIONAL

Do not automatically reduce whitespace because a section looks “empty.”

Ask:

> Is the emptiness creating focus?

If yes:

**keep it.**

Premium websites often use space as an active compositional element.

---

# RULE 13 — ASYMMETRY WITH CONTROL

Do not make every section symmetrical.

Use:

* offset columns
* uneven widths
* oversized numbers
* narrow text blocks
* full-width statements
* visual interruptions
* controlled negative space

But never create asymmetry that damages readability.

Asymmetry must feel:

**intentional, not broken.**

---

# RULE 14 — DO NOT INVENT CONTENT

Never invent:

* statistics
* clients
* testimonials
* awards
* certifications
* case studies
* results
* services
* company history
* business claims

If content is missing:

use the existing content differently.

Do not fabricate content to fill a design.

---

# RULE 15 — BUSINESS CLAIMS ARE IMMUTABLE

Do not change factual claims such as:

* years of experience
* markets
* percentages
* client results
* testimonials
* company history

unless explicitly instructed.

Visual formatting may change.

The factual meaning must not.

---

# RULE 16 — NEVER FABRICATE DATA VISUALIZATIONS

If a visualization contains numbers:

those numbers must come from actual available data.

If the visualization is illustrative:

clearly label it:

```text
ILLUSTRATIVE
```

or equivalent.

Never create a beautiful fake graph and present it as actual performance.

---

# RULE 17 — ASSET ANTI-HALLUCINATION

Never invent:

* image URLs
* filenames
* asset paths
* licenses
* photographers
* stock IDs
* downloaded files
* image availability

First inspect:

```text
existing project assets
```

Then consider:

```text
SVG
CSS
Canvas
generated visualization
```

Only after that consider external imagery.

---

# RULE 18 — WHEN AN IMAGE IS REQUIRED, STOP ONLY THAT DEPENDENCY

If a specific external image is genuinely required and is not available:

do NOT invent a replacement.

Report:

```text
ASSET REQUIRED

Section:
[section]

Asset:
[exact description]

Purpose:
[why it is needed]

Reference:
[verified URL]

Source:
[verified source]

Recommended:
[dimensions]

Crop:
[aspect ratio]

Treatment:
[visual treatment]

ACTION:
Please download/provide this asset.
```

Then continue implementing everything that does not depend on that asset.

Do not unnecessarily block the entire project.

---

# RULE 19 — IMAGE REFERENCES ARE NOT AUTOMATIC PERMISSION

A reference image means:

> “Use this to understand the visual direction.”

It does NOT mean:

> “Download and use this exact image.”

Verify the source and licensing before implementation.

Never assume Google Images means free.

Never assume an Unsplash search result is free without verification.

---

# RULE 20 — CUSTOM VISUALIZATION FIRST

When a concept can be communicated more effectively through:

* SVG
* CSS
* Canvas
* HTML
* data visualization
* diagram
* interactive system

prefer that over stock photography.

Especially for:

* Growth Intelligence
* Search
* Infrastructure
* Attribution
* Growth Orbit
* Search Demand
* Global Markets

These should feel **owned by Adorca**.

---

# RULE 21 — DO NOT OVERUSE PHOTOGRAPHY

Photography should support the brand, not define it.

Target approximately:

```text
60–70% custom visualizations
20–30% photography
10% texture / abstract
```

If a section works better without an image:

**remove the image.**

---

# RULE 22 — VISUAL CONSISTENCY CHECK

Every new section must be compared against:

* previous section
* design tokens
* typography
* spacing
* border system
* radius system
* button system
* image treatment
* motion language

Ask:

> Does this look like the same company?

If not:

fix it before proceeding.

---

# RULE 23 — RESPONSIVE DESIGN STARTS WITH THE DESIGN

Never:

```text
Desktop first
↓
shrink everything
↓
hope mobile works
```

Instead:

```text
Desktop composition
↓
Tablet composition
↓
Mobile composition
```

Mobile can have a different composition.

It must not simply be a smaller desktop.

---

# RULE 24 — MOBILE HAS ITS OWN ART DIRECTION

On mobile:

Prefer:

```text
vertical narrative
clear hierarchy
shorter visual sequences
simplified diagrams
reduced motion
large readable typography
intentional spacing
```

Avoid:

```text
desktop diagrams squeezed into mobile
horizontal overflow
tiny text
complex orbital systems
giant canvases
sticky sections that trap scrolling
```

---

# RULE 25 — PERFORMANCE IS PART OF THE DESIGN

Never sacrifice performance just to create visual effects.

Prioritize:

* fast rendering
* optimized assets
* lazy loading
* low layout shift
* transform/opacity animation
* efficient observers
* minimal dependencies
* deferred noncritical effects

The site sells performance.

Therefore:

**the implementation itself must demonstrate performance discipline.**

---

# RULE 26 — ACCESSIBILITY CANNOT BE TRADED FOR DESIGN

Never remove:

* focus states
* keyboard navigation
* semantic HTML
* readable contrast
* meaningful alt text
* accessible controls
* reduced-motion support

A premium website is accessible.

---

# RULE 27 — DO NOT ADD DEPENDENCIES WITHOUT JUSTIFICATION

Before installing a package ask:

1. Is it genuinely necessary?
2. Does the project already solve this?
3. What is the bundle/performance cost?
4. Can native CSS/SVG/JS solve it?
5. Will it increase maintenance complexity?

Prefer the existing stack.

---

# RULE 28 — REUSE COMPONENTS

If several sections need similar behavior:

create a reusable component.

Examples:

```text
SectionHeading
Metric
Reveal
SignalNode
Diagram
Button
Metadata
Timeline
```

Do not duplicate logic unnecessarily.

---

# RULE 29 — DO NOT OVER-ENGINEER

The opposite problem is also dangerous.

Do not build:

* unnecessary state systems
* huge animation engines
* complicated abstractions
* WebGL systems when SVG is enough
* complex data structures for static content

Use the simplest architecture that produces the required experience.

---

# RULE 30 — VERIFY REAL RENDERING

Never judge the result only from code.

After implementation:

```text
RUN
↓
OPEN ACTUAL PAGE
↓
INSPECT RENDERED RESULT
↓
CHECK DESKTOP
↓
CHECK TABLET
↓
CHECK MOBILE
```

Code correctness does not equal design correctness.

---

# RULE 31 — VISUAL QA IS MANDATORY

After every major change:

inspect the actual rendered page.

Look for:

* spacing inconsistencies
* alignment issues
* awkward line breaks
* oversized elements
* weak hierarchy
* excessive borders
* excessive cards
* animation collisions
* mobile overflow
* visual repetition

Fix the highest-impact problems first.

---

# RULE 32 — TOP 5 DEFECT RULE

After every phase:

identify the five biggest remaining visual problems.

Example:

```text
TOP 5 DEFECTS

1. Hero typography lacks dominance
2. Growth Intelligence is too card-heavy
3. Section spacing inconsistent
4. Mobile diagram overflows
5. CTA visually disconnected
```

Fix those before polishing minor details.

---

# RULE 33 — DO NOT POLISH LOW-IMPACT DETAILS TOO EARLY

Do NOT spend 30 minutes perfecting:

* tiny hover effects
* icon alignment
* subtle shadows

while:

* typography is weak
* composition is weak
* spacing is inconsistent
* sections feel disconnected

Always fix:

```text
STRUCTURE
↓
HIERARCHY
↓
COMPOSITION
↓
SPACING
↓
TYPOGRAPHY
↓
VISUAL STORY
↓
MOTION
↓
MICRO-POLISH
```

---

# RULE 34 — DO NOT DECLARE SUCCESS PREMATURELY

Never say:

> “Done”

because:

* the page compiles
* animations work
* mobile renders
* cards look modern
* the site looks different

Completion requires:

**visual QA + responsive QA + performance QA + consistency QA.**

---

# RULE 35 — STOP CONDITIONS

Pause and ask for user input only when:

### A

A required external asset must be provided.

### B

A business claim is ambiguous.

### C

A destructive architectural change is required.

### D

A missing API/backend dependency prevents correct implementation.

### E

There are multiple materially different design directions and the choice cannot reasonably be made from the established design system.

Otherwise:

**continue autonomously.**

---

# RULE 36 — DO NOT ASK UNNECESSARY QUESTIONS

Do not repeatedly ask:

> “Should I continue?”

> “Would you like me to implement this?”

> “Should I make this more premium?”

The design direction has already been established.

Make informed decisions based on the master specification.

Ask only when genuinely blocked.

---

# RULE 37 — EACH PHASE MUST HAVE A SINGLE PRIMARY GOAL

Do not mix unrelated objectives.

For example:

Phase 1:

```text
DESIGN SYSTEM
```

not:

```text
Design system
+ hero animation
+ image replacement
+ case studies
+ mobile redesign
```

Keep each phase focused.

---

# RULE 38 — DO NOT MOVE TO THE NEXT PHASE WITH KNOWN CRITICAL DEFECTS

Before continuing:

```text
CRITICAL DEFECTS = 0
```

Examples:

* broken layout
* broken interaction
* inconsistent design tokens
* major mobile overflow
* broken CTA
* unreadable typography
* visual hierarchy failure

Minor polish may remain.

Critical defects may not.

---

# RULE 39 — KEEP A CHANGE LOG

At the end of every phase maintain:

```text
PHASE
WHAT CHANGED
FILES CHANGED
COMPONENTS CREATED
COMPONENTS MODIFIED
ASSETS ADDED
DEPENDENCIES ADDED
KNOWN ISSUES
NEXT PHASE
```

This prevents the project from becoming difficult to reason about.

---

# RULE 40 — MAINTAIN A DESIGN DECISION LOG

When making an important design decision, record:

```text
DECISION:
[what]

REASON:
[why]

ALTERNATIVES REJECTED:
[what]

DESIGN PRINCIPLE:
[what principle supports it]
```

This prevents inconsistent decisions later.

---

# RULE 41 — PROTECT THE BRAND FROM DRIFT

As the project becomes more elaborate, continuously ask:

> Are we still building Adorca?

The further implementation progresses, the easier it is to drift toward:

* generic SaaS
* generic AI
* futuristic dashboard
* agency template
* over-designed portfolio

If drift occurs:

**return to the design north star.**

---

# RULE 42 — THE “REMOVE 20%” TEST

After completing a section, inspect it again.

Ask:

> Can 20% of the visual elements be removed without reducing meaning?

If yes:

remove them.

This prevents visual accumulation across phases.

---

# RULE 43 — THE “WHY DOES THIS EXIST?” TEST

For every major visual element ask:

```text
Why does this exist?
What does it communicate?
Why is this better than the simpler alternative?
```

If there is no strong answer:

remove it.

---

# RULE 44 — THE “ADJUST, DON'T REPLACE” RULE

When an existing section has good information architecture:

do not automatically rebuild it from scratch.

First ask:

> Can better typography, spacing, hierarchy and composition solve the problem?

Preserve good foundations.

Replace only when necessary.

---

# RULE 45 — NEVER LET ONE SECTION DOMINATE THE ENTIRE SITE

Growth Intelligence and Growth Orbit are signature moments.

But the rest of the website must support them.

Do not make every section equally cinematic.

Use hierarchy:

```text
SIGNATURE
↓
SUPPORTING
↓
EDITORIAL
↓
INFORMATIONAL
```

The contrast makes the signature moments stronger.

---

# RULE 46 — FINAL EXPERIENCE TEST

At the end, forget the implementation details.

Experience the website as a first-time visitor.

Ask:

```text
Within 5 seconds:
Do I understand what Adorca does?

Within 15 seconds:
Do I understand what makes it different?

Within 30 seconds:
Do I believe the organization is technically sophisticated?

After exploring:
Do I remember the visual identity?

Before leaving:
Do I understand what action I should take?
```

If not:

the design still needs work.

---

# MASTER PRINCIPLE

When uncertain, choose:

```text
SIMPLER
OVER
MORE

OWNABLE
OVER
GENERIC

MEANING
OVER
DECORATION

COMPOSITION
OVER
EFFECTS

CONSISTENCY
OVER
NOVELTY

PERFORMANCE
OVER
VISUAL EXCESS

EVIDENCE
OVER
CLAIMS

PRECISION
OVER
NOISE
```

---

# FINAL AGENT INSTRUCTION

You are not trying to make the website look impressive for five seconds.

You are building a **long-term visual identity for Adorca 360**.

Every phase must make the entire product feel more coherent.

If a new implementation makes one section better but makes the overall website less coherent:

**reject that implementation.**

If an effect looks impressive but weakens clarity:

**remove it.**

If a simpler solution communicates the same idea better:

**use the simpler solution.**

If the static design is weak:

**do not hide it with animation.**

If an asset is missing:

**do not hallucinate it.**

If the result is merely “modern” but not distinctive:

**continue iterating.**

The standard is not:

> “Does it work?”

The standard is:

> **“Does it feel unmistakably like a premium Adorca growth intelligence system?”**

Only proceed phase-by-phase when that standard is being met.
