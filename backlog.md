# Backlog

## Medium term: fill the spreadsheet from WhatsApp groups
Idea: the person plugs in WhatsApp, we identify the group names and fill the buildings spreadsheet for them.

Decided approach (not built): import **exported chats** (WhatsApp's own "Export chat", without media), parsed in the browser. No server, nothing stored, no ban risk. It would suggest, for the person to review:
- building name, from the group name;
- participants and phone numbers, as building contacts;
- possible apartment numbers, when they appear in messages.

Anything not found stays blank; nothing is guessed. Fixed rules only, no AI.

Why not a live connection: WhatsApp has no official API to list a personal account's groups; the workarounds break its terms and can get the number blocked; it needs a server (breaks "nothing is sent or stored" and the static public repo); and it pulls third-party data (doormen, managers, guests) under LGPD. A live connection could only live in the private layer, together with `secretario`, after its WhatsApp risk is settled.

To start: a real or realistic exported `.txt` of a building group, and a decision on iPhone and Android date formats (they differ).
