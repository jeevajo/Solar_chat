# KYARR INCORP - Solar Website (Demo)

This is a complete React + Vite + Tailwind website for KYARR INCORP.
Replace images in /public/images and update contact details in src/components/Contact.jsx.

## Quick start
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Build: `npm run build`

## Deploy on Vercel
- Build command: `npm run build`
- Output directory: `dist`


## KYARR SMARTGRID page

A new SmartGrid page is available at `/smartgrid`.

Implementation:
- `src/components/SmartGrid.jsx` contains the new responsive page.
- `src/App.jsx` registers the `/smartgrid` route.
- `src/components/Navbar.jsx` adds the SmartGrid navigation link.

Run locally:
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173/smartgrid`

The page uses the existing React, React Router and Tailwind setup. No additional package is required.
