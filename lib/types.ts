// A path is plain data: profile, questions, advice and screen text. The engine in engine.ts never contains wording.

export type Option = { value: string; label: string; score: number };

export type Question = {
  id: string;
  area: string;
  text: string;
  options: Option[]; // real answers, strongest first
};

export type ContextQuestion = {
  id: string;
  text: string;
  options: { value: string; label: string }[];
};

export type Advice = {
  today: string; // something the person can do alone, 15 to 30 minutes
  quarter: string; // what to build this quarter and who implements it
  longTerm: string; // the structural view, 2-3 years
  money: string; // extra line shown to business owners
};

export type Area = { id: string; name: string; blurb: string; advice: Advice };

export type PathText = {
  lang: string;
  title: string;
  intro: string;
  start: string;
  next: string;
  back: string;
  seeResult: string;
  step: (n: number, total: number) => string;
  contextTitle: string;
  ownerQuestionId: string; // context question whose "owner" value switches on the money wording
  resultTitleOwner: string;
  resultTitleOperator: string;
  overall: string;
  areasTitle: string;
  bands: { low: string; mid: string; high: string };
  todayTitle: string;
  todayIntro: string;
  quarterTitle: string;
  quarterIntro: string;
  longTitle: string;
  longIntro: string;
  moneyLabel: string;
  allGood: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  restart: string;
  privacy: string;
  dontKnow: string;
  timeTitle: string; // asked on the intro screen when the path has shorter versions
  minutes: (n: number) => string;
};

export type Template = {
  filename: string;
  title: string;
  text: string;
  button: string;
  columns: string[];
  examples: string[][]; // clearly fictional rows, marked so the person deletes them
};

// A text document the person downloads (markdown). Optional: only some paths have one.
export type Kit = {
  filename: string;
  title: string;
  text: string;
  button: string;
  body: string;
};

// Plain arithmetic on the person's own numbers. Stages run in order; the last one is "won".
export type Calculator = {
  title: string;
  text: string;
  periodNote: string; // which period the counts cover
  stages: { id: string; label: string }[];
  ticketLabel: string;
  orderError: string; // shown when a later stage is larger than the one before it
  ratesTitle: string;
  rate: (from: string, to: string, pct: number) => string;
  weakest: (from: string, to: string, pct: number) => string;
  onePoint: (from: string, to: string, extraWins: number, value: number) => string;
  oneProject: (value: number) => string;
  assumption: string;
};

export type AuditPath = {
  id: string;
  text: PathText;
  context: ContextQuestion[];
  areas: Area[];
  questions: Question[];
  // Question ids asked in the shorter versions. The 15 minute version asks every question.
  lengths?: { 1: string[]; 5: string[] };
  template: Template;
  kit?: Kit;
  calculator?: Calculator;
};
