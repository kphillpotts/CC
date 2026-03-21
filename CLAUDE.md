# Curious Converter

## Project Overview
A fun, elegant unit conversion app that converts between normal units and absurd ones (elephants, bananas, school buses, etc.). Deployed on GitHub Pages.

## Tech Stack
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** CSS Modules or vanilla CSS with CSS custom properties (no heavy UI library — keep it lightweight and fun)
- **Deployment:** GitHub Pages via `gh-pages` package or GitHub Actions
- **Storage:** localStorage for custom units

## Architecture
```
src/
  components/       # React components
  data/             # Unit definitions and conversion logic
  hooks/            # Custom React hooks (useLocalStorage, etc.)
  types/            # TypeScript types
  App.tsx           # Main app
  main.tsx          # Entry point
```

## Key Design Decisions
- Single-page app, no routing needed
- All conversion logic is pure frontend — no backend
- Units are organized by category (weight, length, volume, etc.)
- Each "silly unit" maps to a base SI unit with a conversion factor
- Custom units persist in localStorage

## Unit Data Model
Each unit has:
- `id` — unique identifier
- `name` — display name (e.g., "African Elephant")
- `emoji` — visual flair
- `category` — weight | length | volume | area | time | speed
- `baseUnitValue` — value in base SI unit (kg, m, L, m², s, m/s)
- `isCustom` — whether user-created

## Implementation Plan

### Phase 1: Project Setup
- [x] Initialize Vite + React + TypeScript project
- [x] Configure for GitHub Pages (base path, deploy script)
- [x] Set up project structure

### Phase 2: Core Logic & Data
- [x] Define TypeScript types for units and categories
- [x] Create unit data with silly conversions (elephants, bananas, etc.)
- [x] Build conversion engine (convert between any two units in same category)

### Phase 3: UI — Main Converter
- [x] App layout with gradient background and playful typography
- [x] Unit picker (category tabs + searchable unit dropdowns)
- [x] Number input with live conversion result
- [x] Swap button to flip units
- [x] Copy-to-clipboard on result
- [x] Fun result display ("That's 12.4 elephants!")

### Phase 4: Custom Units
- [x] "Create Custom Unit" modal/form
- [x] Save/load custom units from localStorage
- [x] Delete custom units

### Phase 5: Polish & Deploy
- [ ] Animations (input transitions, result reveal)
- [x] Responsive design (horizontal panels on wide screens, vertical stacking on narrow)
- [x] Dark mode / theme switching
- [x] Deploy to GitHub Pages (via GitHub Actions deploy.yml)
- [ ] Final README update with live link

## Design Direction
- Gradient background (warm/playful — think sunset or candy tones)
- Rounded cards with subtle shadows
- Smooth micro-animations
- Emoji-rich but not cluttered
- Large, clear result text with personality ("That's approximately...")
