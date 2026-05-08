# Nikhil Portfolio Design

**Owner:** Nikhil R
**Date:** 2026-05-08

## Goal

Create a portfolio website that showcases UI/UX and video game design work, is ready for immediate Vercel hosting, and establishes a strong base for future case-study expansion.

## Product Direction

The first release is a single-page portfolio built with Next.js. It should feel game-inspired but still professional enough for hiring managers, recruiters, and collaborators. The page should not read like a generic designer template or a gamer-themed novelty site.

## Site Structure

### Hero

- Introduce `Nikhil R`
- Lead with a hybrid role statement across UI/UX and game design
- Provide one primary CTA and one secondary CTA

### Featured Work

- Show project cards for both product design and game design work
- Include role, category, short summary, and impact/focus
- Make the section easy to expand later into detail pages

### Design Approach

- Explain how Nikhil thinks about interaction, systems, usability, and player experience
- Present short principle statements rather than long body copy

### About

- Provide a concise professional profile
- List selected tools and strengths

### Contact

- End with a collaboration or hiring CTA
- Include links such as email, LinkedIn, GitHub, portfolio/social handles

## Visual Direction

- Tone: cinematic editorial with restrained sci-fi/game-system cues
- Layout: asymmetrical but readable, with clear section rhythm
- Typography: expressive display treatment paired with a practical body font
- Color: dark ink/slate foundation, muted neutral surfaces, one sharp accent
- UI accents: grid overlays, tags, card frames, subtle data-panel cues
- Motion: limited, deliberate reveal and hover behavior only

## Technical Direction

- Framework: Next.js App Router with TypeScript
- Deployment target: Vercel
- Styling: custom CSS with reusable design tokens in global styles
- Data model: local structured content module for profile, projects, principles, tools, and links
- Components: section-oriented components such as hero, project grid, approach, about, and contact

## Quality Boundaries

- Mobile and desktop responsive from the first release
- Static-first implementation with no backend dependency
- Graceful rendering when optional content fields are omitted
- Keep the first version to one polished landing page

## Future Expansion

- Add project detail pages driven by the same content model
- Add richer motion once content is stable
- Introduce CMS or markdown content only if ongoing editing volume justifies it
