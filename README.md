# Zookia Website

Enterprise-grade marketing website for Zookia — a Revenue & Outbound Infrastructure company serving B2B and SaaS clients globally.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Fonts**: Syne (display) + DM Sans (body) via Google Fonts

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
zookia-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout (Navbar + Footer)
│   │   ├── page.tsx            # Home
│   │   ├── about/page.tsx      # About
│   │   ├── solutions/page.tsx  # Solutions
│   │   ├── team/page.tsx       # Our Team
│   │   ├── clients/page.tsx    # Clients & Case Studies
│   │   └── contact/page.tsx    # Contact
│   ├── components/             # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HomeClient.tsx
│   │   ├── AboutClient.tsx
│   │   ├── SolutionsClient.tsx
│   │   ├── TeamClient.tsx
│   │   ├── ClientsClient.tsx
│   │   └── ContactClient.tsx
│   ├── lib/
│   │   └── useScrollAnimation.ts
│   └── styles/
│       └── globals.css
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, Features, Process, Clients strip, CTA |
| About | `/about` | Positioning, Values, Differentiators |
| Solutions | `/solutions` | 5 solution modules with outcomes |
| Our Team | `/team` | Team profiles with expertise tags |
| Clients | `/clients` | Logo grid + 3 detailed case studies |
| Contact | `/contact` | Contact form + contact details |

## Design

- **Primary**: `#9d2fda`
- **Secondary**: `#d42881`
- **Style**: Minimal, enterprise, structured
- **Fonts**: Syne (headings) + DM Sans (body)

## Customisation

- Replace placeholder company names in `ClientsClient.tsx`
- Update contact details (phone, WhatsApp, email) in `Footer.tsx` and `ContactClient.tsx`
- Add real team member photos to replace initials avatars in `TeamClient.tsx`
- Connect the contact form to a backend or service (e.g. Resend, Formspree)

---

© 2022 – Present Zookia. All rights reserved.
