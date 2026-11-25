/*
  Conteúdo dinâmico do site: notícias, calendário escolar e perguntas frequentes.
  ATENÇÃO: o conteúdo abaixo é de EXEMPLO e deve ser substituído pelas informações oficiais da escola.
  - Para adicionar uma notícia, copie um bloco de "news" e altere id (sem espaços), datas e textos.
  - Para adicionar um evento, copie uma linha de "events". Use "end" apenas para períodos.
  - Em "body", cada texto é um parágrafo; use { list: [...] } para listas.
*/
window.EDIFICAR_DATA = {
  newsCategories: ['Matrículas', 'Comunicados', 'Eventos', 'Projetos', 'Dicas'],

  news: [
    {
      id: 'matriculas-2027-passo-a-passo',
      title: 'Matrículas 2027: conheça o passo a passo',
      date: '2026-10-05',
      category: 'Matrículas',
      icon: 'graduation',
      tone: 'indigo',
      excerpt: 'Visita, pré-matrícula, documentos e confirmação: veja como reservar a vaga do seu filho com tranquilidade.',
      body: [
        'As matrículas para o ano letivo de 2027 já estão abertas na Escola Edificar. Para facilitar a vida das famílias, organizamos o processo em quatro passos simples: visita, pré-matrícula, entrega de documentos e confirmação.',
        'O primeiro passo é conhecer a escola. Na visita, você passa pelos espaços, conversa com a coordenação e esclarece dúvidas sobre a proposta pedagógica, a rotina e as etapas de ensino. O agendamento pode ser feito pelo site ou pelo WhatsApp da secretaria.',
        'Depois, basta preencher a pré-matrícula, reunir a documentação e confirmar a vaga na secretaria. A lista completa de documentos está disponível na página de Matrículas.'
      ]
    },
    {
      id: 'reuniao-de-pais-e-mestres',
      title: 'Reunião de pais e mestres: confira a pauta',
      date: '2026-10-02',
      category: 'Comunicados',
      icon: 'bell',
      tone: 'blue',
      excerpt: 'Encontro com as famílias para um balanço do ano e orientações para o encerramento do ano letivo.',
      body: [
        'Está chegando o momento de conversar sobre o percurso dos nossos estudantes. A reunião de pais e mestres reunirá famílias, professores e coordenação para um balanço do ano e orientações para o encerramento do ano letivo.',
        'Na pauta: acompanhamento da aprendizagem, organização das avaliações finais, informações sobre a rematrícula e os próximos passos para 2027.',
        'A data e o horário estão no Calendário Escolar. Contamos com a presença de todos os responsáveis: a parceria entre escola e família é um dos alicerces do nosso trabalho.'
      ]
    },
    {
      id: 'feira-de-ciencias',
      title: 'Feira de Ciências reúne famílias e estudantes',
      date: '2026-09-26',
      category: 'Eventos',
      icon: 'atom',
      tone: 'teal',
      excerpt: 'Pequenos cientistas investigam, testam hipóteses e apresentam suas descobertas para toda a comunidade escolar.',
      body: [
        'A Feira de Ciências é um dos momentos mais aguardados do ano. Em equipes, os estudantes investigam perguntas, testam hipóteses e apresentam suas descobertas para colegas, professores e familiares.',
        'Mais do que expor trabalhos, a feira valoriza o processo: pesquisar, errar, tentar de novo e comunicar ideias com clareza. É aprendizagem em ação.',
        'As famílias estão convidadas a visitar os estandes e prestigiar os pequenos cientistas. Confira a data no Calendário Escolar.'
      ]
    },
    {
      id: 'semana-da-leitura',
      title: 'Semana da Leitura: imaginação em movimento',
      date: '2026-09-18',
      category: 'Projetos',
      icon: 'book',
      tone: 'coral',
      excerpt: 'Rodas de histórias, troca de livros e escrita criativa para despertar o prazer de ler.',
      body: [
        'Livros abertos, imaginação em movimento! Na Semana da Leitura, as turmas participam de rodas de histórias, trocas de livros, contações e atividades de escrita criativa.',
        'A leitura é uma das portas mais importantes para o aprendizado em todas as áreas. Por isso, a escola incentiva o hábito de ler desde a Educação Infantil, com acesso a livros e momentos de leitura compartilhada.',
        'Em casa, as famílias também podem participar: reserve alguns minutos do dia para ler com seu filho e conversar sobre a história.'
      ]
    },
    {
      id: 'dicas-rotina-de-estudos',
      title: 'Cinco dicas para criar uma rotina de estudos em casa',
      date: '2026-09-09',
      category: 'Dicas',
      icon: 'lightbulb',
      tone: 'gold',
      excerpt: 'Pequenos hábitos ajudam a criança a estudar com mais tranquilidade e autonomia.',
      body: [
        'Uma rotina simples ajuda a criança a estudar com mais tranquilidade e autonomia. Separamos cinco dicas para as famílias:',
        { list: [
          'Defina um horário fixo para as tarefas, de acordo com a rotina da casa.',
          'Escolha um cantinho tranquilo e bem iluminado, com os materiais por perto.',
          'Combine pausas curtas para descansar e beber água.',
          'Acompanhe sem fazer pelo estudante: pergunte, incentive e valorize o esforço.',
          'Mantenha contato com a escola e avise a coordenação sobre dificuldades.'
        ] },
        'Cada criança tem seu ritmo. Em caso de dúvidas, converse com o professor ou com a coordenação pedagógica.'
      ]
    },
    {
      id: 'uniforme-e-material-escolar',
      title: 'Uniforme e material escolar: orientações às famílias',
      date: '2026-08-28',
      category: 'Comunicados',
      icon: 'shirt',
      tone: 'green',
      excerpt: 'Reunimos as principais informações sobre uniforme, lista de material e identificação dos itens.',
      body: [
        'O início de cada ano letivo traz dúvidas sobre uniforme e material escolar. Reunimos as principais orientações para as famílias:',
        { list: [
          'Uniforme: camiseta com o emblema da escola e bermuda, calça ou saia azul-marinho.',
          'Material escolar: a lista de cada etapa é divulgada pela secretaria no período de matrícula e rematrícula.',
          'Identificação: escreva o nome do estudante em todos os itens (agasalho, garrafa, lancheira e materiais).'
        ] },
        'Em caso de dúvidas, a secretaria atende de segunda a sexta. Fale conosco pelo WhatsApp ou pelo formulário de contato.'
      ]
    }
  ],

  eventTypes: {
    feriado: 'Feriado',
    evento: 'Evento',
    reuniao: 'Reunião',
    avaliacao: 'Avaliações',
    letivo: 'Calendário letivo'
  },

  events: [
    { date: '2026-10-12', title: 'Nossa Senhora Aparecida', type: 'feriado', desc: 'Feriado nacional. Não haverá aula.' },
    { date: '2026-10-15', title: 'Dia do Professor', type: 'evento', desc: 'Homenagem aos educadores da escola.' },
    { date: '2026-11-02', title: 'Finados', type: 'feriado', desc: 'Feriado nacional. Não haverá aula.' },
    { date: '2026-11-09', end: '2026-11-13', title: 'Semana de avaliações', type: 'avaliacao', desc: 'Avaliações do período. Consulte o cronograma com o professor.' },
    { date: '2026-11-14', title: 'Feira de Ciências', type: 'evento', desc: 'Exposição dos projetos dos estudantes, com visitação das famílias.' },
    { date: '2026-11-15', title: 'Proclamação da República', type: 'feriado', desc: 'Feriado nacional.' },
    { date: '2026-11-20', title: 'Dia da Consciência Negra', type: 'feriado', desc: 'Feriado nacional. Não haverá aula.' },
    { date: '2026-11-21', title: 'Reunião de pais e mestres', type: 'reuniao', desc: 'Balanço do ano e orientações para o encerramento do ano letivo.' },
    { date: '2026-12-11', title: 'Encerramento do ano letivo', type: 'letivo', desc: 'Último dia de aula de 2026.' },
    { date: '2026-12-12', title: 'Confraternização de encerramento', type: 'evento', desc: 'Encontro de despedida com estudantes e famílias.' },
    { date: '2026-12-25', title: 'Natal', type: 'feriado', desc: 'Feriado nacional.' },

    { date: '2027-01-01', title: 'Confraternização Universal', type: 'feriado', desc: 'Feriado nacional.' },
    { date: '2027-01-04', end: '2027-01-29', title: 'Período de matrículas e rematrículas', type: 'letivo', desc: 'Atendimento na secretaria para entrega de documentos e confirmação de vagas.' },
    { date: '2027-02-01', title: 'Início do ano letivo 2027', type: 'letivo', desc: 'Boas-vindas aos estudantes e às famílias.' },
    { date: '2027-02-08', end: '2027-02-09', title: 'Carnaval (ponto facultativo)', type: 'feriado', desc: 'Não haverá aula.' },
    { date: '2027-03-06', title: 'Reunião de pais e mestres (1º encontro)', type: 'reuniao', desc: 'Apresentação da proposta do ano e das orientações de rotina.' },
    { date: '2027-03-26', title: 'Sexta-feira Santa', type: 'feriado', desc: 'Feriado nacional. Não haverá aula.' },
    { date: '2027-04-21', title: 'Tiradentes', type: 'feriado', desc: 'Feriado nacional. Não haverá aula.' },
    { date: '2027-05-01', title: 'Dia do Trabalho', type: 'feriado', desc: 'Feriado nacional.' },
    { date: '2027-05-27', title: 'Corpus Christi (ponto facultativo)', type: 'feriado', desc: 'Não haverá aula.' },
    { date: '2027-06-19', title: 'Festa da Família', type: 'evento', desc: 'Tarde de convivência com atividades para toda a família.' },
    { date: '2027-07-12', end: '2027-07-23', title: 'Recesso escolar de julho', type: 'letivo', desc: 'Período sem aulas.' },
    { date: '2027-07-26', title: 'Retorno às aulas', type: 'letivo', desc: 'Início do segundo semestre.' },
    { date: '2027-09-07', title: 'Independência do Brasil', type: 'feriado', desc: 'Feriado nacional. Não haverá aula.' },
    { date: '2027-10-12', title: 'Nossa Senhora Aparecida', type: 'feriado', desc: 'Feriado nacional. Não haverá aula.' },
    { date: '2027-10-15', title: 'Dia do Professor', type: 'evento', desc: 'Homenagem aos educadores da escola.' },
    { date: '2027-11-02', title: 'Finados', type: 'feriado', desc: 'Feriado nacional. Não haverá aula.' },
    { date: '2027-11-15', title: 'Proclamação da República', type: 'feriado', desc: 'Feriado nacional. Não haverá aula.' },
    { date: '2027-11-20', title: 'Dia da Consciência Negra', type: 'feriado', desc: 'Feriado nacional.' },
    { date: '2027-12-10', title: 'Encerramento do ano letivo 2027', type: 'letivo', desc: 'Último dia de aula de 2027.' },
    { date: '2027-12-25', title: 'Natal', type: 'feriado', desc: 'Feriado nacional.' }
  ],

  faq: [
    {
      q: 'Como faço para matricular meu filho?',
      a: 'Agende uma visita, faça a pré-matrícula, entregue os documentos na secretaria e confirme a vaga. O passo a passo completo está na página de Matrículas.'
    },
    {
      q: 'Quais documentos são necessários para a matrícula?',
      a: 'Certidão de nascimento ou RG e CPF do estudante, documentos do responsável (RG e CPF), comprovante de residência e, para estudantes vindos de outra escola, histórico escolar e declaração de transferência. A lista completa está na página de Matrículas.'
    },
    {
      q: 'Posso visitar a escola antes de decidir?',
      a: 'Sim! As visitas são bem-vindas e acontecem com agendamento. Você conhece os espaços, a rotina e conversa com a coordenação.'
    },
    {
      q: 'Como recebo os comunicados da escola?',
      a: 'Os avisos e eventos ficam disponíveis no site, nas páginas de Notícias e Calendário Escolar, além dos canais oficiais informados pela secretaria no ato da matrícula.'
    },
    {
      q: 'Como solicito declaração, histórico escolar ou transferência?',
      a: 'As solicitações são feitas na secretaria, presencialmente ou pelo WhatsApp. Na página Alunos e Famílias há atalhos que já abrem a conversa com a mensagem pronta.'
    },
    {
      q: 'Como falar com a coordenação pedagógica?',
      a: 'Entre em contato com a secretaria ou use o formulário da página Fale conosco para agendar um atendimento com a coordenação.'
    },
    {
      q: 'Os estudantes usam uniforme?',
      a: 'Sim. Consulte a secretaria para saber os modelos, os tamanhos disponíveis e onde adquirir.'
    }
  ]
};
