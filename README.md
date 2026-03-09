# IFE Wireframe

Aviation In-Flight Entertainment seat-back touchscreen wireframe prototype.

## Features

- **PIN Lock Screen** — Enter `10535` to unlock
- **4 Source Apps** — Media, Camera, Quran, Map
- **Media Player** — Global broadcast (no controls) or local playback with skip/play/pause transport controls
- **Camera Feeds** — Aft, Right Hand, Left Hand camera selection (no playback controls)
- **Quran Player** — Surah browser with audio transport controls
- **Map View** — Pan/zoom navigation display
- **Vertical Nav Rail** — Left-side navigation between sources
- **Attendant Call + Reading Light** — IFE status bar controls
- **Responsive** — Scales from 10" landscape to 3.7" portrait; D-pad controls replace touch UI below 6"

## Design

Google Home small touchscreen panel aesthetic — white background, Google's signature colors (blue, red, yellow, green), rounded bubbly cards with soft shadows.

## Getting Started

```bash
npm install
npm run dev
```

## Tech Stack

- React 18
- Vite
- No external UI libraries — all custom SVG icons and inline styles
