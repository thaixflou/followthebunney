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
- Four paths: US property management (imobiliária), Airbnb manager in Brazil, software and high-end services, founder-led marketing agencies. Only the Airbnb path is in Portuguese for now; the rest are English.
- The repo is public (`thaixflou/followthebunney`): nothing sensitive goes in any file, including `handoff.md` and `backlog.md`. Do not publish the site or post anywhere without Thais's approval.
- The Airbnb path is built and reviewed by Thais. Other paths follow the same data shape (`lib/types.ts`, `content/airbnb-br.ts`); the engine in `lib/engine.ts` holds no wording. Add a path to `lib/paths.ts` and flip `ready` in `PROFILES`.
- Owner-only money wording: the `money` line of each area shows only to owners; operators see time lost and risk of error.
- The agency path (`content/agency.ts`, English) is a DRAFT built from a real, anonymised engagement. It adds two optional parts to `AuditPath` in `lib/types.ts`: a live `calculator` (arithmetic in `lib/funnel.ts`, tested) and a downloadable markdown `kit` (`content/agency-kit.ts`). Its download template is a 90-day plan CSV of testable hypotheses (expected result, check date, stop criterion). Other paths can reuse both.
- Ideas not yet approved for build live in `backlog.md` (WhatsApp chat-export import, software path, design pass).
- Real client documents (proposals, data) never go in this folder or any repo folder. They live in `C:\Users\Thais\.secrets\clients\`. Never name a real client, person or price in any file here.
- Ask before deleting, overwriting, renaming or moving any file.

## Commands
- Run: `npm.cmd run dev` (script execution is disabled in PowerShell); Thais's other dev server may use 3000, so use `npx next dev -p 3002`. Check: `npm run build`, `npm run lint`, `node --experimental-strip-types scripts/test-engine.ts`.

## Mistakes to avoid
- A real client proposal was left inside a repo folder (this one is public). Rule: read client files from `.secrets\clients\`, and if one turns up in a repo folder, ask where to move it before anything else.
- `react-hooks/use-memo` lint rejects `useMemo` dependency lists with expressions like `arr.join()`. For cheap maths, skip the memo.
- Python is not installed: write helper scripts in Node.
- Never write code files through a shell heredoc or `node -` script when the text contains backslash escapes (newline, BOM): they become real characters and break the file. Use the Write tool.
- Library imports use the `.ts` extension (`allowImportingTsExtensions`) so the test script runs under plain Node.
- `create-next-app` refuses folder names with a space: write the files by hand, as done here.
