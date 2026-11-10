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

Start the JSON Server API and the Vite development server in separate terminals:

```bash
npm run server
```

```bash
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). The API runs at `http://localhost:9000` and reads and writes city records in `data/cities.json`.

## Demo login

The app uses a fake, in-memory login for demonstration. The login page is prefilled with:

- **Email:** `jack@example.com`
- **Password:** `qwerty`

Authentication is not persistent and is not intended for production use.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run server` | Start JSON Server on port 9000 with a 500 ms response delay |
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
data/                 Local JSON Server data
public/               Static images and icons
src/
  components/         Reusable UI and map components
  Contexts/           City data and demo authentication state
  hooks/              Geolocation and map-position hooks
  pages/              Homepage, login, pricing, and app pages
```
