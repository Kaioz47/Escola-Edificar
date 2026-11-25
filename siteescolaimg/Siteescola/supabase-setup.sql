-- =====================================================================
-- CONFIGURAÇÃO DO SUPABASE — Calendário da Escola Edificar
-- Cole este arquivo inteiro no SQL Editor do Supabase e clique em RUN.
-- (Painel do Supabase → SQL Editor → New query → colar → Run)
-- Pode rodar mais de uma vez sem problema: ele recria tudo do zero.
-- =====================================================================

-- 1) Tabela de eventos
drop table if exists public.events;
create table public.events (
  id bigint generated always as identity primary key,
  date date not null,
  end_date date,
  title text not null,
  type text not null default 'evento'
    check (type in ('feriado', 'evento', 'reuniao', 'avaliacao', 'letivo')),
  description text not null default '',
  created_at timestamptz not null default now(),
  check (end_date is null or end_date > date)
);

-- 2) Segurança (RLS): qualquer pessoa pode LER; só usuário logado pode ESCREVER
alter table public.events enable row level security;

create policy "leitura publica"
  on public.events for select
  using (true);

create policy "escrita apenas autenticado"
  on public.events for all
  to authenticated
  using (true)
  with check (true);

-- 3) Eventos atuais do site (importação inicial)
insert into public.events (date, end_date, title, type, description) values
('2026-10-12', null, 'Nossa Senhora Aparecida', 'feriado', 'Feriado nacional. Não haverá aula.'),
('2026-10-15', null, 'Dia do Professor', 'evento', 'Homenagem aos educadores da escola.'),
('2026-11-02', null, 'Finados', 'feriado', 'Feriado nacional. Não haverá aula.'),
('2026-11-09', '2026-11-13', 'Semana de avaliações', 'avaliacao', 'Avaliações do período. Consulte o cronograma com o professor.'),
('2026-11-14', null, 'Feira de Ciências', 'evento', 'Exposição dos projetos dos estudantes, com visitação das famílias.'),
('2026-11-15', null, 'Proclamação da República', 'feriado', 'Feriado nacional.'),
('2026-11-20', null, 'Dia da Consciência Negra', 'feriado', 'Feriado nacional. Não haverá aula.'),
('2026-11-21', null, 'Reunião de pais e mestres', 'reuniao', 'Balanço do ano e orientações para o encerramento do ano letivo.'),
('2026-12-11', null, 'Encerramento do ano letivo', 'letivo', 'Último dia de aula de 2026.'),
('2026-12-12', null, 'Confraternização de encerramento', 'evento', 'Encontro de despedida com estudantes e famílias.'),
('2026-12-25', null, 'Natal', 'feriado', 'Feriado nacional.'),
('2027-01-01', null, 'Confraternização Universal', 'feriado', 'Feriado nacional.'),
('2027-01-04', '2027-01-29', 'Período de matrículas e rematrículas', 'letivo', 'Atendimento na secretaria para entrega de documentos e confirmação de vagas.'),
('2027-02-01', null, 'Início do ano letivo 2027', 'letivo', 'Boas-vindas aos estudantes e às famílias.'),
('2027-02-08', '2027-02-09', 'Carnaval (ponto facultativo)', 'feriado', 'Não haverá aula.'),
('2027-03-06', null, 'Reunião de pais e mestres (1º encontro)', 'reuniao', 'Apresentação da proposta do ano e das orientações de rotina.'),
('2027-03-26', null, 'Sexta-feira Santa', 'feriado', 'Feriado nacional. Não haverá aula.'),
('2027-04-21', null, 'Tiradentes', 'feriado', 'Feriado nacional. Não haverá aula.'),
('2027-05-01', null, 'Dia do Trabalho', 'feriado', 'Feriado nacional.'),
('2027-05-27', null, 'Corpus Christi (ponto facultativo)', 'feriado', 'Não haverá aula.'),
('2027-06-19', null, 'Festa da Família', 'evento', 'Tarde de convivência com atividades para toda a família.'),
('2027-07-12', '2027-07-23', 'Recesso escolar de julho', 'letivo', 'Período sem aulas.'),
('2027-07-26', null, 'Retorno às aulas', 'letivo', 'Início do segundo semestre.'),
('2027-09-07', null, 'Independência do Brasil', 'feriado', 'Feriado nacional. Não haverá aula.'),
('2027-10-12', null, 'Nossa Senhora Aparecida', 'feriado', 'Feriado nacional. Não haverá aula.'),
('2027-10-15', null, 'Dia do Professor', 'evento', 'Homenagem aos educadores da escola.'),
('2027-11-02', null, 'Finados', 'feriado', 'Feriado nacional. Não haverá aula.'),
('2027-11-15', null, 'Proclamação da República', 'feriado', 'Feriado nacional. Não haverá aula.'),
('2027-11-20', null, 'Dia da Consciência Negra', 'feriado', 'Feriado nacional.'),
('2027-12-10', null, 'Encerramento do ano letivo 2027', 'letivo', 'Último dia de aula de 2027.'),
('2027-12-25', null, 'Natal', 'feriado', 'Feriado nacional.');

-- Pronto! Depois de rodar, crie o usuário do admin em:
-- Authentication → Users → Add user → e-mail + senha (marque "Auto Confirm User")
