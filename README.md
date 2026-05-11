# ClearView Square Management System

**A professional front-end management system mock-up for ClearView Square Shopping Complex, Rustenburg.**

![ClearView Square](./src/assets/clearview-logo.png)

---

## Project Overview

This is Phase 1 of the ClearView Square Management System — a polished, clickable front-end prototype built for client demonstration and operational planning. It covers all key property management modules with realistic South African placeholder data.

> ⚠️ **Phase 1 — Front-end demo only.** No real backend, no live data, no authentication. All data is static mock data.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| React Router 6 | Client-side routing (HashRouter) |
| Recharts | Charts and data visualisation |
| Lucide React | Icon library |

---

## Modules Included

1. **Dashboard** — KPI overview, charts, alerts
2. **Tenants** — 26 tenant records with search & filters
3. **Finance** — Income/expense overview and transactions
4. **Invoices** — Invoice tracking with status filters
5. **Maintenance** — Ticket tracking with priority/status filters
6. **Inventory** — Asset and stock management
7. **Staff / HR** — Staff records and on-duty overview
8. **Compliance** — Compliance health score and tracker
9. **Reports** — Report cards with export buttons
10. **Package Preview** — Tier comparison for client sales

---

## Demo Credentials

```
Email:    admin@clearviewsquare.co.za
Password: demo123
```

_(Front-end only — any credentials will work)_

---

## Getting Started Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Run local development server

```bash
npm run dev
```

### 3. Open in browser

```
http://localhost:5173/ClearViewSquare-MngSystem/
```

> If Vite uses a different port, check your terminal output.

---

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## Deploy to GitHub Pages

### Step 1 — Confirm vite.config.js base path

```js
base: "/ClearViewSquare-MngSystem/"
```

### Step 2 — Build and deploy

```bash
npm run deploy
```

This runs `predeploy` (build) then pushes `dist/` to the `gh-pages` branch via the `gh-pages` package.

### Step 3 — Enable GitHub Pages

In your GitHub repository settings:
- Go to **Settings → Pages**
- Set source to **Deploy from branch**
- Select branch: **gh-pages**
- Save

### Live URL (after deployment)

```
https://Ndumiso-Y.github.io/ClearViewSquare-MngSystem/
```

---

## GitHub Repository

[https://github.com/Ndumiso-Y/ClearViewSquare-MngSystem](https://github.com/Ndumiso-Y/ClearViewSquare-MngSystem)

---

## Pricing Tiers

| Tier | Price | Name |
|---|---|---|
| Tier 1 | R22,000 | Operations Starter System |
| Tier 2 | R38,000 | Management Control System *(Recommended)* |
| Tier 3 | R65,000+ | Full Property Operations Platform |

See the **Package Preview** page in the app for full tier details and comparison.

---

## Branding

- Logo: `src/assets/clearview-logo.png`
- Brand: ClearView Square, Rustenburg
- Website: [https://www.clearviewsquare.co.za/](https://www.clearviewsquare.co.za/)

---

## Project Structure

```
src/
  assets/          # Logo and images
  components/      # Sidebar, Topbar, StatCard, DataTable, ChartCard, StatusBadge
  data/            # mockData.js (26 tenants, invoices, maintenance, etc.)
                   # tierData.js (Package Preview tier content)
  layouts/         # DashboardLayout.jsx
  pages/           # All 10 pages
  App.jsx          # Routes (HashRouter)
  main.jsx         # Entry point
  index.css        # Global styles + Tailwind
```

---

*Built by BrandsSA Digital Agency for ClearView Square, Rustenburg.*
