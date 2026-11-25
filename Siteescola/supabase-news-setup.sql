-- =====================================================================
-- NOTÍCIAS NO SUPABASE — Escola Edificar
-- Cole este arquivo inteiro no SQL Editor do Supabase e clique em RUN.
-- (Painel do Supabase → SQL Editor → New query → colar → Run)
-- Pode rodar mais de uma vez: ele recria a tabela de notícias do zero.
-- =====================================================================

-- 1) Tabela de notícias
drop table if exists public.news;
create table public.news (
  id bigint generated always as identity primary key,
  slug text not null unique,
  title text not null,
  date date not null,
  category text not null default 'Comunicados',
  icon text not null default 'bell',
  tone text not null default 'indigo',
  excerpt text not null default '',
  body jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

-- 2) Segurança (RLS): qualquer pessoa pode LER; só usuário logado pode ESCREVER
alter table public.news enable row level security;

create policy "leitura publica"
  on public.news for select
  using (true);

create policy "escrita apenas autenticado"
  on public.news for all
  to authenticated
  using (true)
  with check (true);

-- 3) Notícias atuais do site (importação inicial)
insert into public.news (slug, title, date, category, icon, tone, excerpt, body) values
(
  'matriculas-2027-passo-a-passo',
  'Matrículas 2027: conheça o passo a passo',
  '2026-10-05', 'Matrículas', 'graduation', 'indigo',
  'Visita, pré-matrícula, documentos e confirmação: veja como reservar a vaga do seu filho com tranquilidade.',
  '["As matrículas para o ano letivo de 2027 já estão abertas na Escola Edificar. Para facilitar a vida das famílias, organizamos o processo em quatro passos simples: visita, pré-matrícula, entrega de documentos e confirmação.","O primeiro passo é conhecer a escola. Na visita, você passa pelos espaços, conversa com a coordenação e esclarece dúvidas sobre a proposta pedagógica, a rotina e as etapas de ensino. O agendamento pode ser feito pelo site ou pelo WhatsApp da secretaria.","Depois, basta preencher a pré-matrícula, reunir a documentação e confirmar a vaga na secretaria. A lista completa de documentos está disponível na página de Matrículas."]'::jsonb
),
(
  'reuniao-de-pais-e-mestres',
  'Reunião de pais e mestres: confira a pauta',
  '2026-10-02', 'Comunicados', 'bell', 'blue',
  'Encontro com as famílias para um balanço do ano e orientações para o encerramento do ano letivo.',
  '["Está chegando o momento de conversar sobre o percurso dos nossos estudantes. A reunião de pais e mestres reunirá famílias, professores e coordenação para um balanço do ano e orientações para o encerramento do ano letivo.","Na pauta: acompanhamento da aprendizagem, organização das avaliações finais, informações sobre a rematrícula e os próximos passos para 2027.","A data e o horário estão no Calendário Escolar. Contamos com a presença de todos os responsáveis: a parceria entre escola e família é um dos alicerces do nosso trabalho."]'::jsonb
),
(
  'feira-de-ciencias',
  'Feira de Ciências reúne famílias e estudantes',
  '2026-09-26', 'Eventos', 'atom', 'teal',
  'Pequenos cientistas investigam, testam hipóteses e apresentam suas descobertas para toda a comunidade escolar.',
  '["A Feira de Ciências é um dos momentos mais aguardados do ano. Em equipes, os estudantes investigam perguntas, testam hipóteses e apresentam suas descobertas para colegas, professores e familiares.","Mais do que expor trabalhos, a feira valoriza o processo: pesquisar, errar, tentar de novo e comunicar ideias com clareza. É aprendizagem em ação.","As famílias estão convidadas a visitar os estandes e prestigiar os pequenos cientistas. Confira a data no Calendário Escolar."]'::jsonb
),
(
  'semana-da-leitura',
  'Semana da Leitura: imaginação em movimento',
  '2026-09-18', 'Projetos', 'book', 'coral',
  'Rodas de histórias, troca de livros e escrita criativa para despertar o prazer de ler.',
  '["Livros abertos, imaginação em movimento! Na Semana da Leitura, as turmas participam de rodas de histórias, trocas de livros, contações e atividades de escrita criativa.","A leitura é uma das portas mais importantes para o aprendizado em todas as áreas. Por isso, a escola incentiva o hábito de ler desde a Educação Infantil, com acesso a livros e momentos de leitura compartilhada.","Em casa, as famílias também podem participar: reserve alguns minutos do dia para ler com seu filho e conversar sobre a história."]'::jsonb
),
(
  'dicas-rotina-de-estudos',
  'Cinco dicas para criar uma rotina de estudos em casa',
  '2026-09-09', 'Dicas', 'lightbulb', 'gold',
  'Pequenos hábitos ajudam a criança a estudar com mais tranquilidade e autonomia.',
  '["Uma rotina simples ajuda a criança a estudar com mais tranquilidade e autonomia. Separamos cinco dicas para as famílias:",{"list":["Defina um horário fixo para as tarefas, de acordo com a rotina da casa.","Escolha um cantinho tranquilo e bem iluminado, com os materiais por perto.","Combine pausas curtas para descansar e beber água.","Acompanhe sem fazer pelo estudante: pergunte, incentive e valorize o esforço.","Mantenha contato com a escola e avise a coordenação sobre dificuldades."]},"Cada criança tem seu ritmo. Em caso de dúvidas, converse com o professor ou com a coordenação pedagógica."]'::jsonb
),
(
  'uniforme-e-material-escolar',
  'Uniforme e material escolar: orientações às famílias',
  '2026-08-28', 'Comunicados', 'shirt', 'green',
  'Reunimos as principais informações sobre uniforme, lista de material e identificação dos itens.',
  '["O início de cada ano letivo traz dúvidas sobre uniforme e material escolar. Reunimos as principais orientações para as famílias:",{"list":["Uniforme: camiseta com o emblema da escola e bermuda, calça ou saia azul-marinho.","Material escolar: a lista de cada etapa é divulgada pela secretaria no período de matrícula e rematrícula.","Identificação: escreva o nome do estudante em todos os itens (agasalho, garrafa, lancheira e materiais)."]},"Em caso de dúvidas, a secretaria atende de segunda a sexta. Fale conosco pelo WhatsApp ou pelo formulário de contato."]'::jsonb
);
