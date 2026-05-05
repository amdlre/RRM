# Rental Risk Management (RRM)

A React + Vite landing site for the rental-risk-management platform. Branding, contact details, social links, and the Formspree contact-form ID are all driven by environment variables — no hardcoded defaults are used in the UI.

## Stack

- React 19 + TypeScript
- Vite 7
- React Router 7
- Tailwind CSS 4
- Motion (Framer Motion)
- @formspree/react — contact form submissions
- StreamPay — payment gateway

## Run locally

Prerequisites: Node.js 20.19+ (or 22.12+).

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in all values (see below).
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Environment variables

All variables are required at build time. Vite injects them into the bundle and into `index.html` (via the `%VITE_FOO%` syntax). They are read in the app from `src/config/site.ts` and from `vite.config.ts` for the StreamPay proxy.

### Brand
| Variable | Description |
| --- | --- |
| `VITE_BRAND_NAME` | Brand name used in the browser tab title, navbar, footer, and `og:title` / `twitter:title` |
| `VITE_BRAND_TAGLINE` | Tagline appended after the brand name in the title and OG meta tags |
| `VITE_LOGO_URL` | Logo URL used in navbar, footer, favicon, and OG/Twitter cards |

### Contact
| Variable | Description |
| --- | --- |
| `VITE_CONTACT_EMAIL` | Email shown in the contact form aside and on the contact page; rendered as a `mailto:` link |
| `VITE_CONTACT_PHONE` | Phone shown in the contact form aside and on the contact page; rendered as a `tel:` link |
| `VITE_CONTACT_PHONE_AVAILABILITY` | Sub-text shown under the phone number on the contact page (e.g. `متاح من 9 ص حتى 6 م`) |
| `VITE_CONTACT_ADDRESS` | Short address shown beside the contact form |
| `VITE_CONTACT_ADDRESS_DETAIL` | Detailed address card on the contact page |
| `VITE_CONTACT_ADDRESS_SUB` | Address sub-line (e.g., main road) on the contact page card |

### Working hours
The "ساعات العمل" card on the contact page is hidden when `VITE_WORKING_DAYS` is empty.

| Variable | Description |
| --- | --- |
| `VITE_WORKING_DAYS` | Working-week range, e.g. `الأحد - الخميس` |
| `VITE_WORKING_HOURS` | Daily hours, e.g. `9:00 ص - 6:00 م` |

### Social
Social links are only rendered when their URL is set — leaving a value empty hides the icon.

| Variable | Description |
| --- | --- |
| `VITE_TWITTER_URL` | Twitter / X profile URL |
| `VITE_LINKEDIN_URL` | LinkedIn profile URL |

### Formspree
The contact form is submitted via [`@formspree/react`](https://www.npmjs.com/package/@formspree/react). Set the form ID from your Formspree dashboard:

| Variable | Description |
| --- | --- |
| `VITE_FORMSPREE_ID` | Formspree form ID (e.g. `xvzwwppb`) — passed to `useForm()` in `src/hooks/useContactForm.ts` |

### StreamPay (payments)
| Variable | Description |
| --- | --- |
| `VITE_STREAM_API_KEY` | StreamPay public API key |
| `VITE_STREAM_X_API_KEY` | StreamPay `x-api-key` header used by the dev proxy |
| `VITE_STREAM_API_KEY_SECRET` | StreamPay secret key |

## Project layout

```
src/
  config/site.ts        — single source of truth for env-driven site config
  hooks/useContactForm  — Formspree submission via @formspree/react
  components/           — Navbar, Footer, ContactForm, Hero, ...
  pages/                — Home, About, Contact, FAQ, Payment, ...
```
