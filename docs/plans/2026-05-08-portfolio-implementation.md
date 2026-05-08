# Portfolio Base Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build and verify a deployable Next.js portfolio base for Nikhil R with a strong landing page and structured local content.

**Architecture:** Create a static-first Next.js App Router project where the homepage composes a small set of presentational sections from a typed content module. Keep styling custom and centralized through design tokens so the look is distinct now and easy to extend later.

**Tech Stack:** Next.js App Router, React, TypeScript, custom CSS modules/global CSS, npm

---

### Task 1: Scaffold the app shell

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `next-env.d.ts`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`
- Create: `public/`

**Step 1: Write the failing test**

Create a basic render test that expects the homepage to output Nikhil's name and the featured work heading.

**Step 2: Run test to verify it fails**

Run a targeted test command and confirm the app does not satisfy the expectation yet.

**Step 3: Write minimal implementation**

Create the minimal Next.js app structure and homepage content needed to satisfy the first rendering test.

**Step 4: Run test to verify it passes**

Run the targeted test again and confirm the expectation passes.

**Step 5: Commit**

Skip in this workspace unless the directory is later initialized as a git repository.

### Task 2: Add structured content

**Files:**
- Create: `src/content/portfolio.ts`
- Modify: `app/page.tsx`

**Step 1: Write the failing test**

Add a test that asserts the homepage renders project and principle data from the structured content module.

**Step 2: Run test to verify it fails**

Confirm the new expectation fails for the intended missing behavior.

**Step 3: Write minimal implementation**

Create typed portfolio content and wire the homepage to render from it instead of hardcoded copy.

**Step 4: Run test to verify it passes**

Re-run the targeted test and confirm it passes.

**Step 5: Commit**

Skip in this workspace unless git is initialized.

### Task 3: Build the final visual sections

**Files:**
- Create: `src/components/hero.tsx`
- Create: `src/components/featured-work.tsx`
- Create: `src/components/design-approach.tsx`
- Create: `src/components/about.tsx`
- Create: `src/components/contact.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

**Step 1: Write the failing test**

Extend tests to assert the main labeled sections exist and key CTA links render.

**Step 2: Run test to verify it fails**

Confirm the page fails because those sections and links are not complete yet.

**Step 3: Write minimal implementation**

Split the page into section components and apply the custom visual system and responsive layout.

**Step 4: Run test to verify it passes**

Run tests and confirm the page structure is correct.

**Step 5: Commit**

Skip in this workspace unless git is initialized.

### Task 4: Verify deploy readiness

**Files:**
- Modify as needed based on verification output

**Step 1: Write the failing test**

Use the production build as the final quality gate; if it fails, treat that as the failing verification target.

**Step 2: Run test to verify it fails**

Run `npm run build` if setup issues remain.

**Step 3: Write minimal implementation**

Fix any remaining build or typing issues without expanding scope.

**Step 4: Run test to verify it passes**

Run the test suite and production build again until both pass cleanly.

**Step 5: Commit**

Skip in this workspace unless git is initialized.
