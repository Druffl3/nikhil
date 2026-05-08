# Portfolio Redesign Design

**Owner:** Nikhil R
**Date:** 2026-05-08

## Goal

Redesign the existing portfolio so it presents Nikhil primarily as a UI/UX designer, with game design as a supporting specialty. The page should feel experimental, image-led, blue-toned, metallic, glossy, and animated while staying readable and credible for hiring managers.

## Positioning

- Primary emphasis: UI/UX design
- Secondary emphasis: game design systems thinking
- Audience: recruiters, hiring managers, collaborators, and creative leads
- Desired impression: experimental portfolio with strong interaction taste, not a game HUD and not a generic designer template

## Chosen Direction

### Lab Interface

The portfolio should feel like a polished concept lab or interactive showcase rather than a static landing page. It should use segmented layouts, layered media, floating UI accents, sticky transitions, and restrained scroll motion to create depth.

This direction keeps the visual identity experimental while preserving product-design credibility. Game-design influence should appear in pacing, framing, and systems language rather than dominating the overall presentation.

## Visual Direction

- Palette: deep navy, cobalt, steel blue, ice blue, chrome highlights
- Surfaces: layered glass, metallic rims, glossy overlays, soft reflections
- Contrast: dark atmospheric backgrounds with bright cool highlights
- Typography: expressive display treatment paired with practical body copy
- Composition: asymmetric, media-led, and modular rather than equal stacked cards

## Content Direction

- Reduce text density across the page
- Add placeholder images so the page reads as a portfolio, not a text document
- Keep UI/UX work in the strongest positions in the work section
- Present game design as a complementary capability tied to systems thinking and interaction depth
- Use shorter summaries, compact metadata, and visual badges instead of long explanatory blocks

## Page Structure

### Hero

- Split layout with strong UI/UX-first messaging on one side
- Large visual showcase panel on the other side using placeholder imagery
- Add floating stat chips, category labels, or focus tags
- Keep primary CTA to work and a secondary CTA to contact

### Selected Work

- Move this section into a more dominant visual role
- Use image-first project cards with thumbnail, category, role, short summary, and tags
- Keep UI/UX projects visually prioritized
- Include game design work as one card in the set rather than the thematic center

### Systems / Approach

- Replace plain principle cards with a more analytical staggered layout
- Show how product clarity, interaction rhythm, and systems thinking connect
- Treat this as supporting proof of process, not the hero of the page

### About + Toolkit

- Combine short bio, strengths, tool clusters, and a portrait or studio placeholder image
- Use mixed media and compact lists rather than a paragraph-only presentation

### Contact / Closing CTA

- End with a stronger call-to-action panel
- Use glossy treatment and scroll-aware reveal behavior so the page lands with intent

## Motion Direction

- Animate section reveal with fade, rise, and sharpen transitions
- Add subtle parallax drift to larger image blocks
- Use hover effects for cards: image zoom, reflective sweep, border glow, metadata emphasis
- Use sticky transitions between select sections for pacing
- Avoid scroll-jacking, excessive 3D motion, noisy particles, or game-menu theatrics
- Respect reduced-motion preferences with simplified opacity and transform transitions

## Technical Direction

- Keep the single-page Next.js App Router structure
- Extend the existing content model with placeholder image URLs and compact visual metadata
- Preserve current section-based component architecture, but refactor components to be more media-led
- Use custom CSS with expanded design tokens for palette, gloss, metallic borders, and motion timing
- Add lightweight client-side scroll-reveal behavior instead of heavy animation libraries unless implementation friction justifies one

## Quality Boundaries

- Desktop and mobile layouts must both feel intentional
- Motion must support hierarchy, not interfere with readability
- The redesign should remain static-first and easy to host
- Placeholder imagery should integrate cleanly without requiring a CMS or backend
- The page should feel premium and experimental without obscuring the user's actual skills and work focus

## Success Criteria

- The page reads immediately as a UI/UX portfolio
- Game design remains visible but clearly secondary
- Visual hierarchy is driven by media and layout, not walls of text
- Blue metallic and glossy styling is consistent across the page
- Scroll transitions add polish and depth without harming usability
