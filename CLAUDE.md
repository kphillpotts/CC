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
- [ ] Initialize Vite + React + TypeScript project
- [ ] Configure for GitHub Pages (base path, deploy script)
- [ ] Set up project structure

### Phase 2: Core Logic & Data
- [ ] Define TypeScript types for units and categories
- [ ] Create unit data with silly conversions (elephants, bananas, etc.)
- [ ] Build conversion engine (convert between any two units in same category)

### Phase 3: UI — Main Converter
- [ ] App layout with gradient background and playful typography
- [ ] Unit picker (category tabs + unit dropdowns)
- [ ] Number input with live conversion result
- [ ] Swap button to flip units
- [ ] Copy-to-clipboard on result
- [ ] Fun result display ("That's 12.4 elephants!")

### Phase 4: Custom Units
- [ ] "Create Custom Unit" modal/form
- [ ] Save/load custom units from localStorage
- [ ] Delete custom units

### Phase 5: Polish & Deploy
- [ ] Animations (input transitions, result reveal)
- [ ] Mobile responsive design
- [ ] Deploy to GitHub Pages
- [ ] Final README update with live link

## Design Direction
- Gradient background (warm/playful — think sunset or candy tones)
- Rounded cards with subtle shadows
- Smooth micro-animations
- Emoji-rich but not cluttered
- Large, clear result text with personality ("That's approximately...")
