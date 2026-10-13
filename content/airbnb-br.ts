// RASCUNHO para a Thais revisar. Textos, opções e notas são provisórios até serem aprovados.
// Regra: nenhuma estatística ou benchmark aqui. "Ainda não sei" sempre vale menos que qualquer resposta real.
// O padrão vem de um caso real, anonimizado: nenhum dado de pessoa, prédio ou hóspede.
import type { AuditPath } from "../lib/types.ts";

export const airbnbBr: AuditPath = {
  id: "airbnb-br",
  text: {
    lang: "pt-BR",
    title: "Diagnóstico da operação de Airbnb",
    intro:
      "Responda 10 perguntas rápidas sobre como você cuida de hóspedes e prédios. Você recebe um diagnóstico de onde se perde tempo e onde há risco de erro, com o que fazer hoje, neste trimestre e nos próximos anos.",
    start: "Começar",
    next: "Continuar",
    back: "Voltar",
    seeResult: "Ver meu diagnóstico",
    step: (n, total) => `Etapa ${n} de ${total}`,
    contextTitle: "Um pouco sobre você",
    ownerQuestionId: "papel",
    resultTitleOwner: "Onde seu dinheiro e seu tempo escapam",
    resultTitleOperator: "Onde se perde tempo e onde há risco de erro",
    overall: "nota geral",
    areasTitle: "Nota por área",
    bands: { low: "Precisa de atenção", mid: "Em construção", high: "Bem estruturado" },
    todayTitle: "Hoje",
    todayIntro: "O que você mesmo(a) consegue fazer, sem ferramenta nova.",
    quarterTitle: "Neste trimestre",
    quarterIntro: "O que montar e como implementar.",
    longTitle: "Nos próximos 2 a 3 anos",
    longIntro: "A visão estrutural da operação.",
    moneyLabel: "Para quem é dono(a) do negócio",
    allGood: "Todas as áreas ficaram bem estruturadas. Não há um ponto fraco claro para atacar agora.",
    ctaTitle: "Quer conversar sobre isso?",
    ctaText:
      "As partes de trimestre e de longo prazo são onde mais posso ajudar: desenhar o fluxo, montar as integrações e implementar com você.",
    ctaButton: "Agendar uma conversa",
    restart: "Refazer o diagnóstico",
    privacy: "Nada do que você responde é enviado ou guardado. O diagnóstico roda inteiro no seu navegador.",
    dontKnow: "Ainda não sei",
  },

  context: [
    {
      id: "papel",
      text: "Qual é o seu papel?",
      options: [
        { value: "owner", label: "Sou dono(a) ou sócio(a) da empresa que administra os Airbnbs" },
        { value: "operator", label: "Eu opero o dia a dia (gestor(a) ou equipe)" },
      ],
    },
    {
      id: "apartamentos",
      text: "Quantos apartamentos você gerencia?",
      options: [
        { value: "1-5", label: "1 a 5" },
        { value: "6-15", label: "6 a 15" },
        { value: "16-30", label: "16 a 30" },
        { value: "30+", label: "Mais de 30" },
      ],
    },
    {
      id: "predios",
      text: "Em quantos prédios?",
      options: [
        { value: "1-2", label: "1 ou 2" },
        { value: "3-5", label: "3 a 5" },
        { value: "6-10", label: "6 a 10" },
        { value: "10+", label: "Mais de 10" },
      ],
    },
    {
      id: "anuncios",
      text: "De quem são os anúncios?",
      options: [
        { value: "own", label: "Meus" },
        { value: "cohost", label: "De terceiros (co-host)" },
        { value: "both", label: "Os dois" },
      ],
    },
  ],

  areas: [
    {
      id: "resposta",
      name: "Resposta ao hóspede",
      blurb: "Quão rápido você responde e o que acontece com quem não reserva na hora.",
      advice: {
        today:
          "Escreva três respostas prontas (disponibilidade, valor e regras da casa) e salve no celular para responder em minutos. Anote o horário da próxima consulta que chegar e quanto você levou para responder.",
        quarter:
          "Defina uma regra de tempo de resposta e quem responde quando você não pode. Junte as mensagens de todos os anúncios em um só lugar e crie um retorno automático para a consulta que não fecha.",
        longTerm:
          "Um atendimento que responde rápido e retoma quem não reservou, sem depender de você estar com o celular na mão.",
        money:
          "Uma consulta sem resposta a tempo pode ser uma reserva que foi para outro anúncio. Vale contar quantas consultas por mês não viram reserva.",
      },
    },
    {
      id: "documentos",
      name: "Documentos dos hóspedes",
      blurb: "Como o documento de cada hóspede chega até você.",
      advice: {
        today:
          "Logo na confirmação da reserva, mande uma mensagem pedindo o documento de todos os hóspedes, com prazo. Deixe esse texto salvo para reaproveitar.",
        quarter:
          "Monte um fluxo de coleta com lembrete automático e uma lista diária das reservas dos próximos dias com documento pendente.",
        longTerm:
          "Coleta sem cobrança manual: o sistema pede, lembra, confere a qualidade da foto e segura a reserva até estar completa.",
        money:
          "Cada cobrança manual é tempo seu que não vira receita, e cada documento que falta na hora é risco de o hóspede ficar barrado na portaria.",
      },
    },
    {
      id: "mapa",
      name: "Mapa de prédios e apartamentos",
      blurb: "Onde está registrado como cada apartamento e cada prédio funciona.",
      advice: {
        today:
          "Faça uma planilha com uma linha por apartamento: número, prédio, nome exato do anúncio, canal da portaria e o que o prédio exige receber.",
        quarter:
          "Transforme a planilha na fonte única da operação, com uma pessoa responsável por mantê-la atualizada e um campo de “como enviar” por prédio.",
        longTerm:
          "Um cadastro vivo que alimenta o envio, o relatório e a equipe, para que ninguém precise lembrar de cabeça como cada prédio funciona.",
        money:
          "Se o mapa só existe na sua cabeça, crescer o número de apartamentos significa crescer o seu trabalho no mesmo ritmo.",
      },
    },
    {
      id: "envio",
      name: "Envio aos prédios",
      blurb: "Como os dados do hóspede chegam à portaria ou ao gerente.",
      advice: {
        today:
          "Escreva um modelo de mensagem por prédio, sempre com o número do apartamento logo no início, e use sempre o mesmo modelo.",
        quarter:
          "Padronize o envio por prédio (canal, formato e horário) e registre cada envio com data e destino.",
        longTerm:
          "Envio com checagem automática, previsível para a portaria e sem depender da sua memória.",
        money: "Repetir o mesmo envio à mão para cada prédio, todo dia, é tempo que não volta.",
      },
    },
    {
      id: "troca",
      name: "Risco de troca e exceções",
      blurb: "O que evita o hóspede errado no apartamento errado, e o que cobre cancelamentos.",
      advice: {
        today:
          "Antes de cada envio, confira: nome do hóspede, nome exato do anúncio e número do apartamento. Quando houver duas reservas no mesmo prédio no mesmo dia, pare e confirme as duas.",
        quarter:
          "Crie uma regra escrita para o dia com duas reservas no mesmo prédio e um aviso padrão para cancelamentos e mudanças de data.",
        longTerm:
          "Checagens automáticas que seguram o envio quando algo não bate e chamam você só para a exceção.",
        money:
          "Um hóspede no apartamento errado ou barrado na portaria pode virar avaliação ruim, reembolso ou uma ida sua até o prédio.",
      },
    },
    {
      id: "visao",
      name: "Visão do dia e dependência",
      blurb: "Se você enxerga a operação inteira e se ela anda sem você.",
      advice: {
        today:
          "No fim do dia, escreva três listas: enviado, pendente e precisa de atenção. Repita por uma semana para ver o que costuma travar.",
        quarter:
          "Gere esse resumo todos os dias, no mesmo horário e no mesmo canal, e defina quem pode assumir se você estiver fora.",
        longTerm:
          "Uma operação documentada que roda sem você e avisa só do que exige uma decisão sua.",
        money: "Se tudo depende de você, o limite de crescimento do negócio é o seu tempo.",
      },
    },
  ],

  questions: [
    {
      id: "tempo_resposta",
      area: "resposta",
      text: "Quanto tempo leva para responder uma consulta ou mensagem nova de um possível hóspede?",
      options: [
        { value: "minutos", label: "Minutos, e tenho uma regra definida", score: 100 },
        { value: "horas", label: "Algumas horas", score: 60 },
        { value: "quando_vejo", label: "Quando eu vejo a mensagem", score: 30 },
        { value: "varia", label: "Depende muito do dia", score: 15 },
      ],
    },
    {
      id: "nao_fecha",
      area: "resposta",
      text: "O que acontece com a consulta que não vira reserva na hora?",
      options: [
        { value: "followup", label: "Tenho um retorno definido para essas consultas", score: 100 },
        { value: "as_vezes", label: "Às vezes eu retomo, quando lembro", score: 50 },
        { value: "nada", label: "Fica sem retorno", score: 15 },
      ],
    },
    {
      id: "coleta_docs",
      area: "documentos",
      text: "Como você coleta o documento de todos os hóspedes de uma reserva?",
      options: [
        { value: "fluxo", label: "Tenho um fluxo definido, com lembrete automático", score: 100 },
        { value: "cobro", label: "Cobro um a um no chat", score: 60 },
        { value: "predio_pede", label: "Só recebo quando o prédio pede", score: 30 },
        { value: "sem_controle", label: "Não tenho controle", score: 15 },
      ],
    },
    {
      id: "docs_pendentes",
      area: "documentos",
      text: "Você sabe, a qualquer momento, quais reservas dos próximos dias estão com documento pendente?",
      options: [
        { value: "lista", label: "Sim, tenho uma lista atualizada todo dia", score: 100 },
        { value: "quando_lembro", label: "Verifico quando lembro", score: 50 },
        { value: "predio_cobra", label: "Descubro quando o prédio cobra", score: 15 },
      ],
    },
    {
      id: "mapa_registro",
      area: "mapa",
      text: "Onde está registrado qual apartamento pertence a qual prédio, com o canal e o formato que cada prédio exige?",
      options: [
        { value: "planilha", label: "Em uma planilha ou sistema, atualizado", score: 100 },
        { value: "espalhado", label: "Está anotado, mas espalhado", score: 50 },
        { value: "cabeca", label: "Só na minha cabeça e no histórico do WhatsApp", score: 15 },
      ],
    },
    {
      id: "envio_predios",
      area: "envio",
      text: "Como os dados do hóspede chegam à portaria ou ao gerente do prédio?",
      options: [
        { value: "padrao", label: "Envio padronizado, com checagem", score: 100 },
        { value: "mao_igual", label: "Eu encaminho na mão, sempre do mesmo jeito", score: 65 },
        { value: "cada_um", label: "Cada prédio é de um jeito e eu me lembro de cabeça", score: 35 },
        { value: "ja_falhou", label: "Já esqueci ou atrasei um envio", score: 15 },
      ],
    },
    {
      id: "troca_apto",
      area: "troca",
      text: "O que garante que o hóspede certo vai para o apartamento certo, principalmente com duas reservas no mesmo prédio no mesmo dia?",
      options: [
        { value: "regra", label: "Uma conferência por regra, com o número do apartamento em toda mensagem", score: 100 },
        { value: "memoria", label: "Eu confiro de memória", score: 40 },
        { value: "nada", label: "Não há conferência", score: 15 },
      ],
    },
    {
      id: "cancelamento",
      area: "troca",
      text: "Se uma reserva é cancelada ou muda de data depois do envio, como o prédio fica sabendo?",
      options: [
        { value: "aviso", label: "Existe um aviso definido", score: 100 },
        { value: "lembro", label: "Eu aviso quando lembro", score: 50 },
        { value: "depois", label: "Só descubro depois", score: 15 },
      ],
    },
    {
      id: "visao_diaria",
      area: "visao",
      text: "Você tem uma visão diária do que foi enviado, do que está pendente e do que exige sua atenção?",
      options: [
        { value: "relatorio", label: "Sim, um resumo diário", score: 100 },
        { value: "chat", label: "Vejo no chat quando posso", score: 50 },
        { value: "nao", label: "Não tenho", score: 15 },
      ],
    },
    {
      id: "semana_fora",
      area: "visao",
      text: "Se você ficasse uma semana sem acesso ao celular, a operação de hóspedes e prédios continuaria?",
      options: [
        { value: "sim", label: "Sim, está documentada ou delegada", score: 100 },
        { value: "parte", label: "Em parte, com alguém de apoio", score: 55 },
        { value: "nao", label: "Não", score: 15 },
      ],
    },
  ],
};
