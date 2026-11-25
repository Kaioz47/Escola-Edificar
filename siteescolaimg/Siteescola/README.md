# Site da Escola Edificar

Site institucional da **Escola Edificar**, desenvolvido como Projeto de Extensão (Ciência da Computação – Unama) para divulgar a escola e facilitar o acesso às informações por alunos, responsáveis e comunidade escolar.

A organização das seções e o estilo (cabeçalho fixo, destaques em carrossel, faixa azul, abas de etapas, galeria, contato e rodapé) se inspiram no site do Colégio Lato Sensu. Textos, ilustrações, logotipo e código são originais.

## Como visualizar

Abra o arquivo `index.html` no navegador (duplo clique). Não há instalação nem etapa de build: o site é feito apenas com HTML, CSS e JavaScript.

## Páginas

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Início: destaques, acesso rápido, história, proposta pedagógica, etapas, galeria, notícias e contato |
| `sobre.html` | A Escola: história, missão/visão/valores, proposta pedagógica e estrutura (abas) |
| `etapas.html` | Educação Infantil, Ensino Fundamental I e II |
| `matriculas.html` | Passo a passo, documentos, pré-matrícula e agendamento de visita |
| `familias.html` | Alunos e Famílias: rotina, uniforme, solicitações na secretaria e perguntas frequentes |
| `calendario.html` | Calendário escolar com filtros e download em `.ics` |
| `noticias.html` / `noticia.html` | Lista de notícias com filtro e página de leitura |
| `contato.html` | Canais de atendimento, localização e formulário |
| `privacidade.html` | Política de Privacidade (LGPD) |
| `404.html` | Página de erro |
| `admin.html` | Painel com login para editar o calendário e as notícias direto no banco (Supabase); não aparece no menu |

## Como atualizar o conteúdo

| O que mudar | Onde |
| --- | --- |
| Telefone, WhatsApp, e-mail, endereço, horários e redes sociais | `assets/js/site-config.js` (reflete em todas as páginas) |
| Datas e eventos do calendário | `admin.html` (painel com login; salva no Supabase e publica na hora) ou direto na tabela `events` do Supabase |
| Notícias | `admin.html` (aba Notícias) ou direto na tabela `news` do Supabase |
| Perguntas frequentes | `assets/js/data.js` |
| Menu e rodapé | `assets/js/layout.js` |
| Textos de cada página | o arquivo `.html` correspondente |
| Cores e tipografia | variáveis no início de `assets/css/base.css` |
| Fotos reais | troque o `<svg>` ilustrativo da seção por `<img src="assets/img/foto.jpg" alt="descrição">` |

> **Importante:** contatos, notícias, datas do calendário, horários e demais textos são **exemplos** e devem ser revisados e substituídos pelas informações oficiais da escola antes da publicação. Feriados nacionais já estão corretos para 2026 e 2027.

## Formulários

O site não tem servidor próprio. Ao enviar um formulário, a mensagem é montada com os dados preenchidos e aberta no **WhatsApp** (número definido em `site-config.js`) ou no aplicativo de **e-mail** do visitante. Nenhum dado é armazenado pelo site.

## Calendário e notícias na nuvem (Supabase)

Os eventos do calendário e as notícias são lidos de um banco **Supabase** (`assets/js/calendar-cloud.js`). Se a nuvem estiver indisponível, o site usa automaticamente o conteúdo de `assets/js/data.js` como reserva.

- **Configuração inicial:** rode os arquivos `supabase-setup.sql` (eventos) e `supabase-news-setup.sql` (notícias) no SQL Editor do Supabase e crie o usuário do admin em *Authentication → Users*.
- **Edição:** a secretaria acessa `admin.html`, faz login e edita eventos e notícias; as mudanças aparecem no site na hora.
- **Segurança:** a chave usada no site é a pública (publishable). As regras RLS do banco permitem leitura para todos e escrita apenas para usuários autenticados.

## Acessibilidade

- Estrutura semântica, link "Pular para o conteúdo", navegação completa por teclado e foco visível.
- Botão flutuante com **aumento/redução do texto** e **alto contraste** (preferências salvas no navegador).
- Respeita `prefers-reduced-motion`; o carrossel pode ser pausado.
- Contraste de cores no padrão WCAG AA; validado com o W3C Nu Html Checker e com o axe-core (sem violações).

## Publicação

Envie todos os arquivos para qualquer hospedagem de arquivos estáticos (GitHub Pages, Netlify, Vercel ou hospedagem tradicional). O arquivo `404.html` é usado automaticamente pela maioria dessas plataformas.

## Estrutura de pastas

```
index.html, sobre.html, ...   páginas
assets/css/                   base.css, components.css, pages.css
assets/js/                    site-config.js, data.js, layout.js, main.js, sprite.js (ícones), art.js (ilustrações)
assets/fonts/                 Poppins (hospedada localmente)
assets/img/                   logo.svg, favicon.svg
```
