# Backlog

Note 2026-10-14: the audit paths below were removed when the app became one offer page (see `decisions.md`). Their content is in git history, commit e7b67da. Kept as notes only.

## Design pass (later)
The look of the app, including the agency calculator's pinned result box, is a placeholder. Thais will direct a proper design pass later.

## Medium term: fill the spreadsheet from WhatsApp groups
Idea: the person plugs in WhatsApp, we identify the group names and fill the buildings spreadsheet for them.

Decided approach (not built): import **exported chats** (WhatsApp's own "Export chat", without media), parsed in the browser. No server, nothing stored, no ban risk. It would suggest, for the person to review:
- building name, from the group name;
- participants and phone numbers, as building contacts;
- possible apartment numbers, when they appear in messages.

Anything not found stays blank; nothing is guessed. Fixed rules only, no AI.

Why not a live connection: WhatsApp has no official API to list a personal account's groups; the workarounds break its terms and can get the number blocked; it needs a server (breaks "nothing is sent or stored" and the static public repo); and it pulls third-party data (doormen, managers, guests) under LGPD. A live connection could only live in the private layer, together with `secretario`, after its WhatsApp risk is settled.

To start: a real or realistic exported `.txt` of a building group, and a decision on iPhone and Android date formats (they differ).

## Superseded: software and high-end services (became the outbound path)
Built on 2026-10-13 as `content/outbound.ts`, for any founder who relies on referrals, not only software. The notes below are the original draft; the open questions still apply to the outbound wording.

### Original draft
Thais chose to skip this path on 2026-10-13 (second session) and build the agency path first. Not finalised. Same data shape as `content/airbnb-br.ts`, in English. Waiting on Thais's answers (below) before building.

**Context (not scored):** role (owner/founder/leader or operator; switches on the money wording), what they sell (software, high-end services, both), who does outbound today (founder, SDRs, agency, nobody), size of the sales team.

**Draft questions (10, 6 areas):**
- A. ICP and focus: written ICP based on real customers and used; written disqualifiers.
- B. Scoring and prioritisation: how contacts and accounts are ranked (rules and signals, hand-picked list, whoever shows up, none).
- C. Data and stack: where accounts, contacts and history live (single CRM to scattered); how data is enriched and validated.
- D. Campaigns and message: multichannel sequences per segment vs one email sequence vs ad hoc; whether messages use a real account signal or are generic.
- E. Conversion and handoff: what happens when a prospect replies (owner, response time, qualification criteria).
- F. Pipeline and reading: meetings and pipeline generated last month, by campaign; a routine to review and adjust.

**Result:** same three horizons. Download: a scored account list (account, segment, ICP criteria, signal, score, owner, next step).

**Open for Thais:** any pain missing or surplus (the "competing against AI" angle is only in the advice, not the questions); scored account list vs one-page ICP template as the download.

US property management comes last (needs Thais's pain points from the C21 case). The founder-led agency path is built as a draft (see `handoff.md`).
