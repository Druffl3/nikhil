# Portfolio Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rework the portfolio into a blue metallic, glossy, image-led, scroll-animated single-page site that positions Nikhil primarily as a UI/UX designer with game design as supporting depth.

**Architecture:** Keep the current Next.js App Router single-page structure and typed local content module, then refactor the page into richer presentational sections that pull from expanded content data. Use custom global CSS tokens plus a lightweight client-side scroll reveal utility so the visual system and animation remain cohesive without introducing heavy dependencies.

**Tech Stack:** Next.js App Router, React, TypeScript, custom CSS in `app/globals.css`, Vitest, Testing Library

---

### Task 1: Expand the content model for media-first sections

**Files:**
- Modify: `src/content/portfolio.ts`
- Test: `app/page.test.tsx`

**Step 1: Write the failing test**

Add expectations that the homepage renders the new UI/UX-first messaging, at least one image-backed project title, and richer labels such as section badges or stat chips sourced from structured content.

**Step 2: Run test to verify it fails**

Run: `npm test -- app/page.test.tsx`
Expected: FAIL because the current content model does not provide the new fields or output.

**Step 3: Write minimal implementation**

Update `src/content/portfolio.ts` to include:
- hero support data such as focus labels, stat chips, and hero media
- project image data and compact metadata
- revised copy that makes UI/UX primary and game design secondary
- about media or profile highlight data

Keep the types explicit and only add fields used by the redesigned components.

**Step 4: Run test to verify it passes**

Run: `npm test -- app/page.test.tsx`
Expected: PASS for the new content-driven expectations that do not yet depend on final styling.

**Step 5: Commit**

Run:

```bash
git add src/content/portfolio.ts app/page.test.tsx
git commit -m "feat(content): expand portfolio data for redesign"
```

### Task 2: Rebuild the hero into a visual lab-style entry

**Files:**
- Modify: `src/components/hero.tsx`
- Modify: `app/page.tsx`
- Modify: `app/page.test.tsx`

**Step 1: Write the failing test**

Add assertions for:
- the updated hero headline hierarchy
- the hero media region
- focus chips or stat tiles
- both CTA links remaining present

**Step 2: Run test to verify it fails**

Run: `npm test -- app/page.test.tsx`
Expected: FAIL because the current hero only renders text and an abstract placeholder frame.

**Step 3: Write minimal implementation**

Refactor `src/components/hero.tsx` to:
- render the UI/UX-first message
- render image placeholders and overlay chips from content data
- keep semantic structure and accessible CTA links

Update `app/page.tsx` only as needed to pass the new props through.

**Step 4: Run test to verify it passes**

Run: `npm test -- app/page.test.tsx`
Expected: PASS with the new hero structure.

**Step 5: Commit**

Run:

```bash
git add src/components/hero.tsx app/page.tsx app/page.test.tsx
git commit -m "feat(hero): add media-led lab interface hero"
```

### Task 3: Convert featured work into image-first portfolio cards

**Files:**
- Modify: `src/components/featured-work.tsx`
- Modify: `app/page.test.tsx`

**Step 1: Write the failing test**

Add expectations that each project card exposes:
- a project image
- category and role metadata
- short summary content
- tags

Include an assertion that UI/UX work is represented prominently in the rendered section copy.

**Step 2: Run test to verify it fails**

Run: `npm test -- app/page.test.tsx`
Expected: FAIL because the current cards are text-first and do not render images.

**Step 3: Write minimal implementation**

Refactor `src/components/featured-work.tsx` so each project card includes:
- a visual thumbnail placeholder
- compact metadata row
- shorter body copy treatment
- a richer card shell ready for hover effects

Preserve semantic article structure.

**Step 4: Run test to verify it passes**

Run: `npm test -- app/page.test.tsx`
Expected: PASS with project images and updated metadata rendered.

**Step 5: Commit**

Run:

```bash
git add src/components/featured-work.tsx app/page.test.tsx
git commit -m "feat(work): redesign featured work as image-first cards"
```

### Task 4: Refactor approach and about sections to reduce text density

**Files:**
- Modify: `src/components/design-approach.tsx`
- Modify: `src/components/about.tsx`
- Modify: `app/page.test.tsx`

**Step 1: Write the failing test**

Add expectations for:
- the approach section label and principle titles
- the about section media block or profile visual
- tool clusters or strengths being rendered in the revised structure

**Step 2: Run test to verify it fails**

Run: `npm test -- app/page.test.tsx`
Expected: FAIL because the current sections are simpler text/card layouts without the new visual structure.

**Step 3: Write minimal implementation**

Update `src/components/design-approach.tsx` to render a more staggered or grouped analytical layout.  
Update `src/components/about.tsx` to render a mixed-media profile band with compact supporting content.

