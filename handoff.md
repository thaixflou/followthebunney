# Handoff

## Where we are
Public repo https://github.com/thaixflou/followthebunney (MIT). The calculator page is deployed (English only) at https://followthebunney.vercel.app on Vercel Pro (project `followthebunney`). The landing page is deployed at https://revenue-by-thais.vercel.app (project `revenue-by-thais`, see `../revenue by thais`). Both are still behind Vercel's login wall until Thais turns off Deployment Protection. The Portuguese is hidden (`SHOW_LANG_SWITCH = false` in `app/Offer.tsx`) because Thais found a lot to fix.

## Last session did
- 2026-10-14 (deploy): upgraded to Vercel Pro, hid the language switch, deployed the calculator and the landing page, landing page cleaned (banner, booking, refund rule). See `sessions/2026-10-14-deploy.md`.
- 2026-10-14 (later): calculator partial results, per-month line, formulas fold. See `sessions/2026-10-14-lean.md`.
- 2026-10-14 (earlier): lean shape, offer page built, audit removed.

## Next session does
1. Confirm Thais switched off Deployment Protection on both Vercel projects; open both URLs in a private window; test the Calendly button and the landing page's "That's me" link.
2. GitHub is up to date for both repos (calculator and `hello-workspace`). Note: the first push reported an error but had worked (`a828997` was our own commit). Thais runs `vercel` commands with `!` (Claude is blocked from deploying).
3. Portuguese: get Thais's corrections (or go line by line through `content/offer.ts`), fix, then set `SHOW_LANG_SWITCH = true` and redeploy.
4. Title, description and share image for LinkedIn previews; permanent domain; calculator currency for Brazilian founders (US dollars now).
5. Parked until the first sprint sells: email gate, portal, CRM upload, other profiles.

## Waiting on
- Thais: Deployment Protection off on both projects, Portuguese corrections, domain choice. Nothing new is posted without her approval.

*Last updated: 2026-10-14*
