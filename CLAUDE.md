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
- Do not create the GitHub repo, push, or publish without Thais's approval.
- Ask before deleting, overwriting, renaming or moving any file.

## Commands
- Run: `npm.cmd run dev` (script execution is disabled in PowerShell). Check: `npm run build`, `npm run lint`.

## Mistakes to avoid
- Python is not installed: write helper scripts in Node.
- `create-next-app` refuses folder names with a space: write the files by hand, as done here.
