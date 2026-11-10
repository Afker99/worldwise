# WorldWise

WorldWise is a travel journal built with React. View an interactive map, add cities you have visited with the date and notes, and browse your saved places by city or country.

## Features

- Interactive map powered by Leaflet and React Leaflet
- Add and remove visited cities
- View city details, dates, notes, and countries
- Geolocation support for finding your current position
- Client-side routing with protected app pages
- Local JSON Server API for city data

## Requirements

- Node.js and npm

## Getting started

Install the dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). The city list starts empty. Cities added during a session are kept in memory and are cleared when the page reloads.

## Demo login

The app uses a fake, in-memory login for demonstration. The login page is prefilled with:

- **Email:** `jack@example.com`
- **Password:** `qwerty`

Authentication is not persistent and is not intended for production use.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Tech stack

- React 18
- Vite
- React Router
- Leaflet and React Leaflet
- JSON Server

## Project structure

```text
public/               Static images and icons
src/
  components/         Reusable UI and map components
  Contexts/           In-memory city data and demo authentication state
  hooks/              Geolocation and map-position hooks
  pages/              Homepage, login, pricing, and app pages
```
