# PAN — Private Affiliate Network

Production-ready Next.js landing page using the supplied logo and lava background.

## Included
- Next.js 14 app router project
- Responsive premium landing page
- SEO metadata, robots, sitemap, Open Graph image route
- JSON-LD structured data
- Lead forms with serverless `/api/apply` endpoint
- Telegram and/or generic webhook lead delivery support
- Ready for GitHub + Vercel

## Local setup
```bash
npm install
npm run dev
```

## Deploy to Vercel
1. Push this folder to GitHub.
2. Import the repo into Vercel.
3. Framework preset: **Next.js**.
4. Add environment variables if you want lead delivery:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
LEAD_WEBHOOK_URL=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

## Lead delivery
The forms submit to `/api/apply`.

Supported delivery targets:
- `LEAD_WEBHOOK_URL` for any webhook/automation endpoint
- `TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_ID` for Telegram lead notifications

If none of those are configured, the form UI works but the API will return a configuration error. Set at least one target in Vercel before going live.

## Assets
- `public/crown-logo.png`
- `public/lava-bg.png`

## SEO files
- `app/layout.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- `app/opengraph-image.tsx`
