// DRAFT copy for the one-page offer. English and Portuguese. Not approved by Thais until she says so.

export type Lang = "en" | "pt";

export const BOOKING_URL = "https://calendly.com/loureiro-tf/new-meeting";

export type OfferCopy = {
  lang: string;
  locale: string;
  switchTo: string; // label of the button that switches to the other language
  eyebrow: string;
  title: string;
  intro: string;
  calcTitle: string;
  calcNote: string;
  fields: { clientValue: string; won: string; fromReferrals: string; want: string };
  errReferrals: string;
  referralLine: (from: number, won: number, pct: string) => string;
  gapLine: (gap: number, value: string) => string;
  noGapLine: string;
  sprintLine: (pct: string, clients: number, price: string, whole: boolean) => string;
  calcAssumption: string;
  sprintTitle: string;
  priceLine: string;
  deliverablesIntro: string;
  deliverables: string[];
  cta: string;
  ctaNote: string;
  privacy: string;
};

export const COPY: Record<Lang, OfferCopy> = {
  en: {
    lang: "en",
    locale: "en-US",
    switchTo: "Português",
    eyebrow: "For founders and owners whose business works",
    title: "Your referrals are good. There just aren't enough of them.",
    intro:
      "If most of your new clients come from word of mouth, growth is capped by how many people happen to recommend you. Put in your own numbers and see what that cap costs you.",
    calcTitle: "What is the gap worth?",
    calcNote: "Amounts in US dollars. Plain arithmetic on your numbers, nothing else.",
    fields: {
      clientValue: "What a new client pays you in their first year",
      won: "Clients you won in the last 12 months",
      fromReferrals: "How many of those came from referrals",
      want: "Clients you want to win in the next 12 months",
    },
    errReferrals: "Referrals can't be more than the clients you won.",
    referralLine: (from, won, pct) => `${from} of ${won} new clients (${pct}) came from referrals.`,
    gapLine: (gap, value) => `You want ${gap} more client${gap === 1 ? "" : "s"} a year than you won. At your numbers that is ${value} a year.`,
    noGapLine: "Your target is not above what you won last year. Raise it to see what the gap is worth.",
    sprintLine: (pct, clients, price, whole) =>
      whole
        ? `The sprint below costs ${price}. That is ${pct} of one new client's first-year value.`
        : `The sprint below costs ${price}. At your client value, ${clients} new clients cover it.`,
    calcAssumption: "Nothing is promised here: the sprint's job is to build the outbound motion that goes after this gap.",
    sprintTitle: "The 4-week sprint",
    priceLine: "$2,000 flat. 4 weeks.",
    deliverablesIntro: "On day 28 you have:",
    deliverables: [
      "A map of how clients reach you today (referrals, inbound, outbound), with the top leaks ranked from your real numbers",
      "A first outbound motion, set up and running: who to contact, what to say, and how it is tracked",
      "Rules so no inbound lead goes unworked: an owner and a next action for every lead, live in your CRM",
      "One working automation for the biggest manual task",
      "A 90-day plan with owners, check dates and measures",
    ],
    cta: "Book a call",
    ctaNote: "A short call to see if the sprint fits. No pitch deck.",
    privacy: "Your numbers stay in your browser. Nothing is sent or stored.",
  },
  pt: {
    lang: "pt-BR",
    locale: "pt-BR",
    switchTo: "English",
    eyebrow: "Para fundadores e donos de negócios que funcionam",
    title: "Suas indicações são boas. Só não são o bastante.",
    intro:
      "Se a maior parte dos seus clientes novos vem do boca a boca, seu crescimento tem um teto: quantas pessoas por acaso recomendam você. Coloque seus números e veja quanto esse teto custa.",
    calcTitle: "Quanto vale essa diferença?",
    calcNote: "Valores em dólares americanos. Só aritmética sobre os seus números, nada além.",
    fields: {
      clientValue: "Quanto um cliente novo paga a você no primeiro ano",
      won: "Clientes que você fechou nos últimos 12 meses",
      fromReferrals: "Quantos desses vieram de indicação",
      want: "Clientes que você quer fechar nos próximos 12 meses",
    },
    errReferrals: "As indicações não podem ser mais do que os clientes fechados.",
    referralLine: (from, won, pct) => `${from} de ${won} clientes novos (${pct}) vieram de indicação.`,
    gapLine: (gap, value) => `Você quer ${gap} cliente${gap === 1 ? "" : "s"} a mais por ano do que fechou. Com os seus números, isso é ${value} por ano.`,
    noGapLine: "Sua meta não está acima do que você fechou no último ano. Aumente a meta para ver quanto vale a diferença.",
    sprintLine: (pct, clients, price, whole) =>
      whole
        ? `O sprint abaixo custa ${price}. Isso é ${pct} do valor de primeiro ano de um cliente novo.`
        : `O sprint abaixo custa ${price}. Com o valor do seu cliente, ${clients} clientes novos cobrem o custo.`,
    calcAssumption: "Nada é prometido aqui: o trabalho do sprint é montar o outbound que vai atrás dessa diferença.",
    sprintTitle: "O sprint de 4 semanas",
    priceLine: "US$ 2.000 valor fixo. 4 semanas.",
    deliverablesIntro: "No dia 28 você tem:",
    deliverables: [
      "Um mapa de como os clientes chegam até você hoje (indicação, inbound, outbound), com os principais vazamentos ordenados a partir dos seus números reais",
      "Um primeiro movimento de outbound montado e rodando: quem contatar, o que dizer e como acompanhar",
      "Regras para que nenhum lead de inbound fique sem atendimento: um responsável e um próximo passo para cada lead, ativos no seu CRM",
      "Uma automação funcionando para a maior tarefa manual",
      "Um plano de 90 dias com responsáveis, datas de checagem e métricas",
    ],
    cta: "Agendar uma conversa",
    ctaNote: "Uma conversa curta para ver se o sprint faz sentido. Sem apresentação de vendas.",
    privacy: "Seus números ficam no seu navegador. Nada é enviado nem guardado.",
  },
};
