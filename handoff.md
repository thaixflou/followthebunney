# Handoff

## Where we are
Public repo https://github.com/thaixflou/followthebunney (MIT). The app is now one bilingual (English / Português) page: a calculator on the person's own numbers (what the referral gap is worth, and the US$2,000 sprint as a share of one client), the five day-28 deliverables of the 4-week sprint, and a Calendly booking button. The old audit, its three paths and the engine were removed (still in git, commit e7b67da). Build, lint, tsc and `scripts/test-referral.ts` pass. The copy is DRAFT; the Portuguese is Claude's translation.

## Last session did
- 2026-10-14 (third): calculator now shows results as you type, adds a per-month line and a "How this is calculated" fold (draft copy, EN and PT). Landing page updated to match (see its own handoff). Dev server on 3002 was stopped by the system for low memory; start it again with `npx next dev -p 3002`.
- 2026-10-14 (second session): agreed the lean shape, built the offer page, removed the audit, updated README and CLAUDE.md. See `sessions/2026-10-14-lean.md`.
- 2026-10-14 (first) and 2026-10-13: the audit paths, now removed. See older session logs.

## Next session does
1. Thais reads the page (`npx next dev -p 3002`; a server for this folder may already be running) and edits the copy. Native check of the Portuguese. Decide the calculator currency for Brazil (US dollars now).
2. Phone-width and browser check of the page.
3. Fix `../revenue by thais/landing.html`: it still links to `/outbound`, `/agency`, `/airbnb-br` (gone) and shows the portal mock and "no email" wording.
4. Hosting (Vercel; Hobby is non-commercial, Pro for commercial use), then point the landing page at it.
5. Parked until the first sprint sells: email gate, portal, CRM upload, other profiles.

## Waiting on
- Thais: copy approval, calculator currency, hosting plan. Nothing is published or posted without her approval.

*Last updated: 2026-10-14*
