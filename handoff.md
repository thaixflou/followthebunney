# Handoff

## Where we are
Public repo https://github.com/thaixflou/followthebunney (MIT). The app is one bilingual (English / Português) page: a calculator on the person's own numbers (results appear as they type; what the referral gap is worth, extra clients per month, a "How this is calculated" fold, and the US$2,000 sprint as a share of one client), the five day-28 deliverables of the 4-week sprint, and a Calendly booking button. The old audit, its three paths and the engine were removed (still in git, commit e7b67da). Build, lint, tsc and `scripts/test-referral.ts` pass. Thais approved the main copy; the lines added later (per-month line, fold, hints) and the Portuguese are Claude's draft. The landing page (`../revenue by thais`) now routes "That's me" here.

## Last session did
- 2026-10-14 (later): calculator shows partial results, per-month line, formulas fold; landing page updated to match. Dev server on 3002 was stopped by the system for low memory. See `sessions/2026-10-14-lean.md`.
- 2026-10-14 (earlier): agreed the lean shape, built the offer page, removed the audit, updated README and CLAUDE.md.
- 2026-10-13: the audit paths, now removed. See older session logs.

## Next session does
1. Start the server (`npx next dev -p 3002`) and look at the page in a browser and at phone width. Thais reads the new calculator lines and the Portuguese.
2. Decide the calculator currency for Brazilian founders (US dollars now).
3. Hosting (Vercel Hobby is non-commercial; Pro, or another static host such as Cloudflare Pages or Netlify, after checking terms), then point the landing page's `CONFIG.TOOLS_BASE` at it. Add a title, description and image so a LinkedIn link previews well, and test-book the Calendly link.
4. Parked until the first sprint sells: email gate, portal, CRM upload, other profiles.

## Update 2026-10-14 (end of session)
- Thais upgraded to Vercel Pro, so hosting is Vercel. Not linked or deployed yet (no `.vercel` folder; CLI is installed). Preferred route: connect the GitHub repo in the Vercel dashboard so pushes to `main` deploy. Needs her go-ahead before anything goes live.
- Thais read the Portuguese: a lot needs fixing. She had no time to go through it. Next session: ask her for the corrections (or go through `content/offer.ts` line by line with her), fix them, and only then deploy.

## Waiting on
- Thais: copy check on the later lines, calculator currency, hosting choice. Nothing is published or posted without her approval.

*Last updated: 2026-10-14*
