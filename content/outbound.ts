// DRAFT for Thais to review. All wording, options and scores are provisional until approved.
// Rule: no statistics or benchmarks here. "I don't know" always scores below any real answer.
// Built from the outbound-engine offer (ICP, scoring, architecture, campaigns, stack, conversion, pipeline) and the
// ICP questions of Glow Up v1 (`../glow up/lib/aspects.ts`: evidence, disqualifiers, contact). No client or lead data.
import type { AuditPath } from "../lib/types.ts";
import { agency } from "./agency.ts";
import { outboundKit } from "./outbound-kit.ts";

const money = (n: number) => Math.round(n).toLocaleString("en-US");

export const outbound: AuditPath = {
  id: "outbound",
  text: {
    lang: "en",
    title: "Where your outbound is missing or leaking",
    intro:
      "Answer 12 quick questions about how you reach new clients on purpose, not through a referral. You get a result showing which part of an outbound engine is weakest, a calculator that puts it in your own numbers, and a starter kit to build the first version this month.",
    start: "Start",
    next: "Continue",
    back: "Back",
    seeResult: "See my result",
    step: (n, total) => `Step ${n} of ${total}`,
    contextTitle: "A little about you",
    ownerQuestionId: "role",
    resultTitleOwner: "Where your outbound stalls and what it costs you",
    resultTitleOperator: "Where outbound stalls and where time is lost",
    overall: "overall score",
    areasTitle: "Score by area",
    bands: { low: "Needs attention", mid: "In progress", high: "Well structured" },
    todayTitle: "Today",
    todayIntro: "What you can do yourself, with no new tool.",
    quarterTitle: "This quarter",
    quarterIntro: "What to build and how to implement it.",
    longTitle: "Next 2 to 3 years",
    longIntro: "The structural view of how you reach new clients on purpose.",
    moneyLabel: "If you own the business",
    allGood: "Every area is well structured. There is no clear weak point to work on right now.",
    ctaTitle: "Want to talk it through?",
    ctaText:
      "The quarter and long-term parts are where I can help most: defining the ICP, building the scoring and the account list, setting up the campaigns and the stack, and turning the plan into hypotheses with stop criteria.",
    ctaButton: "Book a conversation",
    restart: "Start over",
    privacy: "Nothing you answer is sent or stored. The whole audit runs in your browser.",
    dontKnow: "I don't know yet",
  },

  context: [
    {
      id: "role",
      text: "What is your role?",
      options: [
        { value: "owner", label: "I am the founder, CEO or an owner" },
        { value: "operator", label: "I run sales, marketing or operations" },
      ],
    },
    {
      id: "sells",
      text: "What do you sell?",
      options: [
        { value: "services", label: "Services (agency, consulting, high-end or specialist work)" },
        { value: "software", label: "Software" },
        { value: "property", label: "Property or rental management" },
        { value: "other", label: "Something else" },
      ],
    },
    {
      id: "source",
      text: "Where do most of your clients come from today?",
      options: [
        { value: "referral", label: "Referrals and word of mouth" },
        { value: "inbound", label: "Inbound (content, website, ads, events)" },
        { value: "outbound", label: "Outbound" },
        { value: "mixed", label: "A mix, no clear main source" },
      ],
    },
    {
      id: "doer",
      text: "Who reaches out to new prospects today?",
      options: [
        { value: "nobody", label: "Nobody, we have not done outbound" },
        { value: "founder", label: "Mostly the founder, when there is time" },
        { value: "rep", label: "A sales person or an SDR" },
        { value: "outside", label: "An agency or a freelancer" },
      ],
    },
  ],

  areas: [
    {
      id: "icp",
      name: "Who you are going after",
      blurb: "Whether the ideal client is based on real deals, and whether you know who to say no to.",
      advice: {
        today:
          "List your five best clients and your three worst. For each, write size, sector, who bought, what triggered the purchase and what it was worth. Circle what the best ones have in common that the worst do not.",
        quarter:
          "Turn the circles into a one-page ICP: firmographics, the buyer's role, the problem in their words, the trigger, and a short list of disqualifiers. Check it against your closed-won and closed-lost deals before you use it.",
        longTerm:
          "An ICP that is reviewed with every batch of deals, so who you go after changes because of evidence, not because of a new idea.",
        money:
          "Outreach to the wrong accounts burns the same time and the same sender reputation as outreach to the right ones, and it cannot be recovered later.",
      },
    },
    {
      id: "targets",
      name: "Choosing accounts and contacts",
      blurb: "How you decide who to contact first, and whether you know the right person inside the company.",
      advice: {
        today:
          "Pick ten companies that look like your best clients and find, for each, the one person who feels the problem and the one who signs off. Write both names down.",
        quarter:
          "Write a simple scoring rule: points for fit (size, sector, location) and points for a signal (hiring, a launch, a change of leadership, a public problem). Rank the list by it, and work from the top.",
        longTerm:
          "A scoring model you adjust from results, so the list tells you who to contact this week instead of you deciding from memory.",
        money:
          "Without a ranking, effort goes to whoever comes to mind first, which is rarely whoever is most likely to buy.",
      },
    },
    {
      id: "data",
      name: "Lists, data and where it lives",
      blurb: "Whether you have a list to work from today, and a place that records what happened.",
      advice: {
        today:
          "Open a sheet with one row per target account: company, contact, role, why them, status and next step. Fill the first twenty rows. Nothing else is needed to start.",
        quarter:
          "Move the list into one CRM or tracker used by everyone who does outreach, with the same fields, and a rule that a prospect does not exist until it is there. Decide how contact data is found and checked before sending.",
        longTerm:
          "One record per account from first touch to client or closed, so what works is something you read from the data and not something you remember.",
        money:
          "Outreach that is not recorded cannot be improved: you pay for the same lessons again every quarter.",
      },
    },
    {
      id: "message",
      name: "Message and sequence",
      blurb: "What the first message says, and what happens when there is no reply.",
      advice: {
        today:
          "Write the first message for one real prospect. It must contain one specific thing you noticed about their company, the problem it suggests, and one easy question. If you could send it to anyone, rewrite it.",
        quarter:
          "Write the sequence in advance: how many touches, how far apart, on which channels, what each contains, and a polite exit message at the end. Test one segment at a time so you can tell what changed the result.",
        longTerm:
          "Campaigns by segment with messages built from a real signal, reviewed against replies and meetings, with the sequence running even when you are busy.",
        money:
          "A generic message gets ignored, and a prospect that ignored you once is harder to reach the second time.",
      },
    },
    {
      id: "replies",
      name: "Replies, ownership and capacity",
      blurb: "Who does the outreach, and what happens when someone answers.",
      advice: {
        today:
          "Block two fixed hours in your calendar this week for outreach and nothing else. Decide who answers a reply within one working day, and write the name down.",
        quarter:
          "Assign a clear owner for outreach, with a weekly slot, and write the reply rules: who responds, how fast, which questions qualify the prospect and what the next step is. Hand the first part (research, list, scheduling) to someone else when you can.",
        longTerm:
          "An outbound motion that does not depend on the founder's free time: someone owns it, it has a weekly rhythm, and replies are handled the same way every time.",
        money:
          "When outreach is done only when there is time, it stops exactly when the pipeline gets thin, which is when you need it most.",
      },
    },
    {
      id: "pipeline",
      name: "Pipeline and reading the numbers",
      blurb: "Whether you can see what outreach produces, and whether you adjust it.",
      advice: {
        today:
          "Use the calculator below with the last quarter's numbers. If you have not done outbound yet, skip it and write down what you would need to count: accounts contacted, replies, meetings and clients.",
        quarter:
          "Count four numbers every week: accounts contacted, replies, meetings held and clients won, by campaign. Hold a short review on a fixed day, and change one thing at a time.",
        longTerm:
          "A picture of outbound by segment and by message, built from your own history, so you decide where to put effort from facts.",
        money:
          "Without your own numbers you cannot tell whether the cheaper way to grow is contacting more accounts or fixing the step where they stop answering.",
      },
    },
  ],

  calculator: {
    title: "What this costs, in your own numbers",
    text: "If you have done outbound, enter what happened in the last quarter and watch the numbers update as you go. This is plain arithmetic on your numbers: nothing is compared to other companies and nothing is sent anywhere. If you have not done outbound yet, skip this box.",
    periodNote: "Counts for the last 3 months.",
    stages: [
      { id: "contacted", label: "Accounts you contacted" },
      { id: "replies", label: "Accounts that replied" },
      { id: "meetings", label: "Meetings held" },
      { id: "won", label: "Clients won" },
    ],
    ticketLabel: "Average value of a client you win",
    orderError: "A later stage cannot be larger than the one before it. Check the numbers.",
    ratesTitle: "How far accounts get",
    rate: (from, to, pct) => `${from} → ${to}: ${pct}%`,
    weakest: (from, to, pct) =>
      `Your lowest step is from "${from}" to "${to}" (${pct}%). That is the first place to look, not a verdict: a low step can also be normal for your business.`,
    onePoint: (from, to, extraWins, value) =>
      `If the step from "${from}" to "${to}" gained one percentage point, and the later steps stayed as they are, that is about ${extraWins.toFixed(2)} more clients a quarter, worth about ${money(value)} a year.`,
    oneProject: (value) =>
      `If outbound brings you a single extra client each quarter, that is ${money(value)} a year (in the currency you entered).`,
    assumption: "Estimates assume every client is worth your average and later steps keep their current rate.",
  },

  kit: {
    filename: "outbound-starter-kit.md",
    title: "Your outbound starter kit",
    text: "A one-page ICP outline, a simple scoring rule, how to build your first list of 50 accounts, a first message built on a real signal, a multi-touch sequence with polite exits, rules for handling replies, and the weekly numbers to count. A text file you can paste into your notes or CRM.",
    button: "Download the kit (Markdown)",
    body: outboundKit,
  },

  template: {
    filename: "90-day-outbound-plan.csv",
    title: "Your 90-day plan as testable hypotheses",
    text: "Each row is a hypothesis with an expected result, a check date and a stop criterion written before you start. Opens in Excel and Google Sheets. The example rows are made up: delete them.",
    button: "Download the plan (CSV)",
    columns: agency.template.columns,
    examples: [
      ["EXAMPLE: contacting 50 accounts that match the ICP with a signal-based message produces first replies", "Build the list and send the first batch", "Example owner", "Replies", "Example target", "Example date", "Example: fewer replies than the target by the date means we rewrite the message", "", "Delete this row"],
      ["EXAMPLE: a weekly two-hour outreach slot keeps the sequence running", "Block the slot and assign an owner", "Example owner", "Accounts contacted per week", "Example target", "Example date", "Example: slot missed twice means we move it or change the owner", "", "Delete this row"],
    ],
  },

  questions: [
    {
      id: "icp_source",
      area: "icp",
      text: "Where does your picture of the ideal client come from?",
      options: [
        { value: "deals", label: "An analysis of my closed-won and closed-lost deals", score: 100 },
        { value: "interviews", label: "Conversations with my best clients about why they bought", score: 80 },
        { value: "experience", label: "My experience and a few wins", score: 45 },
        { value: "none", label: "I take whoever is interested", score: 15 },
      ],
    },
    {
      id: "icp_no",
      area: "icp",
      text: "Do you have written disqualifiers, meaning who you say no to?",
      options: [
        { value: "written", label: "Yes, written down and used when deciding who to contact", score: 100 },
        { value: "head", label: "In my head, not written down", score: 50 },
        { value: "none", label: "No, any prospect will do", score: 15 },
      ],
    },
    {
      id: "buyer",
      area: "targets",
      text: "How well do you know who to contact inside a target company?",
      options: [
        { value: "named", label: "A specific title and seniority, and I know who signs off", score: 100 },
        { value: "title", label: "A job title, but not who decides", score: 65 },
        { value: "dept", label: "A department only", score: 40 },
        { value: "whoever", label: "Whoever I can find", score: 15 },
      ],
    },
    {
      id: "ranking",
      area: "targets",
      text: "How do you decide which accounts to contact first?",
      options: [
        { value: "rules", label: "Written rules for fit and signals, and the list is ranked by them", score: 100 },
        { value: "handpicked", label: "I pick from my own judgement, the list is hand-picked", score: 60 },
        { value: "mind", label: "Whoever comes to mind", score: 30 },
        { value: "wait", label: "I do not pick: I wait for referrals and inbound", score: 15 },
      ],
    },
    {
      id: "list",
      area: "data",
      text: "Do you have a list of target accounts and contacts you could work from today?",
      options: [
        { value: "named", label: "Yes, accounts with a named contact and a reason for each", score: 100 },
        { value: "partial", label: "A partial list, some without contacts", score: 55 },
        { value: "head", label: "A few names in my head or in old messages", score: 25 },
        { value: "none", label: "No", score: 10 },
      ],
    },
    {
      id: "tracking",
      area: "data",
      text: "Where are outreach and replies recorded?",
      options: [
        { value: "one", label: "In one CRM or tracker, with a status and a next step for each prospect", score: 100 },
        { value: "partial", label: "Partly in a tool, partly in inboxes", score: 55 },
        { value: "dms", label: "Only in inboxes and DMs", score: 25 },
        { value: "none", label: "Not recorded", score: 10 },
      ],
    },
    {
      id: "reason",
      area: "message",
      text: "What does your first message say about why you are contacting this person?",
      options: [
        { value: "signal", label: "A specific thing about their company, such as a hire, a launch or a change", score: 100 },
        { value: "segment", label: "A reason that fits their group, but not them in particular", score: 65 },
        { value: "generic", label: "A general introduction about us", score: 30 },
        { value: "none", label: "I do not send first messages", score: 15 },
      ],
    },
    {
      id: "sequence",
      area: "message",
      text: "What happens when a prospect does not answer the first message?",
      options: [
        { value: "written", label: "A written sequence over more than one channel, with a polite exit at the end", score: 100 },
        { value: "email", label: "A written sequence on one channel", score: 70 },
        { value: "adhoc", label: "I follow up when I remember", score: 35 },
        { value: "none", label: "Nothing", score: 15 },
      ],
    },
    {
      id: "reply",
      area: "replies",
      text: "When a prospect replies, what happens?",
      options: [
        { value: "rule", label: "A named person answers within a working day, with qualifying questions and an agreed next step", score: 100 },
        { value: "some", label: "Someone answers, but there is no fixed rule", score: 55 },
        { value: "founder", label: "Whenever the founder sees it", score: 30 },
        { value: "norep", label: "I have not had replies to handle yet", score: 15 },
      ],
    },
    {
      id: "owner",
      area: "replies",
      text: "Who does the outreach work, and when?",
      options: [
        { value: "owned", label: "One person owns it, with a weekly slot in the calendar", score: 100 },
        { value: "shared", label: "It is shared with other work, whoever has time", score: 55 },
        { value: "founder", label: "The founder, when the pipeline gets thin", score: 30 },
        { value: "nobody", label: "Nobody", score: 10 },
      ],
    },
    {
      id: "numbers",
      area: "pipeline",
      text: "Do you know how many accounts were contacted, how many replied and how many meetings came from outreach last month?",
      options: [
        { value: "campaign", label: "Yes, by campaign or segment", score: 100 },
        { value: "rough", label: "Roughly, as a total", score: 55 },
        { value: "no", label: "No", score: 20 },
      ],
    },
    {
      id: "review",
      area: "pipeline",
      text: "Is there a routine to review outreach and change it?",
      options: [
        { value: "weekly", label: "A weekly review that ends with one decision to change", score: 100 },
        { value: "sometimes", label: "Occasionally, when something feels wrong", score: 50 },
        { value: "never", label: "No", score: 15 },
      ],
    },
  ],
};
