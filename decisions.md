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
