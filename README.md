# Whistle Landing Page — Frontend Assessment

A React recreation of the Whistle invisible aligners landing page, built as a single-page application with dynamic data fetching and interactive components.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

To build for production:

```bash
npm run build
npm run preview
```

## Assessment Sections (Task A)

Three Figma sections are implemented as dedicated React components:

1. **ResultsGallery** — "Results You'll Love" before/after cards
2. **WhyWhistle** — "Why Whistle?" feature card grid
3. **FAQ** — "Got Questions? We've got answers" accordion list

The full page also includes Hero, Clinic Banner, Marquee, Dream Smiles, Whistle Difference, Comparison Table, Four Steps, Doctor-led, Testimonials, Footer, and Sticky CTA bar.

## Data Source (Task B)

The public APIs (Fake Store, DummyJSON, JSONPlaceholder) do not map well to dental aligner content, so a local JSON file is used instead: `public/data.json`.

Data is fetched via a reusable `useFetchData` hook using `useEffect` and `useState`. Each dynamic section shows a loading state (spinner or skeleton) and a user-friendly error message if the fetch fails.

## Interaction (Task C)

The **FAQ accordion** expands and collapses on click — matching the `+` / `−` toggle shown in the Figma design. Only one item can be open at a time.

Additional hover interactions: result cards lift on hover, Why Whistle cards scale up, and primary buttons darken on hover.

## Approach

The page is split into one component per section with CSS Modules for scoped styling. A shared `useFetchData` hook centralises the fetch lifecycle (loading, error, data) so each section stays focused on rendering. CSS custom properties in `global.css` keep colours and spacing consistent with the Figma design. Placeholder images from picsum.photos are used throughout.

## Tech Stack

- React 19 (functional components + hooks)
- Vite 6
- CSS Modules (no UI libraries)
