# Flow MMA Academy — Website

A modern, high-converting, mobile-first website for Flow MMA Academy in Mesa, AZ.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, Programs, Testimonials, Why Flow, Schedule Preview, CTA |
| Programs | `/programs` | Detailed MMA, BJJ, Muay Thai, Kids sections |
| Schedule | `/schedule` | Weekly class schedule (mobile cards + desktop grid) |
| About | `/about` | Story, Philosophy, Coaches |
| Contact | `/contact` | Free trial form + map + contact info |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
npx vercel
```

## Environment Variables

No environment variables required for the base site. If you add a form backend (e.g. Resend, Formspree), add `RESEND_API_KEY` or equivalent to `.env.local` and Vercel's environment settings.

## Customization

- **Phone / Address**: Update in `components/Footer.tsx` and `app/contact/page.tsx`
- **Google Maps embed**: Update the `iframe src` in `app/contact/page.tsx`
- **Hero image**: Replace the Unsplash URL in `components/Hero.tsx` with a real photo
- **Coach images**: Replace `placehold.co` URLs in `app/about/page.tsx` with real photos
- **Brand color**: Defined in `tailwind.config.ts` under `brand.red` — change once, updates everywhere
