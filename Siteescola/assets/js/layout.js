/*
  Layout compartilhado: cabeçalho, rodapé, botão de WhatsApp e widget de acessibilidade.
  Este arquivo é carregado duas vezes por página (data-part="header" no início do <body> e
  data-part="footer" no final), o que evita "saltos" de layout e mantém um único ponto de edição do menu.
*/
(function () {
  'use strict';

  var SITE = window.SITE || {};
  var script = document.currentScript;
  var part = script ? script.getAttribute('data-part') : '';
  var page = document.body ? document.body.getAttribute('data-page') || '' : '';

  function digits(value) { return String(value || '').replace(/\D/g, ''); }
  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function addressLine() {
    var a = SITE.address || {};
    return a.street + ' – ' + a.district + ', ' + a.city + '/' + a.state + ' · CEP ' + a.zip;
  }

  var Util = window.SiteUtil = {
    esc: esc,
    digits: digits,
    addressLine: addressLine,
    telHref: function () { return 'tel:+55' + digits(SITE.phone); },
    mailHref: function (subject, body) {
      var q = [];
      if (subject) q.push('subject=' + encodeURIComponent(subject));
      if (body) q.push('body=' + encodeURIComponent(body));
      return 'mailto:' + SITE.email + (q.length ? '?' + q.join('&') : '');
    },
    waHref: function (text) {
      return 'https://wa.me/' + digits(SITE.whatsapp) + (text ? '?text=' + encodeURIComponent(text) : '');
    },
    mapsHref: function () {
      return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(addressLine());
    },
    storage: {
      get: function (key) { try { return window.localStorage.getItem(key); } catch (e) { return null; } },
      set: function (key, value) { try { window.localStorage.setItem(key, value); } catch (e) { /* armazenamento indisponível */ } }
    }
  };

  function icon(id, cls) {
    return '<svg class="icon' + (cls ? ' ' + cls : '') + '" aria-hidden="true" focusable="false"><use href="#' + id + '"/></svg>';
  }

  function brand(extra) {
    return '<a class="brand' + (extra ? ' ' + extra : '') + '" href="index.html" aria-label="' + esc(SITE.name) + ' – página inicial">' +
      '<img class="brand__mark" src="assets/img/logo-edificar.png" alt="" width="48" height="48">' +
      '<span class="brand__text"><span class="brand__top">Escola</span><span class="brand__name">Edificar</span></span></a>';
  }

  function applyA11yPreferences() {
    var root = document.documentElement;
    root.classList.add('js');
    var scale = parseInt(Util.storage.get('edificar:font') || '0', 10);
    if (isNaN(scale)) scale = 0;
    root.style.fontSize = (100 + scale * 12.5) + '%';
    if (Util.storage.get('edificar:contrast') === 'high') root.setAttribute('data-contrast', 'high');
  }

  function buildHeader() {
    var sprite = '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">' +
      (window.SPRITE_ICONS || '') + (window.SPRITE_ART || '') + '</svg>';

    var links = [
      ['home', 'index.html', 'Início'],
      ['sobre', 'sobre.html', 'A Escola'],
      ['etapas', 'etapas.html', 'Etapas de Ensino'],
      ['familias', 'familias.html', 'Alunos e Famílias'],
      ['calendario', 'calendario.html', 'Calendário'],
      ['noticias', 'noticias.html', 'Notícias'],
      ['contato', 'contato.html', 'Contato']
    ];
    var items = links.map(function (l) {
      return '<li><a href="' + l[1] + '" data-nav="' + l[0] + '">' + l[2] + '</a></li>';
    }).join('');

    var header = '<header class="site-header" id="topo"><div class="container site-header__inner">' +
      brand() +
      '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="menu-principal">' +
        '<span class="sr-only">Abrir menu</span>' + icon('i-menu', 'icon--open') + icon('i-x', 'icon--close') +
      '</button>' +
      '<nav class="primary-nav" id="menu-principal" aria-label="Menu principal"><ul>' + items +
        '<li class="primary-nav__cta"><a class="btn btn--primary btn--sm" href="matriculas.html" data-nav="matriculas">Matrículas ' + esc(SITE.enrollmentYear) + '</a></li>' +
      '</ul></nav>' +
    '</div></header><div class="nav-backdrop" hidden></div>';

    document.body.insertAdjacentHTML('afterbegin', sprite);
    var anchor = script;
    anchor.insertAdjacentHTML('beforebegin', header);

    var current = page === 'noticia' ? 'noticias' : page;
    var active = document.querySelector('#menu-principal a[data-nav="' + current + '"]');
    if (active) active.setAttribute('aria-current', 'page');
  }

  function socialLinks() {
    var s = SITE.social || {};
    var defs = [['instagram', 'Instagram'], ['facebook', 'Facebook'], ['youtube', 'YouTube']];
    return defs.filter(function (d) { return s[d[0]]; }).map(function (d) {
      return '<li><a href="' + esc(s[d[0]]) + '" target="_blank" rel="noopener noreferrer" aria-label="' + d[1] + ' da ' + esc(SITE.name) + ' (abre em nova aba)">' +
        icon('i-' + d[0]) + '</a></li>';
    }).join('');
  }

  function buildFooter() {
    var year = new Date().getFullYear();
    var credit = SITE.credit ? '<p class="site-footer__credit">' + esc(SITE.credit) + '</p>' : '';
    var social = socialLinks();

    var footer = '<footer class="site-footer"><div class="container">' +
      '<div class="site-footer__grid">' +
        '<div class="site-footer__brand">' + brand('brand--light') +
          '<p>' + esc(SITE.tagline) + '</p>' +
          '<ul class="footer-contact">' +
            '<li>' + icon('i-phone') + '<a href="' + Util.telHref() + '">' + esc(SITE.phone) + '</a></li>' +
            '<li>' + icon('i-mail') + '<a href="' + Util.mailHref() + '">' + esc(SITE.email) + '</a></li>' +
            '<li>' + icon('i-pin') + '<span>' + esc(addressLine()) + '</span></li>' +
          '</ul>' +
        '</div>' +
        '<nav aria-labelledby="ft-sobre"><h2 class="footer-title" id="ft-sobre">Sobre a Escola</h2><ul>' +
          '<li><a href="sobre.html#historia">Nossa história</a></li>' +
          '<li><a href="sobre.html#proposta">Proposta pedagógica</a></li>' +
          '<li><a href="sobre.html#estrutura">Estrutura</a></li>' +
        '</ul></nav>' +
        '<nav aria-labelledby="ft-etapas"><h2 class="footer-title" id="ft-etapas">Etapas do Ensino</h2><ul>' +
          '<li><a href="etapas.html#infantil">Educação Infantil</a></li>' +
          '<li><a href="etapas.html#fundamental-1">Ensino Fundamental I</a></li>' +
          '<li><a href="etapas.html#fundamental-2">Ensino Fundamental II</a></li>' +
        '</ul></nav>' +
        '<nav aria-labelledby="ft-info"><h2 class="footer-title" id="ft-info">Fique por Dentro</h2><ul>' +
          '<li><a href="noticias.html">Notícias</a></li>' +
          '<li><a href="calendario.html">Calendário escolar</a></li>' +
          '<li><a href="familias.html">Alunos e Famílias</a></li>' +
          '<li><a href="matriculas.html">Matrículas</a></li>' +
          '<li><a href="contato.html">Fale conosco</a></li>' +
        '</ul></nav>' +
      '</div>' +
      '<div class="site-footer__bottom">' +
        '<p>© ' + year + ' ' + esc(SITE.name) + '. Todos os direitos reservados. <span class="sep" aria-hidden="true">|</span> <a href="privacidade.html">Política de Privacidade</a> <span class="sep" aria-hidden="true">|</span> <a href="admin.html">Acesso restrito</a></p>' +
        (social ? '<ul class="social">' + social + '</ul>' : '') +
      '</div>' + credit +
    '</div></footer>';

    var waText = 'Olá! Vim pelo site da ' + SITE.name + ' e gostaria de mais informações.';
    var floating = '<aside class="floating" aria-label="Atalhos de contato e acessibilidade"><a class="wa-float" href="' + Util.waHref(waText) + '" target="_blank" rel="noopener noreferrer" aria-label="Fale com a gente pelo WhatsApp (abre em nova aba)">' +
      icon('i-whatsapp') + '<span>Fale com a gente!</span></a>' +
      '<div class="a11y" data-a11y-widget>' +
        '<button class="a11y__toggle" type="button" aria-expanded="false" aria-controls="painel-acessibilidade">' +
          icon('i-access') + '<span class="sr-only">Opções de acessibilidade</span></button>' +
        '<div class="a11y__panel" id="painel-acessibilidade" role="group" aria-label="Opções de acessibilidade" hidden>' +
          '<p class="a11y__title">Acessibilidade</p>' +
          '<div class="a11y__row">' +
            '<button type="button" data-a11y="font-dec" aria-label="Diminuir tamanho do texto">A−</button>' +
            '<button type="button" data-a11y="font-reset" aria-label="Restaurar tamanho do texto">A</button>' +
            '<button type="button" data-a11y="font-inc" aria-label="Aumentar tamanho do texto">A+</button>' +
          '</div>' +
          '<button type="button" class="a11y__wide" data-a11y="contrast" aria-pressed="false">' + icon('i-contrast') + 'Alto contraste</button>' +
          '<button type="button" class="a11y__wide a11y__wide--reset" data-a11y="reset">Restaurar padrões</button>' +
        '</div>' +
      '</div></aside>';

    script.insertAdjacentHTML('beforebegin', footer + floating);
  }

  applyA11yPreferences();
  if (part === 'header') buildHeader();
  if (part === 'footer') buildFooter();
}());
