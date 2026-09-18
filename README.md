<div align="center">

# 🛠️ FixMate

### **Smart Home Repair & AI-Assisted Visual Diagnostics Platform**

*Empowering homeowners with safe DIY guides, instant photo-driven damage diagnostics, seasonal preventive maintenance, and strict safety escalation protocols.*

[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel&logoColor=white)](https://vercel.com)

[Live Demo](https://fixmate.vercel.app) • [Key Features](#-key-features) • [Safety First Philosophy](#-safety-first-philosophy) • [Getting Started](#-getting-started) • [Deployment](#-deployment)

---

</div>

## 📌 Problem & Vision

Home repairs are stressful, expensive, and intimidating. Homeowners often face:
1. **Uncertainty**: "Can I safely fix this leaky valve, or will I flood my house?"
2. **Exorbitant Pro Costs**: Simple 15-minute fixes costing \$200–\$500 in service call fees.
3. **Safety Hazards**: Generic internet advice failing to warn against electrocution, gas line leaks, or structural failures.

**FixMate** bridges the gap between reckless DIY and costly contractor calls. It provides interactive, visual repair pathways, AI-simulated photo diagnostics, tool/part cost breakdowns, and—most importantly—**strict, unskippable professional escalation guardrails** for high-risk hazards.

---

## ⚡ Key Features

### 📸 1. Visual Diagnostic Engine
- **Photo Damage Scanner**: Upload or capture an image of the problem (e.g., dripping under-sink pipe, drywall dent, cracked tile, loose door hinge).
- **Automated Breakdown**: Identifies the affected component, assigns a severity score (Minor / Moderate / Critical), estimates repair time, and itemizes necessary replacement parts.
- **Cost Comparison Matrix**: Shows DIY material costs vs. typical professional service fees so users can make an informed financial decision.

### 🛡️ 2. Uncompromising Safety & "STOP & Call a Pro" Escalation
- Any job touching **high-voltage electrical panels, natural gas lines, main water supply ruptures, or structural framing** is flagged with an unskippable red hazard banner.
- **Instant Contractor Dispatch Drawer**: Automatically pre-fills emergency details, estimated contractor rates, and provides a 1-click quote dispatch button to connect with vetted local tradespeople.

### 🧰 3. 5 Core Repair Domains (50+ Curated Guides)
- 🚰 **Plumbing**: Leaky cartridges, toilet flappers, P-trap clogs, water pressure issues, emergency pipe shut-offs.
- 🪚 **Carpentry & Furniture**: Wobbly chair/table joints, stripped screw dowel fixes, squeaky floorboards, drawer slides.
- 🚪 **Doors & Windows**: Draft weatherstripping, sticking interior doors, loose strike plates, window caulking.
- 🧱 **Walls & Tiles**: Small/medium drywall hole patches, grout renewal, cracked tile replacement, spackling.
- ⚡ **Appliances**: Refrigerator condenser coil cleaning, dishwasher drain filter rescue, dryer vent airflow clearing.

### 📅 4. Seasonal Homeowner Maintenance Planner
- Prevent catastrophic damage before it happens with quarterly checklists:
  - **Spring**: Gutter cleaning, outdoor spigot checks, AC filter swaps.
  - **Summer**: Deck sealing, window seal inspection, dryer duct vacuuming.
  - **Fall**: Furnace tune-up, pipe insulation, weatherstrip replenishment.
  - **Winter**: Draft prevention, thermostat battery swaps, smoke/CO sensor audits.
- Live tracker calculating total money saved through preventive maintenance.

### 📄 5. Printable Offline PDF Handbooks
- Clean, printer-friendly repair checklists designed to be taken under the sink or into the garage without worrying about getting dust or water on a phone screen.

---

## 🧭 Safety First Philosophy

> **The FixMate Guarantee:** We would rather lose a DIY view than risk homeowner injury or property loss.

FixMate categorizes all repairs into three distinct safety tiers:

```
[ GREEN: Safe DIY ] ──► Standard tools, minimal risk (e.g., swapping a showerhead, tightening a hinge)
[ AMBER: Caution ]  ──► Requires main shut-off verification & PPE (e.g., P-trap clearing, drywall cut)
[ RED: STOP & CALL ] ──► High-voltage, gas, structural, toxic materials. Hard stop with pro escalation!
```

---

## 💻 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Tooling**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with modern Glassmorphism aesthetics
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: Reactive React hooks with localized storage persistence

---

## 📂 Project Structure

```text
FixMate/
├── public/
│   └── favicon.svg           # Brand vector icon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Header navigation & quick diagnostic launch
│   │   ├── Footer.jsx               # Footer with safety disclaimers & links
│   │   ├── Hero.jsx                 # Dynamic landing hero with category pills
│   │   ├── GuidesView.jsx           # Filterable repair database with difficulty tags
│   │   ├── DashboardView.jsx        # Seasonal chores & homeowner savings metrics
│   │   ├── PricingView.jsx          # Free, Pro, and Contractor Guarantee tiers
│   │   ├── VisualDiagnosticModal.jsx# AI photo scanning & damage analysis interface
│   │   ├── GuideModal.jsx           # Step-by-step checklists & safety checklists
│   │   ├── ProQuoteModal.jsx        # Contractor escalation & emergency dispatch
│   │   ├── PdfHandbookModal.jsx     # Printable handbook export view
│   │   └── CheckoutModal.jsx        # Subscription & membership checkout flow
│   ├── data/
│   │   └── repairData.js            # Comprehensive repair catalog & seasonal data
│   ├── App.jsx                      # Main app controller & routing state
│   ├── index.css                    # Glass-panel utilities, gradients & print CSS
│   └── main.jsx                     # Application bootstrap
├── vercel.json                      # Vercel SPA routing configuration
├── vite.config.js                   # Vite & Tailwind build configuration
└── package.json                     # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/justsamaan/FixMate.git
   cd FixMate
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Create a production build**:
   ```bash
   npm run build
   ```

---

## 🌐 Deployment

### Deploy on Vercel (1-Click)

The repository includes a pre-configured [`vercel.json`](./vercel.json) for smooth single-page application (SPA) client-side routing.

1. Fork or push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the `FixMate` repository.
4. Click **Deploy**. Vercel will auto-detect Vite and deploy the app in under a minute.

Alternatively, deploy directly from your terminal:
```bash
npx vercel
```

---

## 💎 Monetization & Business Model

FixMate is designed as a sustainable product with 3 revenue vectors:
1. **DIY Free Tier**: Core search, safe basic repairs, community checklist.
2. **FixMate Pro (\$9/mo)**: Unlimited AI visual diagnostic scans, offline PDF guide downloads, and priority video assistance.
3. **Contractor Escalation Fee (Marketplace Lead Gen)**: Vetted local pros pay a connection fee when emergency/red-tier repairs escalate into paid contractor bookings.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with ❤️ for safer, smarter homes by <a href="https://github.com/justsamaan">Mukane Muhammed Samaan</a></sub>
</div>
