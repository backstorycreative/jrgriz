# JR Griz Football — Website

Marketing site for **Junior Grizzlies Football**, a year-round youth football
development program in Lincoln, Nebraska. Built with Next.js (App Router,
TypeScript). The "Athletic" concept: near-black base, electric-blue accent,
heavy condensed-italic display type, and angled geometric cuts.

## Run it locally

```bash
npm install      # first time only
npm run dev      # start the dev server
```

Open http://localhost:3000. Edits to files in `app/` hot-reload automatically.

```bash
npm run build    # production build (run this before deploying to catch errors)
npm run start    # serve the production build locally
```

## Where things live

- `app/page.tsx` — the home page. Section copy (programs, pillars, pathway) lives
  in plain arrays at the top of the file — edit text there.
- `app/components/SiteNav.tsx` — header + mobile hamburger menu.
- `app/components/Wordmark.tsx` — the "JR GRIZ" logo lockup (used in nav + footer).
- `app/globals.css` — all styling and design tokens (colors, type, spacing).
- `app/layout.tsx` — page metadata (title/description) and Google Fonts loading.
- `public/jrgriz-bear-dark.png` — the bear logo used in the hero.

## Deploy: GitHub → Vercel

This is the recommended flow. Once set up, **every `git push` auto-deploys**.

### 1. Push to GitHub (one time)

```bash
cd /Users/Tyler/Sites/jrgriz
git add -A
git commit -m "Initial JR Griz site"
```

Create an empty repo on GitHub (github.com/new — don't add a README), then:

```bash
git remote add origin https://github.com/<your-username>/jrgriz.git
git branch -M main
git push -u origin main
```

### 2. Connect Vercel (one time)

1. Go to https://vercel.com and sign in with GitHub.
2. **Add New → Project**, import the `jrgriz` repo.
3. Vercel auto-detects Next.js — no settings to change. Click **Deploy**.

You'll get a live URL (e.g. `jrgriz.vercel.app`). Add a custom domain later under
the project's **Settings → Domains**.

### 3. Updates from now on

```bash
# edit files, then:
git add -A
git commit -m "describe your change"
git push
```

Vercel rebuilds and redeploys automatically within ~1 minute. Pull requests get
their own preview URLs before you merge.

## Notes

- Fonts (Saira Condensed, Archivo, Anton) are loaded and self-optimized via
  `next/font` — no external font request at runtime.
- The design is mobile-responsive with a hamburger menu under 980px and a
  single-column phone layout under 600px.
