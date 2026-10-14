# Glow Up v2 (revenue leak audit)

At the start of every session, read `handoff.md` first. Decisions and why are in `decisions.md`; session logs in `sessions/`. The brief is `../glow up/brief-icp-audit-v2.md`.

Open source, static Next.js 16 + TypeScript app. A person picks their profile, answers a few questions on where revenue leaks in their commercial flow, and gets a result in 3 horizons: Today (DIY), This quarter, 2-3 years. The last two carry the call-to-action. The ICP audit (`../glow up/`) stays untouched as a historical archive; it may become a module here later.

@AGENTS.md

## Rules
- Next.js 16 differs from older versions. Read the relevant guide in `../glow up/node_modules/next/dist/docs/` (or this folder's `node_modules/next/dist/docs/`) before writing Next code.
- Public by design: no API keys, no AI, no server, no stored data. Scoring runs in the browser from fixed rules. Same answers, same score.
- No Attio, review flow or email in this repo. That private layer lives outside it and comes later.
- No made-up claims: no statistics or benchmarks in any text. The calculator is plain arithmetic on the person's own numbers.
- Questions, scoring and advice are Thais's content. Everything new is DRAFT until she approves it. Never put real client data in examples (the Airbnb case is anonymised: pattern only).
- Paths: Airbnb manager in Brazil (built), founder-led marketing agencies (draft), outbound for founders who rely on referrals (draft, replaces the old software path), US property management (not built). Only the Airbnb path is in Portuguese for now; the rest are English.
- The repo is public (`thaixflou/followthebunney`): nothing sensitive goes in any file, including `handoff.md` and `backlog.md`. Do not publish the site or post anywhere without Thais's approval.
- The Airbnb path is built and reviewed by Thais. Other paths follow the same data shape (`lib/types.ts`, `content/airbnb-br.ts`); the engine in `lib/engine.ts` holds no wording. Add a path to `lib/paths.ts` and flip `ready` in `PROFILES`.
- Owner-only money wording: the `money` line of each area shows only to owners; operators see time lost and risk of error.
- The agency path (`content/agency.ts`, English) is a DRAFT built from a real, anonymised engagement. It adds two optional parts to `AuditPath` in `lib/types.ts`: a live `calculator` (arithmetic in `lib/funnel.ts`, tested) and a downloadable markdown `kit` (`content/agency-kit.ts`). Its download template is a 90-day plan CSV of testable hypotheses (expected result, check date, stop criterion). Other paths can reuse both.
- The outbound path (`content/outbound.ts`, `content/outbound-kit.ts`) is a DRAFT that reuses the agency calculator, kit and CSV shape; its ICP questions come from Glow Up v1. Ideas not yet approved for build live in `backlog.md` (WhatsApp chat-export import, design pass).
- Real client documents (proposals, data) never go in this folder or any repo folder. They live in `C:\Users\Thais\.secrets\clients\`. Never name a real client, person or price in any file here.
- Ask before deleting, overwriting, renaming or moving any file.

- Look of the app: same retro shell as the landing page (`../revenue by thais/landing.html`): dotted background, one paper window with a yellow title bar, orange button with hard shadow, yellow highlight, Space Grotesk / Geist / VT323. NOT the clay look in `../revenue by thais/design.md` (retired). Tokens are in `app/globals.css`.
- Lengths: a path can have `lengths` (question ids for 1 and 5 minutes; 15 = every question), drafted by Claude and not yet approved by Thais. `forMinutes` in `lib/engine.ts` filters the questions and areas. Screens with one question move on when an answer is picked.
- Each built path has its own static page (`/outbound`, `/agency`, `/airbnb-br`, `app/[path]/page.tsx`) so the landing page can link to it.
- Planned, not built (needs a server, private repo, consent): name and email gate for the full report, then a portal. Leads keep access 7 days, then it is deleted; active clients get a permanent login (email and password). The portal reads like a health score: quick wins, quarter and 2-3 year plan, what Thais is building, current focus, key metrics (typed in by hand for now). Only a mock preview exists, on the landing page. Never put client data or the backend in this public repo.

## Commands
- Run: `npm.cmd run dev` (script execution is disabled in PowerShell); Thais's other dev server may use 3000, so use `npx next dev -p 3002`. Check: `npm run build`, `npm run lint`, `node --experimental-strip-types scripts/test-engine.ts`.

## Mistakes to avoid
- A real client proposal was left inside a repo folder (this one is public). Rule: read client files from `.secrets\clients\`, and if one turns up in a repo folder, ask where to move it before anything else.
- `react-hooks/use-memo` lint rejects `useMemo` dependency lists with expressions like `arr.join()`. For cheap maths, skip the memo.
- Python is not installed: write helper scripts in Node.
- Never write code files through a shell heredoc or `node -` script when the text contains backslash escapes (newline, BOM): they become real characters and break the file. Use the Write tool.
- Library imports use the `.ts` extension (`allowImportingTsExtensions`) so the test script runs under plain Node.
- `create-next-app` refuses folder names with a space: write the files by hand, as done here.
- Restyled the app to `design.md` (clay) when Thais said "off the design we agreed". That look is retired. Rule: before styling anything, read the Design line in `../revenue by thais/CLAUDE.md` and match `landing.html`.
