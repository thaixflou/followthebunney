# Decisions

## 2026-10-13: V2 is a revenue-leak audit in a new folder; the ICP audit stays as an archive
- Why: the V1 measures how well the ICP is defined; the V2 measures where revenue leaks in the commercial flow. Thais expects the ICP audit to become a step inside other paths later.
- Not picked: rewriting the Glow Up in place.

## 2026-10-13: Four separate paths
- US property management, Airbnb manager in Brazil, software and high-end services, founder-led marketing agencies. Property management is split because the pains differ.
- The Airbnb path uses the anonymised pattern from the `secretario` case (guest documents, building communication, apartment mapping, swap risk), no real data.

## 2026-10-13: Public version is static, no AI, no server, no stored data
- Why: open source on GitHub, usable online, nothing to host or secure. Scoring is fixed rules in the browser.
- Attio, review and email stay out of the public repo for now (private layer later).

## 2026-10-13: Calculator uses the person's own numbers, no 25% assumption
- Shows what one point of improvement is worth, plain arithmetic, optional.

## 2026-10-13: Language
- Airbnb path in Portuguese; the other paths in English for now. Text lives in separate content files so more languages can be added.

## 2026-10-13: Public repo `thaixflou/followthebunney`, MIT licence
- Why: the audit is meant to be open source and usable online; Thais chose the name.
- What we didn't pick: a private repo or a repo inside `hello-workspace` (mixes with unrelated projects, not shareable).

## 2026-10-13: Money wording only for owners
- Why: for the Airbnb manager the pain is lost time and risk of error; only business owners also get the line about lost money. No numbers, only hedged statements.
- What we didn't pick: one money-focused text for everyone.

## 2026-10-13: Downloadable CSV is the "Today" step of the mapping area
- Why: gives the person something to use at once. Semicolon separator and UTF-8 BOM so it opens correctly in Brazilian Excel and Google Sheets; example rows are invented and marked to delete.
- What we didn't pick: a comma-separated file (opens as one column in Brazilian Excel).

## 2026-10-13: WhatsApp plug-in goes to the backlog as chat-export import
- Why: WhatsApp has no official API for a personal account's groups; workarounds can get the number blocked; a live link needs a server and breaks "nothing is stored"; third-party data under LGPD. Importing exported chats in the browser avoids all of that. Medium term, see `backlog.md`.
- What we didn't pick: live connection (unofficial, risky, would only fit the private layer with `secretario`).

## 2026-10-13: Software path postponed; paths built in this order
- Order: Airbnb BR (done), software and high-end services, founder-led agency, US property management last. Software questions are drafted in `backlog.md`.
- Why: Thais did not want to finalise it today; the US path lacks a mapped pain case.

## 2026-10-13: Software path skipped for now; agency path built next
- Why: Thais chose to skip software for now; she has a real first engagement that maps onto the agency path.
- What we didn't pick: software path (questions stay drafted in `backlog.md`); US property management (still lacks pain points).

## 2026-10-13: Agency free offer is a calculator, a kit and a 90-day hypothesis plan
- Why: founder-led agency owners are more sophisticated than Airbnb managers, so the free part must be worth more. The kit mirrors what the real engagement delivered (qualification with decision access, first conversation, follow-up cadence); the plan template uses testable hypotheses with stop criteria.
- What we didn't pick: a plain lead tracker CSV (too thin); a scored account list or ICP template (that was for the software path).

## 2026-10-13: Funnel calculator is live and plain arithmetic
- Why: Thais wants the number to update while the person fills it in. Only the person's own counts and project value are used, no benchmarks; assumptions are stated on screen (every project worth the average, later steps keep their rate).
- What we didn't pick: a Calculate button; any comparison with other companies.

## 2026-10-13: Real client documents stay out of every repo folder
- Why: this repo is public and the top-level folder syncs to OneDrive and GitHub. Client files live in `C:\Users\Thais\.secrets\clients\`.
- What we didn't pick: keeping the file in the project with a git exclude (one slip publishes it).

## 2026-10-13: Design pass postponed
- Why: Thais wants to work on design later; current styling is a placeholder.

## 2026-10-13: The outbound path replaces the "software" profile and serves any referral-led founder
- Why: the landing page's lead pain is "I can't reach new clients on purpose", which no audit covered; the skipped software draft was already an outbound audit; the ICP is a situation, not an industry.
- What we didn't pick: keeping a software-only path (would split the same pain by industry); extending the agency path (it is about inbound leads, not outbound).

## 2026-10-13: Reuse Glow Up v1's ICP questions in new wording; keep v1 untouched
- Why: v1 covers only the ICP part of outbound (evidence, disqualifiers, buyer), which fits the first two areas; the rest (scoring, lists, message, ownership, numbers) is new.
- What we didn't pick: embedding v1 as a module (it is private and needs a server, Attio and an AI; v2 is public and static); copying v1's B2C questions.

## 2026-10-14: Quiz lengths of 1, 5 and 15 minutes; 15 is the full set
- Why: Thais wants a quick, high-impact, easy questionnaire and a visitor who picks how much time they have. 5 minutes is one question per area; 1 minute is the three most telling. The question picks are a draft for her approval.
- What we didn't pick: cutting outbound to 6 questions only (loses the deep version); a separate quiz per length (three sets of content to keep in sync).

## 2026-10-14: The app uses the landing page's retro look, not the clay look of design.md
- Why: the landing page project rules retire the clay look; the agreed shell is dotted background, one window, orange button with a hard shadow, yellow highlight.
- What we didn't pick: the clay palette and DM Sans/Fraunces (restyled once by mistake, then reverted).

## 2026-10-14: Lead to portal flow, with 7-day access for leads
- Why: Thais's flow is pain card, then book a call or take the quiz, then a quick win, then name and email for the full report (quarter and 2-3 years), then a portal that reads like a health score (quick wins, long-term plan, what Thais is building, current focus, key metrics). Everyone who leaves an email has access for 7 days, then it is deleted unless they become an active client; clients keep a login with their email and a password. Metrics are typed in by hand. For now the landing page only shows a preview.
- What we didn't pick: a portal for clients only (empty for new leads); keeping lead data longer; syncing metrics from a CRM (later).
- Build order: landing and quiz (done), then email gate and a private backend (magic link login suggested), then the dashboard. Backend and data stay out of this public repo.

## 2026-10-14: Landing page links to audits by path, with a local fallback
- Why: each audit has its own static page (/outbound, /agency, /airbnb-br); the landing page uses CONFIG.TOOLS_BASE, and while opened from file or localhost it points to port 3002 so Thais can test the flow.
- What we didn't pick: query parameters (not available in a static export); one URL with a hash.
