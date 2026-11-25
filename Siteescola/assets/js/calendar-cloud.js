/*
  Conexão do site com o Supabase (calendário escolar e notícias).
  - O site tenta buscar os dados da nuvem; se falhar, usa o conteúdo de data.js (reserva).
  - A chave abaixo é a chave PÚBLICA (publishable): é segura de expor no navegador.
    A proteção contra alterações fica nas regras (RLS) do banco de dados.
*/
window.EDIFICAR_CLOUD = (function () {
  'use strict';

  var SUPABASE_URL = 'https://oakhfziwqmjxyrglxnib.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_0R6lji7-nOsYT80GKFKw8Q_dGZVm9CW';

  var eventsPromise = null;
  var newsPromise = null;

  function getJson(path) {
    return fetch(SUPABASE_URL + path, {
      headers: { apikey: SUPABASE_KEY, Authorization: 'Bearer ' + SUPABASE_KEY }
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    });
  }

  if (window.fetch && window.Promise) {
    eventsPromise = getJson('/rest/v1/events?select=date,end_date,title,type,description&order=date.asc')
      .then(function (rows) {
        if (!Array.isArray(rows) || !rows.length) return null;
        return rows.map(function (row) {
          var ev = { date: row.date, title: row.title, type: row.type, desc: row.description || '' };
          if (row.end_date) ev.end = row.end_date;
          return ev;
        });
      })
      .catch(function () { return null; }); // offline/indisponível: o site usa o data.js

    newsPromise = getJson('/rest/v1/news?select=slug,title,date,category,icon,tone,excerpt,body&order=date.desc')
      .then(function (rows) {
        if (!Array.isArray(rows) || !rows.length) return null;
        return rows.map(function (row) {
          return {
            id: row.slug,
            title: row.title,
            date: row.date,
            category: row.category,
            icon: row.icon,
            tone: row.tone,
            excerpt: row.excerpt || '',
            body: Array.isArray(row.body) ? row.body : []
          };
        });
      })
      .catch(function () { return null; });
  }

  return { url: SUPABASE_URL, key: SUPABASE_KEY, events: eventsPromise, news: newsPromise };
}());
