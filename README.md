# XINGHE Sensor Technology Website

A modern, responsive website for XINGHE Fraredsensor Technology Co., Ltd - a leading infrared detector manufacturer.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Deployment**: Static Export (compatible with Cloudflare Pages, Netlify, Vercel)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start
```

### Static Export

The site is configured for static export by default. After running `npm run build`, the static files will be generated in the `out` directory.

```bash
npm run build
# Static files are in ./out
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header & Footer
│   ├── page.tsx           # Homepage
│   ├── about-us/          # About Us page
│   ├── products/          # Products listing page
│   ├── servicesandsupport/# Services & Support page
│   ├── industrial-solutions/
│   ├── store/
│   └── [product-id]/      # Individual product pages
├── components/            # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Nav.tsx
│   ├── Container.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   └── ...
├── lib/                   # Utility functions and data
│   └── products.ts        # Product data
├── styles/
│   └── globals.css        # Global styles & Tailwind
├── public/                # Static assets
│   └── images/
├── tailwind.config.ts     # Tailwind configuration
├── next.config.ts         # Next.js configuration
└── package.json
```

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/about-us` | About Us / Company Profile |
| `/products` | Products Listing |
| `/servicesandsupport` | Services & Support / FAQ |
| `/industrial-solutions` | Industrial Solutions Overview |
| `/industrial-solutions-thermography` | Thermography Solutions |
| `/industrial-solutions-security-monitoring` | Security Monitoring |
| `/store` | Store / Contact Sales |
| `/timo256`, `/timo120`, etc. | Individual Product Pages |

## Design System

The design system is configured in `tailwind.config.ts`:

- **Colors**: Primary (red), Neutral, Success, Warning, Danger
- **Typography**: Roboto font family with defined scale
- **Spacing**: Consistent spacing scale
- **Components**: Buttons, Cards, Forms with consistent states

## Deployment

### Cloudflare Pages

1. Connect your repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `out`

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`

### Vercel

Vercel will automatically detect Next.js and configure the build.

## Development Guidelines

- All text content is preserved from the original site - do not modify copy
- Maintain URL structure compatibility with original site
- Mobile-first responsive design (320px minimum)
- WCAG AA accessibility compliance
- Focus states on all interactive elements

## License

© 2025 XINGHE Fraredsensor Co.LTD. All rights reserved.
# irarea
