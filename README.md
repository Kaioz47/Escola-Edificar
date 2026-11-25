# 🏫 Site da Escola Edificar

> *Edificando saberes, construindo futuros.*

Site institucional da **Escola Edificar** (Ananindeua – PA), desenvolvido como **Projeto de Extensão do curso de Ciência da Computação (Unama)**. O objetivo é divulgar a escola e facilitar o acesso às informações por alunos, responsáveis e comunidade escolar.

O projeto é feito apenas com **HTML, CSS e JavaScript puros**: sem frameworks, sem instalação e sem etapa de build.

## ✨ Funcionalidades

- **Páginas institucionais:** início, a escola, etapas de ensino (Educação Infantil, Fundamental I e II), matrículas, alunos e famílias, contato e política de privacidade (LGPD).
- **Calendário escolar** com filtros por tipo de evento e download em `.ics`.
- **Notícias** com filtro por categoria e página de leitura.
- **Painel administrativo** (`admin.html`) com login, para a secretaria editar calendário e notícias sem mexer no código.
- **Formulários** (contato, pré-matrícula e agendamento de visita) que montam a mensagem e abrem o **WhatsApp** ou o e-mail do visitante. O site não armazena nenhum dado.
- **Acessibilidade:** link "Pular para o conteúdo", navegação por teclado, aumento/redução de texto, alto contraste, respeito a `prefers-reduced-motion` e contraste no padrão WCAG AA.
- **Resiliência:** se o banco na nuvem estiver fora do ar, o site usa automaticamente o conteúdo local de `assets/js/data.js`.

## 🛠️ Tecnologias

- HTML5, CSS3 e JavaScript (ES5+), sem dependências
- [Supabase](https://supabase.com) (PostgreSQL + Auth + RLS) para calendário e notícias
- Fonte Poppins hospedada localmente
- Ícones e ilustrações em SVG

## 🚀 Como executar

Não há nada para instalar. Basta clonar o repositório e abrir o `index.html` no navegador:

```bash
git clone https://github.com/<seu-usuario>/<seu-repositorio>.git
cd <seu-repositorio>
# abra o index.html (duplo clique) ou use um servidor local:
python -m http.server 8000
```

## 📄 Páginas

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Início: destaques, acesso rápido, proposta pedagógica, etapas, galeria, notícias e contato |
| `sobre.html` | A Escola: história, missão/visão/valores, proposta pedagógica e estrutura |
| `etapas.html` | Educação Infantil, Ensino Fundamental I e II |
| `matriculas.html` | Passo a passo, documentos, pré-matrícula e agendamento de visita |
| `familias.html` | Rotina, uniforme, solicitações na secretaria e perguntas frequentes |
| `calendario.html` | Calendário escolar com filtros e download `.ics` |
| `noticias.html` / `noticia.html` | Lista de notícias e página de leitura |
| `contato.html` | Canais de atendimento, localização e formulário |
| `privacidade.html` | Política de Privacidade (LGPD) |
| `admin.html` | Painel com login (não aparece no menu) |
| `404.html` | Página de erro |

## ✏️ Como atualizar o conteúdo

| O que mudar | Onde |
| --- | --- |
| Telefone, WhatsApp, e-mail, endereço, horários e redes sociais | `assets/js/site-config.js` (reflete em todas as páginas) |
| Eventos do calendário e notícias | `admin.html` (painel com login) ou direto nas tabelas `events` e `news` do Supabase |
| Perguntas frequentes e conteúdo de reserva | `assets/js/data.js` |
| Menu e rodapé | `assets/js/layout.js` |
| Textos de cada página | o arquivo `.html` correspondente |
| Cores e tipografia | variáveis no início de `assets/css/base.css` |

> ⚠️ **Importante:** contatos, notícias, datas e horários presentes no projeto são **exemplos** e devem ser revisados e substituídos pelas informações oficiais da escola antes da publicação.

## ☁️ Configuração do Supabase

1. Crie um projeto no [Supabase](https://supabase.com).
2. No **SQL Editor**, execute `supabase-setup.sql` (eventos) e `supabase-news-setup.sql` (notícias).
3. Em **Authentication → Users**, crie o usuário que vai acessar o `admin.html`.
4. Em `assets/js/calendar-cloud.js`, informe a URL do seu projeto e a chave **pública** (publishable).

**Segurança:** apenas a chave pública fica no código. As regras de RLS do banco permitem leitura para todos e escrita somente para usuários autenticados.

## 🌐 Publicação

Envie os arquivos para qualquer hospedagem de arquivos estáticos, como **GitHub Pages**, Netlify ou Vercel. O `404.html` é reconhecido automaticamente pela maioria dessas plataformas.

## 📁 Estrutura de pastas

```
├── index.html, sobre.html, ...   # páginas
├── admin.html                    # painel administrativo
├── supabase-setup.sql            # tabela de eventos + RLS
├── supabase-news-setup.sql       # tabela de notícias + RLS
└── assets/
    ├── css/                      # base.css, components.css, pages.css
    ├── js/                       # site-config, data, layout, main, calendar-cloud, sprite, art
    ├── fonts/                    # Poppins (local)
    └── img/                      # logotipo e favicons
```

## 🎓 Créditos

Projeto de Extensão · Ciência da Computação · Unama.
Textos, ilustrações, logotipo e código são originais.