Keep the implementation static-first and data-driven.

**Step 4: Run test to verify it passes**

Run: `npm test -- app/page.test.tsx`
Expected: PASS with the new structure exposed in the DOM.

**Step 5: Commit**

Run:

```bash
git add src/components/design-approach.tsx src/components/about.tsx app/page.test.tsx
git commit -m "feat(sections): reduce text density in approach and about"
```

### Task 5: Redesign the contact close and footer rhythm

**Files:**
- Modify: `src/components/contact.tsx`
- Modify: `app/page.tsx`
- Modify: `app/page.test.tsx`

**Step 1: Write the failing test**

Add assertions that the closing CTA panel renders:
- the updated heading and body
- the contact links
- footer identity/status text still present

**Step 2: Run test to verify it fails**

Run: `npm test -- app/page.test.tsx`
Expected: FAIL if the final CTA layout and footer treatment are not yet aligned with the redesign.

**Step 3: Write minimal implementation**

Refactor `src/components/contact.tsx` and any surrounding page structure so the final screen feels like an intentional glossy close rather than a standard card.

**Step 4: Run test to verify it passes**

Run: `npm test -- app/page.test.tsx`
Expected: PASS with the new closing structure.

**Step 5: Commit**

Run:

```bash
git add src/components/contact.tsx app/page.tsx app/page.test.tsx
git commit -m "feat(contact): redesign closing call-to-action"
```

### Task 6: Replace the visual system with blue metallic gloss styling

**Files:**
- Modify: `app/globals.css`

**Step 1: Write the failing test**

Use the visual acceptance target as the failing gate for this task. No new DOM test is needed; the failure condition is that the page still uses the old dark-slate system and lacks the redesigned classes and tokens.

**Step 2: Run test to verify it fails**

Run: `npm test -- app/page.test.tsx`
Expected: PASS on structure, but the visual redesign is still incomplete by inspection.

**Step 3: Write minimal implementation**

Replace the global visual system with:
- new blue/chrome token palette
- metallic borders and glossy surface layers
- improved section spacing and asymmetry
- image framing, overlay chips, and card hover styling
- mobile-responsive adaptations

Avoid introducing unused selectors or styling unrelated to the approved design.

**Step 4: Run test to verify it passes**

Run: `npm test -- app/page.test.tsx`
Expected: PASS, then manually inspect in the browser or via build output for visual correctness.

**Step 5: Commit**

Run:

```bash
git add app/globals.css
git commit -m "feat(styles): apply blue metallic redesign system"
```

### Task 7: Add lightweight scroll reveal behavior with reduced-motion support

**Files:**
- Create: `src/components/scroll-reveal.tsx`
- Modify: `src/components/hero.tsx`
- Modify: `src/components/featured-work.tsx`
- Modify: `src/components/design-approach.tsx`
- Modify: `src/components/about.tsx`
- Modify: `src/components/contact.tsx`
- Modify: `app/page.test.tsx`

**Step 1: Write the failing test**

Add assertions that key sections render the reveal wrapper or reveal-related attributes/classes without depending on actual animation timing.

**Step 2: Run test to verify it fails**

Run: `npm test -- app/page.test.tsx`
Expected: FAIL because no reveal component or attributes exist yet.

**Step 3: Write minimal implementation**

Create a small client component that:
- observes visibility with `IntersectionObserver`
- adds a reveal-ready class or data attribute when sections enter view
- respects reduced-motion preferences by disabling transform-heavy animation

Wrap the major sections or selected inner blocks with this component.

**Step 4: Run test to verify it passes**

Run: `npm test -- app/page.test.tsx`
Expected: PASS with reveal markers rendered.

**Step 5: Commit**

Run:

```bash
git add src/components/scroll-reveal.tsx src/components/hero.tsx src/components/featured-work.tsx src/components/design-approach.tsx src/components/about.tsx src/components/contact.tsx app/page.test.tsx
git commit -m "feat(motion): add scroll reveal transitions"
```

### Task 8: Final verification for responsive and production readiness

**Files:**
- Modify as needed based on verification output

**Step 1: Write the failing test**

Treat production verification as the failing gate if any runtime, type, or test issue remains.

**Step 2: Run test to verify it fails**

Run:

```bash
npm test
npm run build
```

Expected: If any issue remains, one of these commands fails and defines the remaining work.

**Step 3: Write minimal implementation**

Fix only the issues surfaced by test/build verification. Keep the redesign scope fixed.

**Step 4: Run test to verify it passes**

Run:

```bash
npm test
npm run build
```

Expected: PASS for the full test suite and production build.

**Step 5: Commit**

Run:

```bash
git add app src docs/plans
git commit -m "feat(portfolio): complete experimental redesign"
```
