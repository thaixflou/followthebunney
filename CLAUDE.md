# Glow Up v2 (revenue leak audit)

At the start of every session, read `handoff.md` first. Decisions and why are in `decisions.md`; session logs in `sessions/`. The brief is `../glow up/brief-icp-audit-v2.md`.

Open source, static Next.js 16 + TypeScript, one page (English and Portuguese, switch button). For founders and owners whose business works but relies on referrals. A calculator on the person’s own numbers (clients won, how many from referrals, clients wanted, client value) shows what the gap is worth and how little of one client the $2,000 flat, 4-week sprint costs; below it the sprint deliverables and a booking button. The old audit (profiles, questions, scoring, three horizons) and its Airbnb, agency and outbound paths were removed on 2026-10-14; they live in git history (commit e7b67da). The ICP audit in `../glow up/` stays untouched as an archive.

@AGENTS.md

## Rules
- Next.js 16 differs from older versions. Read the relevant guide in `../glow up/node_modules/next/dist/docs/` (or this folder's `node_modules/next/dist/docs/`) before writing Next code.
- Public by design: no API keys, no AI, no server, no stored data. The calculator runs in the browser from fixed rules. Same numbers, same result.
- No Attio, review flow or email in this repo. That private layer lives outside it and comes later.
- No made-up claims: no statistics or benchmarks in any text. The calculator is plain arithmetic on the person's own numbers.
- Offer copy and the calculator wording are Thais's content. Everything new is DRAFT until she approves it. Never put real client data in examples (the Airbnb case is anonymised: pattern only).
- The repo is public (`thaixflou/followthebunney`): nothing sensitive goes in any file, including `handoff.md` and `backlog.md`. Do not publish the site or post anywhere without Thais's approval.
- Real client documents (proposals, data) never go in this folder or any repo folder. They live in `C:\Users\Thais\.secrets\clients\`. Never name a real client, person or price in any file here.
- Ask before deleting, overwriting, renaming or moving any file.

- Look of the app: same retro shell as the landing page (`../revenue by thais/landing.html`): dotted background, one paper window with a yellow title bar, orange button with hard shadow, yellow highlight, Space Grotesk / Geist / VT323. NOT the clay look in `../revenue by thais/design.md` (retired). Tokens are in `app/globals.css`.
- Offer page: copy in `content/offer.ts` (DRAFT until Thais approves; the Portuguese is Claude’s translation), arithmetic in `lib/referral.ts` (tested), page in `app/Offer.tsx`. Price is a flat US$2,000, no 50/50 wording. Booking link: Calendly, in `content/offer.ts`.
- Planned, not built (needs a server, private repo, consent): name and email gate for the full report, then a portal. Leads keep access 7 days, then it is deleted; active clients get a permanent login (email and password). The portal reads like a health score: quick wins, quarter and 2-3 year plan, what Thais is building, current focus, key metrics (typed in by hand for now). Only a mock preview exists, on the landing page. Never put client data or the backend in this public repo.

## Commands
- Run: `npm.cmd run dev` (script execution is disabled in PowerShell); Thais's other dev server may use 3000, so use `npx next dev -p 3002`. Check: `npm run build`, `npm run lint`, `node --experimental-strip-types scripts/test-referral.ts`.

## Mistakes to avoid
- A real client proposal was left inside a repo folder (this one is public). Rule: read client files from `.secrets\clients\`, and if one turns up in a repo folder, ask where to move it before anything else.
- `react-hooks/use-memo` lint rejects `useMemo` dependency lists with expressions like `arr.join()`. For cheap maths, skip the memo.
- Python is not installed: write helper scripts in Node.
- Never write code files through a shell heredoc or `node -` script when the text contains backslash escapes (newline, BOM): they become real characters and break the file. Use the Write tool.
- Library imports use the `.ts` extension (`allowImportingTsExtensions`) so the test script runs under plain Node.
- `create-next-app` refuses folder names with a space: write the files by hand, as done here.
- Restyled the app to `design.md` (clay) when Thais said "off the design we agreed". That look is retired. Rule: before styling anything, read the Design line in `../revenue by thais/CLAUDE.md` and match `landing.html`.
