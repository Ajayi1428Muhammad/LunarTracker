<div align="center">
# 🌙 Lunar Tracker
 
**The officially declared Hijri date for Nigeria, as an API.**
 
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Focus](https://img.shields.io/badge/focus-Nigeria-008751)
![Status](https://img.shields.io/badge/status-in%20development-orange)
 
</div>
---
 
## About
 
Most Hijri date APIs work out the date by calculation. Nigeria doesn't: each Islamic month begins when the crescent is sighted, and the Sultan of Sokoto announces the result on the advice of the National Moonsighting Committee. Calculated dates don't always match what Nigeria announces.
 
Lunar Tracker treats the **officially declared month start** as its source of truth, counts the days from there, and serves the result through a simple API and a calendar page.
 
> [!NOTE]
> This is an independent project. It is not affiliated with NSCIA or the National Moonsighting Committee.
 
## Features
 
| Feature | Status |
|---|---|
| Hijri date counted from the declared month start | ✅ Available |
| Month calendar showing Hijri and Gregorian days( spanning across two months ) side by side | ✅ Available |
| JSON API (`/api/date`) | ✅ Available |
| Shareable announcement OG( open graph ) for WhatsApp Status | 📅 Coming up |
| Telegram automation and web notifications | 📅 Coming up |
 
<details>
<summary>Example API response</summary>
```json
{
  "gregorian": {
    "enDayOfWeek": "Friday",
    "gregorianDate": "2026-10-16"
  },
  "hijri": {
    "hijriDay": 5,
    "arDayOfWeek": "الجمعة",
    "month": "Jumada Al-Ula",
    "year": 1448
  }
}
```
 
</details>
## Quick start
 
```bash
git clone https://github.com/your-username/lunartracker.git
cd lunartracker
npm install
npm run dev
```
 
Then open [http://localhost:3000](http://localhost:3000).
 
---
 
**Built by Muhammad Dev**

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
