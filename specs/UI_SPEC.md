# Portfolio UI Specification

## Design Direction

Create a premium engineering portfolio.

Visual personality:

- technical
- modern
- minimal
- confident
- professional
- high signal-to-noise

Avoid looking like a generic SaaS landing page.

---

# Responsive Breakpoints

Design and test for:

- 375px
- 768px
- 1280px

The layout must remain usable between breakpoints.

---

# Layout

Use strong visual hierarchy.

Important information should receive the most visual emphasis.

Avoid excessive cards.

Prefer:

- sections
- typography
- whitespace
- grids
- diagrams
- timelines
- structured content

when appropriate.

---

# Hero UX

The first viewport should communicate:

- identity
- AI/ML engineering positioning
- strongest areas
- primary CTA
- resume
- GitHub
- LinkedIn

The hero should not be dominated by decorative animation.

---

# Navigation

Navigation should be:

- simple
- predictable
- responsive
- keyboard accessible

Mobile navigation should be easy to operate.

---

# Project UX

Projects should feel like technical case studies.

Use visual elements where they improve understanding:

- architecture diagrams
- data flow
- pipeline visualization
- technology grouping
- metrics
- challenge/solution sections

Do not use visualizations merely for decoration.

---

# Animation

Use Framer Motion selectively.

Animations should communicate:

- hierarchy
- transition
- state
- interaction

Avoid:

- excessive entrance animations
- constant movement
- distracting parallax
- animation on every component

Respect:

`prefers-reduced-motion`.

---

# Accessibility

Target WCAG 2.1 AA principles.

Requirements:

- semantic HTML
- keyboard navigation
- visible focus states
- sufficient contrast
- accessible buttons
- accessible forms
- alt text
- skip navigation
- logical heading hierarchy
- focus management
- Escape support for overlays
- minimum comfortable touch targets

---

# Mobile

Mobile is not a reduced desktop layout.

Specifically test:

- navigation
- hero
- project sections
- chatbot
- buttons
- forms
- diagrams
- typography
- horizontal overflow

Avoid accidental horizontal scrolling.

---

# Loading States

Important asynchronous UI must have:

- loading state
- error state
- empty state where appropriate
- retry behavior where appropriate

---

# Chatbot UX

The Ask AI interface should feel integrated into the portfolio.

Desktop:

- floating launcher
- panel/drawer

Mobile:

- bottom sheet or full-screen conversational interface

Chatbot should not obscure critical portfolio content.

---

# Visual QA

After implementation, inspect the website visually at:

375px
768px
1280px

Check:

- spacing
- alignment
- typography
- overflow
- hierarchy
- contrast
- animations
- responsive behavior