// DRAFT for Thais to review. All wording, options and scores are provisional until approved.
// Rule: no statistics or benchmarks here. "I don't know" always scores below any real answer.
// The pattern comes from a real engagement, anonymised: no client, lead or agency data.
import type { AuditPath } from "../lib/types.ts";
import { agencyKit } from "./agency-kit.ts";

const money = (n: number) => Math.round(n).toLocaleString("en-US");

export const agency: AuditPath = {
  id: "agency",
  text: {
    lang: "en",
    title: "Where leads stall in a founder-led agency",
    intro:
      "Answer 12 quick questions about what happens to a lead from the moment it shows interest. You get a result showing where leads stall, a calculator that puts the leak in your own numbers, and a qualification and follow-up kit to start using today.",
    start: "Start",
    next: "Continue",
    back: "Back",
    seeResult: "See my result",
    step: (n, total) => `Step ${n} of ${total}`,
    contextTitle: "A little about you",
    ownerQuestionId: "role",
    resultTitleOwner: "Where your leads stall and what it costs you",
    resultTitleOperator: "Where leads stall and where time is lost",
    overall: "overall score",
    areasTitle: "Score by area",
    bands: { low: "Needs attention", mid: "In progress", high: "Well structured" },
    todayTitle: "Today",
    todayIntro: "What you can do yourself, with no new tool.",
    quarterTitle: "This quarter",
    quarterIntro: "What to build and how to implement it.",
    longTitle: "Next 2 to 3 years",
    longIntro: "The structural view of how leads become clients.",
    moneyLabel: "If you own the business",
    allGood: "Every area is well structured. There is no clear weak point to work on right now.",
    ctaTitle: "Want to talk it through?",
    ctaText:
      "The quarter and long-term parts are where I can help most: designing the qualification process, connecting your tools to a CRM and turning the plan into hypotheses with stop criteria.",
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
        { value: "owner", label: "I am the founder or an owner of the agency" },
        { value: "operator", label: "I run the day-to-day (sales, account or operations)" },
      ],
    },
    {
      id: "team",
      text: "How many people work in the agency?",
      options: [
        { value: "1-5", label: "1 to 5" },
        { value: "6-15", label: "6 to 15" },
        { value: "16-40", label: "16 to 40" },
        { value: "40+", label: "More than 40" },
      ],
    },
    {
      id: "source",
      text: "Where do most of your clients come from today?",
      options: [
        { value: "referral", label: "Referrals and word of mouth" },
        { value: "content", label: "Content, website or social" },
        { value: "paid", label: "Paid ads" },
        { value: "outbound", label: "Outbound" },
        { value: "mixed", label: "A mix, no clear main source" },
      ],
    },
    {
      id: "closer",
      text: "Who handles sales conversations today?",
      options: [
        { value: "founder", label: "Mostly the founder" },
        { value: "shared", label: "The founder and someone else" },
        { value: "team", label: "A sales person or team" },
      ],
    },
  ],

  areas: [
    {
      id: "capture",
      name: "Leads you already have",
      blurb: "Whether the leads you paid for or earned are on a list you can act on.",
      advice: {
        today:
          "Export the leads from your email tool or form from the last few months. Next to each name, write one of three things: contact now, contact later, or not a fit. An opens report does not tell you who to call; this list does.",
        quarter:
          "Connect your email tool to one CRM or list with the same fields for every lead: source, what they did, owner, status and next step. Make a rule that a lead does not exist until it is on that list.",
        longTerm:
          "One record of every lead from first touch to client, so which sources produce your best clients is something you read, not something you remember.",
        money:
          "Leads that are paid for and then left sitting are the cheapest pipeline you have: the cost to reach them is already spent.",
      },
    },
    {
      id: "qualification",
      name: "Qualification and decision access",
      blurb: "How you decide who deserves a conversation, and who has to be in the room before a proposal.",
      advice: {
        today:
          "Write down five criteria that make a lead worth a conversation, based on your best clients. Add one more rule: before any proposal, you know who signs off and who holds the budget.",
        quarter:
          "Turn the criteria into a short checklist used on every lead, with disqualifiers written down. Add a gate: no proposal goes out until the decision maker has been in a conversation or has agreed to join the review.",
        longTerm:
          "Qualification that is the same whoever does it, so your pipeline holds opportunities that can close instead of proposals waiting for someone who never saw them.",
        money:
          "A proposal that reaches only the person who liked it, and not the person who pays, is work that often ends without an answer.",
      },
    },
    {
      id: "firstcontact",
      name: "First contact",
      blurb: "How a lead who has no referral behind you is approached, and how fast.",
      advice: {
        today:
          "Write the one sentence that gives you a real reason to contact a lead (what they did, and why it made you reach out). Use it to write a first message to the three best leads on your list.",
        quarter:
          "Write a short outline for the first conversation: your reason for contacting, two questions about their situation, a check on who decides, and one agreed next step with a date. Agree who has these conversations.",
        longTerm:
          "A first contact that builds trust on purpose, so leads that arrive without a referral are treated as a process and not as an awkward favour you have to ask.",
        money:
          "If trust only arrives with referrals, your growth is capped by how many referrals you receive. Marketing leads need a process that builds what the referral brings for free.",
      },
    },
    {
      id: "followup",
      name: "Follow-up",
      blurb: "What happens when a lead or a proposal does not move on its own.",
      advice: {
        today:
          "List every lead and proposal that has gone quiet and write the date of your last contact next to each. Send a short, specific follow-up to the three most recent.",
        quarter:
          "Design a follow-up cadence in advance: how many touches, how far apart, what each one contains, and a polite exit message at the end. Schedule it so it runs without relying on your mood that week.",
        longTerm:
          "Follow-up that runs on schedule, stops when the lead replies, and closes the loop politely when they do not.",
        money:
          "When follow-up depends on the founder feeling ready, it happens late or not at all, and the lead you paid to bring in cools down.",
      },
    },
    {
      id: "conversion",
      name: "Conversion and lost deals",
      blurb: "Whether you can see where leads become calls, proposals and clients, and where they stop.",
      advice: {
        today:
          "Use the calculator below with your own numbers for the last quarter. Then take your last proposals that did not close and write, for each, whether the decision maker was ever in a conversation with you.",
        quarter:
          "Count four numbers every month: leads, first conversations, proposals and clients won. Require a recorded reason whenever a proposal is marked lost, and look for the reason that repeats.",
        longTerm:
          "A funnel picture by source and by offer, built from your own history, so you decide where to put effort from facts.",
        money:
          "Without your own conversion numbers you cannot tell whether the cheaper way to grow is more leads or fewer losses at the stage where deals stop.",
      },
    },
    {
      id: "pipeline",
      name: "Pipeline and dependence on you",
      blurb: "Whether you can read the pipeline in minutes, and whether it moves when you are away.",
      advice: {
        today:
          "For each open opportunity, write one line: the stage and the next step with a date. An opportunity with no dated next step is a flag.",
        quarter:
          "Set simple stages (new, qualified, conversation held, proposal, won, lost) with a rule to move between them, and review the pipeline on a fixed day each week. Hand the first part (reply, qualification, scheduling) to someone else.",
        longTerm:
          "A documented sales process you can hand over, so growth is not limited by the founder's calendar.",
        money:
          "If you cannot see next quarter's pipeline, you find out about a gap when it is already a gap in revenue.",
      },
    },
  ],

  calculator: {
    title: "What this costs, in your own numbers",
    text: "Enter what happened in the last quarter and watch the numbers update as you go. This is plain arithmetic on your numbers: nothing is compared to other companies and nothing is sent anywhere.",
    periodNote: "Counts for the last 3 months.",
    stages: [
      { id: "leads", label: "Leads that showed interest" },
      { id: "convos", label: "First conversations held" },
      { id: "proposals", label: "Proposals sent" },
      { id: "won", label: "Clients won" },
    ],
    ticketLabel: "Average value of a project you win",
    orderError: "A later stage cannot be larger than the one before it. Check the numbers.",
    ratesTitle: "How far leads get",
    rate: (from, to, pct) => `${from} → ${to}: ${pct}%`,
    weakest: (from, to, pct) =>
      `Your lowest step is from "${from}" to "${to}" (${pct}%). That is the first place to look, not a verdict: a low step can also be normal for your business.`,
    onePoint: (from, to, extraWins, value) =>
      `If the step from "${from}" to "${to}" gained one percentage point, and the later steps stayed as they are, that is about ${extraWins.toFixed(2)} more clients a quarter, worth about ${money(value)} a year.`,
    oneProject: (value) =>
      `If this costs you a single project each quarter, that is ${money(value)} a year (in the currency you entered).`,
    assumption: "Estimates assume every project is worth your average and later steps keep their current rate.",
  },

  kit: {
    filename: "qualification-and-follow-up-kit.md",
    title: "Your qualification and follow-up kit",
    text: "A qualification checklist that includes decision access before any proposal, an outline for the first conversation, a follow-up cadence with polite exits, and how to work through the leads you already paid for. A text file you can paste into your notes or CRM.",
    button: "Download the kit (Markdown)",
    body: agencyKit,
  },

  template: {
    filename: "90-day-plan.csv",
    title: "Your 90-day plan as testable hypotheses",
    text: "Each row is a hypothesis with an expected result, a check date and a stop criterion written before you start. Opens in Excel and Google Sheets. The example rows are made up: delete them.",
    button: "Download the plan (CSV)",
    columns: [
      "Hypothesis (if we do X, then Y)",
      "Action",
      "Owner",
      "Number it moves",
      "Expected result",
      "Check date",
      "Stop criterion",
      "Result",
      "Decision (keep, change, stop)",
    ],
    examples: [
      ["EXAMPLE: a follow-up cadence on last quarter's leads produces first conversations", "Build the cadence and start with 20 leads", "Example owner", "First conversations held", "Example target", "Example date", "Example: fewer than the target by the date means we review it", "", "Delete this row"],
      ["EXAMPLE: requiring decision access before a proposal reduces proposals that go unanswered", "Add the gate to the checklist", "Example owner", "Proposals answered", "Example target", "Example date", "Example: no change by the date means we review it", "", "Delete this row"],
    ],
  },

  questions: [
    {
      id: "lead_places",
      area: "capture",
      text: "Where are your leads recorded?",
      options: [
        { value: "one_list", label: "Every channel goes into one list or CRM, with status and next step", score: 100 },
        { value: "most", label: "Most are in one place, some stay in inboxes or DMs", score: 60 },
        { value: "tool_only", label: "Mainly in an email tool that shows opens and clicks", score: 35 },
        { value: "none", label: "I don't keep a record", score: 15 },
      ],
    },
    {
      id: "paid_leads",
      area: "capture",
      text: "Looking at leads you already have, can you say today who you should contact, when and about what?",
      options: [
        { value: "list", label: "Yes, I have a ranked list with a reason for each", score: 100 },
        { value: "some", label: "I could pick a few from memory", score: 50 },
        { value: "no", label: "No, they are a list of names", score: 15 },
      ],
    },
    {
      id: "criteria",
      area: "qualification",
      text: "How do you decide whether a lead is worth a conversation?",
      options: [
        { value: "written", label: "Written criteria based on real clients, used on every lead", score: 100 },
        { value: "gut", label: "I know it when I see it, but it is not written", score: 55 },
        { value: "everyone", label: "I talk to whoever replies", score: 25 },
      ],
    },
    {
      id: "decision_access",
      area: "qualification",
      text: "Before you send a proposal, do you know who decides and who controls the budget, and have they been in a conversation with you?",
      options: [
        { value: "rule", label: "Yes, it is a rule: no proposal without it", score: 100 },
        { value: "usually", label: "Usually, but not always", score: 55 },
        { value: "rarely", label: "Rarely: I send it to the person I spoke with", score: 20 },
      ],
    },
    {
      id: "first_contact",
      area: "firstcontact",
      text: "How do you approach a lead who has no referral behind you?",
      options: [
        { value: "process", label: "A defined approach with a reason to contact and a first-conversation outline", score: 100 },
        { value: "improvise", label: "I improvise each time", score: 50 },
        { value: "hesitate", label: "I hold back because it feels invasive", score: 25 },
        { value: "wait", label: "I wait for them to come to me", score: 15 },
      ],
    },
    {
      id: "first_touch_time",
      area: "firstcontact",
      text: "After a lead shows interest, how long until someone first contacts them?",
      options: [
        { value: "tracked", label: "Within a set time that I track", score: 100 },
        { value: "days", label: "Within days, but I don't track it", score: 60 },
        { value: "weeks", label: "Often weeks", score: 25 },
        { value: "varies", label: "Very uneven", score: 15 },
      ],
    },
    {
      id: "no_reply_lead",
      area: "followup",
      text: "What happens to a lead who got your message but did not answer?",
      options: [
        { value: "cadence", label: "A defined cadence runs, with a set number of touches and a polite exit", score: 100 },
        { value: "sometimes", label: "I follow up sometimes, when I remember", score: 50 },
        { value: "nothing", label: "Nothing, it goes quiet", score: 15 },
      ],
    },
    {
      id: "proposal_followup",
      area: "followup",
      text: "What happens after you send a proposal?",
      options: [
        { value: "scheduled", label: "A follow-up is scheduled before I send it", score: 100 },
        { value: "if_remember", label: "I follow up if I remember", score: 50 },
        { value: "wait", label: "I wait for them to come back", score: 20 },
      ],
    },
    {
      id: "rate_known",
      area: "conversion",
      text: "Do you know how many leads became conversations, proposals and clients last quarter?",
      options: [
        { value: "tracked", label: "Yes, from a record I keep", score: 100 },
        { value: "estimate", label: "I have a rough idea", score: 50 },
        { value: "no", label: "No", score: 15 },
      ],
    },
    {
      id: "proposal_death",
      area: "conversion",
      text: "Do you know at which stage deals stop, and why?",
      options: [
        { value: "recorded", label: "Yes, the stage and the reason are recorded for each", score: 100 },
        { value: "some", label: "I know for some of them", score: 55 },
        { value: "no", label: "No, they just disappear", score: 15 },
      ],
    },
    {
      id: "pipeline_view",
      area: "pipeline",
      text: "Can you see every open opportunity, its stage and its next step, in one place?",
      options: [
        { value: "yes", label: "Yes, in one view I review every week", score: 100 },
        { value: "partly", label: "Partly: some in a tool, some in my head", score: 50 },
        { value: "no", label: "No", score: 15 },
      ],
    },
    {
      id: "founder_away",
      area: "pipeline",
      text: "If you were away for two weeks, would new leads still be handled and moved forward?",
      options: [
        { value: "yes", label: "Yes, the process is written and someone owns it", score: 100 },
        { value: "partly", label: "Partly, someone covers the basics", score: 55 },
        { value: "no", label: "No, it would stop", score: 15 },
      ],
    },
  ],
};
