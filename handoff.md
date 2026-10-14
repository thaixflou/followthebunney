# Handoff

## Where we are
Public repo https://github.com/thaixflou/followthebunney (MIT). Three paths are built: Airbnb BR (Portuguese, approved) and two English DRAFTS Thais has not reviewed line by line (founder-led agency, outbound). Each now has a 1, 5 or 15 minute version (question sets are a draft), its own page (`/outbound`, `/agency`, `/airbnb-br`), a live calculator, a markdown kit and a 90-day plan CSV. The app wears the landing page's retro look. The landing page (`../revenue by thais`) links to the audits and shows a mock of the planned portal. Build, lint, tsc and the engine test pass.

## Last session did
- 2026-10-14: removed "on purpose" everywhere; added quiz lengths and a time choice; restyled to the retro look (after one wrong turn to the retired clay look); per-path pages; landing page links, portal preview, wider window, side toggles, new opener. See `sessions/2026-10-14.md`.
- 2026-10-13: three sessions: Airbnb path, agency path, outbound path.

## Next session does
1. Review the agency and outbound drafts with Thais in the browser (`npx next dev -p 3002`): wording, scores, advice, kit, CSV, CTA, and the 1 and 5 minute question picks. Outbound: the low scores for "no replies yet" and "nobody does outreach", and whether the first ICP question fits founders with few clients.
2. Choose how the calculator becomes more automatic: upload a CRM or sheet export counted in the browser (recommended), or fewer boxes.
3. Decide the result page: keep the three horizons, or show the top weakness, one action and the CTA, with the rest after the email gate.
4. Hosting (Vercel; Hobby is non-commercial, Pro for commercial use), then set `CONFIG.TOOLS_BASE` in the landing page.
5. Email gate and portal: write a spec first (systems design interview), backend in a private repo, magic link login, 7-day access for leads. Change the landing page's "no email" wording when it exists.
6. Phone-width check of the app and the landing page. US property management path (needs the C21 pain points).

## Waiting on
- Thais: review of the agency and outbound drafts and the 1/5 minute picks; calculator choice; result page choice; hosting plan; booking link. Nothing is published or posted without her approval.

*Last updated: 2026-10-14*
