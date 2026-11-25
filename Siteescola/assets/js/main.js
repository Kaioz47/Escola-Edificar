/*
  Comportamentos do site da Escola Edificar.
  Cada módulo é isolado: se um falhar, os demais continuam funcionando.
*/
(function () {
  'use strict';

  var SITE = window.SITE || {};
  var Util = window.SiteUtil || {};
  var DATA = window.EDIFICAR_DATA || { news: [], events: [], faq: [], eventTypes: {}, newsCategories: [] };
  var esc = Util.esc || function (s) { return String(s); };
  var reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function parseDate(iso) { return new Date(iso + 'T12:00:00'); }
  function todayIso() { var d = new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function fmtDate(iso, opts) { return parseDate(iso).toLocaleDateString('pt-BR', opts || { day: 'numeric', month: 'long', year: 'numeric' }); }
  function icon(id, cls) { return '<svg class="icon' + (cls ? ' ' + cls : '') + '" aria-hidden="true" focusable="false"><use href="#' + id + '"/></svg>'; }

  /* Dados institucionais (data-site / data-href) --------------------------------- */
  function hydrateSite() {
    var a = SITE.address || {};
    var hours = SITE.hours || {};
    var values = {
      name: SITE.name,
      tagline: SITE.tagline,
      year: SITE.enrollmentYear,
      phone: SITE.phone,
      whatsapp: SITE.whatsappLabel,
      email: SITE.email,
      address: Util.addressLine && Util.addressLine(),
      street: a.street,
      district: a.district,
      city: a.city + '/' + a.state,
      'hours-secretaria': hours.secretaria,
      'hours-visitas': hours.visitas
    };
    $$('[data-site]').forEach(function (el) {
      var v = values[el.getAttribute('data-site')];
      if (v != null) el.textContent = v;
    });

    $$('[data-href]').forEach(function (el) {
      var key = el.getAttribute('data-href');
      var href = '';
      if (key === 'tel') href = Util.telHref();
      else if (key === 'mail') href = Util.mailHref(el.getAttribute('data-subject'), el.getAttribute('data-body'));
      else if (key === 'wa') href = Util.waHref(el.getAttribute('data-wa-text'));
      else if (key === 'maps') href = Util.mapsHref();
      else if (SITE.social && key in SITE.social) href = SITE.social[key];
      if (href) el.setAttribute('href', href); else el.hidden = true;
    });
  }

  /* Cabeçalho ------------------------------------------------------------------------ */
  function initHeader() {
    var header = $('.site-header');
    if (!header) return;
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 24); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    var toggle = $('.nav-toggle', header);
    var nav = $('#menu-principal');
    var backdrop = $('.nav-backdrop');
    if (!toggle || !nav) return;

    function setOpen(open, returnFocus) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      var label = $('.sr-only', toggle);
      if (label) label.textContent = open ? 'Fechar menu' : 'Abrir menu';
      nav.classList.toggle('is-open', open);
      document.documentElement.classList.toggle('nav-open', open);
      if (backdrop) backdrop.hidden = !open;
      if (!open && returnFocus) toggle.focus();
    }

    toggle.addEventListener('click', function () { setOpen(toggle.getAttribute('aria-expanded') !== 'true'); });
    if (backdrop) backdrop.addEventListener('click', function () { setOpen(false); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) setOpen(false, true);
    });
    if (window.matchMedia) {
      var mq = window.matchMedia('(min-width: 1100px)');
      var onChange = function (e) { if (e.matches) setOpen(false); };
      if (mq.addEventListener) mq.addEventListener('change', onChange); else if (mq.addListener) mq.addListener(onChange);
    }

    // Com texto ampliado o menu pode não caber em uma linha: nesse caso usa o layout compacto (hambúrguer).
    function fitNav() {
      var root = document.documentElement;
      var inner = $('.site-header__inner', header);
      var wasCompact = root.classList.contains('nav-compact');
      var wide = !!(window.matchMedia && window.matchMedia('(min-width: 1100px)').matches);
      root.classList.remove('nav-compact');
      if (wide && inner.scrollWidth > inner.clientWidth + 1) root.classList.add('nav-compact');
      if (wide && wasCompact !== root.classList.contains('nav-compact')) setOpen(false);
    }
    var fitTimer = null;
    window.addEventListener('resize', function () { window.clearTimeout(fitTimer); fitTimer = window.setTimeout(fitNav, 120); });
    document.addEventListener('edificar:fontchange', fitNav);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitNav);
    fitNav();
  }

  /* Widget de acessibilidade ------------------------------------------------------------ */
  function initA11y() {
    var box = $('[data-a11y-widget]');
    if (!box) return;
    var root = document.documentElement;
    var toggle = $('.a11y__toggle', box);
    var panel = $('.a11y__panel', box);
    var contrastBtn = $('[data-a11y="contrast"]', box);
    var scale = parseInt(Util.storage.get('edificar:font') || '0', 10) || 0;

    function applyScale() {
      scale = Math.max(-1, Math.min(3, scale));
      root.style.fontSize = (100 + scale * 12.5) + '%';
      Util.storage.set('edificar:font', String(scale));
      document.dispatchEvent(new Event('edificar:fontchange'));
    }
    function applyContrast(on) {
      if (on) root.setAttribute('data-contrast', 'high'); else root.removeAttribute('data-contrast');
      contrastBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
      Util.storage.set('edificar:contrast', on ? 'high' : 'normal');
    }
    function setPanel(open, returnFocus) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      panel.hidden = !open;
      if (!open && returnFocus) toggle.focus();
    }

    contrastBtn.setAttribute('aria-pressed', root.getAttribute('data-contrast') === 'high' ? 'true' : 'false');
    toggle.addEventListener('click', function () { setPanel(panel.hidden); });
    box.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-a11y]');
      if (!btn) return;
      var action = btn.getAttribute('data-a11y');
      if (action === 'font-inc') { scale += 1; applyScale(); }
      else if (action === 'font-dec') { scale -= 1; applyScale(); }
      else if (action === 'font-reset') { scale = 0; applyScale(); }
      else if (action === 'contrast') { applyContrast(root.getAttribute('data-contrast') !== 'high'); }
      else if (action === 'reset') { scale = 0; applyScale(); applyContrast(false); }
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) setPanel(false, true); });
    document.addEventListener('click', function (e) { if (!panel.hidden && !box.contains(e.target)) setPanel(false); });
  }

  /* Abas ----------------------------------------------------------------------------------- */
  function initTabs() {
    $$('[data-tabs]').forEach(function (root) {
      var tabs = $$('[role="tab"]', root);
      var panels = tabs.map(function (t) { return document.getElementById(t.getAttribute('aria-controls')); });
      var useHash = root.hasAttribute('data-tabs-hash');

      function activate(index, focus) {
        tabs.forEach(function (t, j) {
          var on = j === index;
          t.setAttribute('aria-selected', on ? 'true' : 'false');
          t.tabIndex = on ? 0 : -1;
          if (panels[j]) { panels[j].classList.toggle('is-active', on); panels[j].hidden = !on; }
        });
        if (focus) tabs[index].focus();
      }
      function fromHash() {
        var h = window.location.hash.slice(1);
        if (!h) return -1;
        for (var i = 0; i < tabs.length; i++) {
          if (tabs[i].getAttribute('data-hash') === h) return i;
        }
        return -1;
      }

      tabs.forEach(function (tab, i) {
        tab.addEventListener('click', function () {
          activate(i);
          if (useHash && tab.getAttribute('data-hash') && window.history.replaceState) {
            window.history.replaceState(null, '', '#' + tab.getAttribute('data-hash'));
          }
        });
        tab.addEventListener('keydown', function (e) {
          var n = tabs.length, next = null;
          if (e.key === 'ArrowRight') next = (i + 1) % n;
          else if (e.key === 'ArrowLeft') next = (i - 1 + n) % n;
          else if (e.key === 'Home') next = 0;
          else if (e.key === 'End') next = n - 1;
          if (next !== null) { e.preventDefault(); activate(next, true); }
        });
      });

      var start = 0;
      if (useHash) {
        var idx = fromHash();
        if (idx > -1) {
          start = idx;
          window.setTimeout(function () { root.scrollIntoView({ block: 'start' }); }, 60);
        }
        window.addEventListener('hashchange', function () {
          var k = fromHash();
          if (k > -1) { activate(k); root.scrollIntoView({ block: 'start' }); }
        });
      }
      activate(start);
    });
  }

  /* Slider principal ---------------------------------------------------------------------------- */
  function initSlider() {
    var root = $('[data-slider]');
    if (!root) return;
    var viewport = $('.hero__slides', root);
    var slides = $$('.hero__slide', root);
    if (slides.length < 2) return;

    var current = 0;
    var timer = null;
    var userPaused = reduceMotion;
    var hovering = false;

    var dots = document.createElement('div');
    dots.className = 'hero__dots';
    dots.innerHTML = slides.map(function (_, n) {
      return '<button type="button" class="hero__dot" aria-label="Ir para o destaque ' + (n + 1) + ' de ' + slides.length + '"></button>';
    }).join('') + '<button type="button" class="hero__pause"></button>';
    root.appendChild(dots);

    var prev = document.createElement('button');
    prev.type = 'button'; prev.className = 'hero__arrow hero__arrow--prev';
    prev.setAttribute('aria-label', 'Destaque anterior');
    prev.innerHTML = icon('i-chevron-left');
    var next = document.createElement('button');
    next.type = 'button'; next.className = 'hero__arrow hero__arrow--next';
    next.setAttribute('aria-label', 'Próximo destaque');
    next.innerHTML = icon('i-chevron-right');
    root.appendChild(prev); root.appendChild(next);

    var dotBtns = $$('.hero__dot', dots);
    var pauseBtn = $('.hero__pause', dots);

    function renderPause() {
      pauseBtn.innerHTML = icon(userPaused ? 'i-play' : 'i-pause', 'icon--solid');
      pauseBtn.setAttribute('aria-label', userPaused ? 'Retomar rotação automática' : 'Pausar rotação automática');
    }
    function show(n) {
      current = (n + slides.length) % slides.length;
      slides.forEach(function (s, k) {
        var on = k === current;
        s.classList.toggle('is-active', on);
        s.setAttribute('aria-hidden', on ? 'false' : 'true');
      });
      dotBtns.forEach(function (d, k) { d.setAttribute('aria-current', k === current ? 'true' : 'false'); });
    }
    function stop() { if (timer) { window.clearInterval(timer); timer = null; } viewport.setAttribute('aria-live', 'polite'); }
    function start() {
      stop();
      if (userPaused || hovering || document.hidden) return;
      viewport.setAttribute('aria-live', 'off');
      timer = window.setInterval(function () { show(current + 1); }, 7000);
    }

    slides.forEach(function (s, k) {
      s.setAttribute('role', 'group');
      s.setAttribute('aria-roledescription', 'slide');
      s.setAttribute('aria-label', (k + 1) + ' de ' + slides.length);
    });
    root.setAttribute('aria-roledescription', 'carousel');

    dotBtns.forEach(function (d, k) { d.addEventListener('click', function () { show(k); start(); }); });
    prev.addEventListener('click', function () { show(current - 1); start(); });
    next.addEventListener('click', function () { show(current + 1); start(); });
    pauseBtn.addEventListener('click', function () { userPaused = !userPaused; renderPause(); start(); });
    root.addEventListener('mouseenter', function () { hovering = true; stop(); });
    root.addEventListener('mouseleave', function () { hovering = false; start(); });
    root.addEventListener('focusin', function () { stop(); });
    root.addEventListener('focusout', function () { start(); });
    document.addEventListener('visibilitychange', start);
    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { show(current - 1); start(); }
      else if (e.key === 'ArrowRight') { show(current + 1); start(); }
    });

    var startX = null;
    viewport.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') startX = e.clientX; });
    viewport.addEventListener('pointerup', function (e) {
      if (startX === null) return;
      var dx = e.clientX - startX;
      startX = null;
      if (Math.abs(dx) > 50) { show(current + (dx < 0 ? 1 : -1)); start(); }
    });
    viewport.addEventListener('pointercancel', function () { startX = null; });

    renderPause();
    show(0);
    start();
  }

  /* Galeria horizontal -------------------------------------------------------------------------------- */
  function initCarousel() {
    $$('[data-carousel]').forEach(function (root) {
      var track = $('.gallery__track', root);
      if (!track) return;
      function scrollBy(dir) {
        var step = Math.max(track.clientWidth * 0.8, 240);
        track.scrollBy({ left: dir * step, behavior: reduceMotion ? 'auto' : 'smooth' });
      }
      var prev = $('[data-carousel-prev]', root);
      var next = $('[data-carousel-next]', root);
      if (prev) prev.addEventListener('click', function () { scrollBy(-1); });
      if (next) next.addEventListener('click', function () { scrollBy(1); });
    });
  }

  /* Notícias ----------------------------------------------------------------------------------------------- */
  function sortedNews() {
    return DATA.news.slice().sort(function (a, b) { return b.date.localeCompare(a.date); });
  }
  function newsCard(n) {
    return '<li><article class="news-card tone-' + esc(n.tone) + '">' +
      '<div class="news-card__thumb" aria-hidden="true">' + icon('i-' + n.icon) + '</div>' +
      '<div class="news-card__body">' +
        '<div class="news-card__meta"><span class="tag">' + esc(n.category) + '</span><time datetime="' + esc(n.date) + '">' + fmtDate(n.date) + '</time></div>' +
        '<h3><a href="noticia.html?id=' + encodeURIComponent(n.id) + '">' + esc(n.title) + '</a></h3>' +
        '<p>' + esc(n.excerpt) + '</p>' +
        '<span class="news-card__more" aria-hidden="true">Ler notícia ' + icon('i-arrow-right') + '</span>' +
      '</div></article></li>';
  }
  function renderNewsList(list, items) {
    list.innerHTML = items.length ? items.map(newsCard).join('') : '<li class="empty-state">Nenhuma notícia encontrada nesta categoria.</li>';
  }
  function renderArticle(root) {
    var id = new URLSearchParams(window.location.search).get('id');
    var n = DATA.news.filter(function (x) { return x.id === id; })[0];
    if (!n) {
      document.title = 'Notícia não encontrada | ' + SITE.name;
      var relatedSection = $('[aria-labelledby="relacionadas-titulo"]');
      if (relatedSection) relatedSection.hidden = true;
      root.innerHTML = '<div class="empty-state"><h1 style="font-size:1.6rem">Notícia não encontrada</h1><p>O endereço pode estar incorreto ou a notícia foi removida.</p>' +
        '<a class="btn btn--primary" href="noticias.html">Ver todas as notícias</a></div>';
      return;
    }
    document.title = n.title + ' | ' + SITE.name;
    var metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', n.excerpt);
    var crumb = $('[data-article-title]');
    if (crumb) crumb.textContent = n.title;

    var body = n.body.map(function (b) {
      if (typeof b === 'string') return '<p>' + esc(b) + '</p>';
      return '<ul>' + b.list.map(function (li) { return '<li>' + esc(li) + '</li>'; }).join('') + '</ul>';
    }).join('');
    var shareText = n.title + ' – ' + SITE.name + ' ' + window.location.href;

    root.innerHTML = '<article class="article tone-' + esc(n.tone) + '">' +
      '<div class="article__thumb" aria-hidden="true">' + icon('i-' + n.icon) + '</div>' +
      '<div class="article__meta"><span class="tag">' + esc(n.category) + '</span><time datetime="' + esc(n.date) + '">' + fmtDate(n.date) + '</time></div>' +
      '<h1>' + esc(n.title) + '</h1>' +
      '<div class="article__body">' + body + '</div>' +
      '<div class="article__foot">' +
        '<a class="btn btn--outline" href="noticias.html">' + icon('i-arrow-left') + 'Todas as notícias</a>' +
        '<div class="btn-row">' +
          '<button type="button" class="btn btn--outline" data-copy-link>' + icon('i-copy') + '<span>Copiar link</span></button>' +
          '<a class="btn btn--wa" href="https://wa.me/?text=' + encodeURIComponent(shareText) + '" target="_blank" rel="noopener noreferrer">' + icon('i-whatsapp') + 'Compartilhar</a>' +
        '</div>' +
      '</div></article>';

    var related = $('[data-related-news]');
    if (related) {
      var others = sortedNews().filter(function (x) { return x.id !== n.id; });
      others.sort(function (a, b) { return (b.category === n.category) - (a.category === n.category); });
      related.innerHTML = others.slice(0, 3).map(newsCard).join('');
    }
  }
  var refreshNews = null;
  function initNews() {
    var filters = $('[data-news-filters]');
    var full = $('[data-news-full]');
    var status = $('[data-news-status]');

    function activeCat() {
      if (!filters) return 'Todas';
      var chip = $('.chip[aria-pressed="true"]', filters);
      return chip ? chip.getAttribute('data-cat') : 'Todas';
    }
    function renderFull(cat) {
      if (!full) return;
      var items = sortedNews().filter(function (n) { return cat === 'Todas' || n.category === cat; });
      renderNewsList(full, items);
      if (status) status.textContent = items.length + (items.length === 1 ? ' notícia exibida' : ' notícias exibidas') + (cat === 'Todas' ? '.' : ' em ' + cat + '.');
    }
    function renderAll() {
      $$('[data-news-list]').forEach(function (list) {
        var limit = parseInt(list.getAttribute('data-limit') || '0', 10);
        var items = sortedNews();
        renderNewsList(list, limit ? items.slice(0, limit) : items);
      });
      if (filters && full) renderFull(activeCat());
      var article = $('[data-news-article]');
      if (article) renderArticle(article);
    }

    if (filters && full) {
      var categories = ['Todas'].concat(DATA.newsCategories);
      filters.innerHTML = categories.map(function (c, i) {
        return '<button type="button" class="chip" data-cat="' + esc(c) + '" aria-pressed="' + (i === 0 ? 'true' : 'false') + '">' + esc(c) + '</button>';
      }).join('');
      filters.addEventListener('click', function (e) {
        var chip = e.target.closest('.chip');
        if (!chip) return;
        $$('.chip', filters).forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
        renderFull(chip.getAttribute('data-cat'));
      });
    }

    renderAll();
    refreshNews = renderAll;
  }

  /* Calendário ------------------------------------------------------------------------------------------------ */
  var refreshCalendar = null;
  function eventSpan(ev) { return ev.end && ev.end !== ev.date; }
  function nextEvent() {
    var today = todayIso();
    var upcoming = DATA.events.filter(function (e) { return (e.end || e.date) >= today; })
      .sort(function (a, b) { return a.date.localeCompare(b.date); });
    return upcoming[0] || null;
  }
  function describeDate(ev) {
    if (eventSpan(ev)) {
      var s = parseDate(ev.date), e = parseDate(ev.end);
      if (s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()) {
        return s.getDate() + ' a ' + e.getDate() + ' de ' + e.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
      }
      return fmtDate(ev.date, { day: 'numeric', month: 'long' }) + ' a ' + fmtDate(ev.end);
    }
    return fmtDate(ev.date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  }
  function dateBadge(ev) {
    var d = parseDate(ev.date);
    var small = d.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '');
    if (eventSpan(ev)) small += ' · ' + pad(parseDate(ev.end).getDate());
    else small = d.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '') + ' · ' + small;
    return '<div class="cal-date" aria-hidden="true"><strong>' + pad(d.getDate()) + '</strong><span>' + esc(small) + '</span></div>';
  }
  function icsText(s) { return String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n'); }
  function icsFold(line) {
    var out = [], rest = line;
    while (rest.length > 60) { out.push(rest.slice(0, 60)); rest = ' ' + rest.slice(60); }
    out.push(rest);
    return out;
  }
  function buildIcs(events) {
    var stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    var lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Escola Edificar//Calendario Escolar//PT-BR', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
      'X-WR-CALNAME:' + icsText('Calendário Escolar – ' + SITE.name)];
    events.forEach(function (ev, k) {
      var end = parseDate(ev.end || ev.date);
      end.setDate(end.getDate() + 1);
      var endStr = end.getFullYear() + pad(end.getMonth() + 1) + pad(end.getDate());
      lines.push('BEGIN:VEVENT', 'UID:' + ev.date.replace(/-/g, '') + '-' + k + '@escolaedificar',
        'DTSTAMP:' + stamp, 'DTSTART;VALUE=DATE:' + ev.date.replace(/-/g, ''), 'DTEND;VALUE=DATE:' + endStr,
        'SUMMARY:' + icsText(ev.title), 'DESCRIPTION:' + icsText(ev.desc || ''),
        'CATEGORIES:' + icsText(DATA.eventTypes[ev.type] || ev.type), 'END:VEVENT');
    });
    lines.push('END:VCALENDAR');
    return lines.reduce(function (acc, l) { return acc.concat(icsFold(l)); }, []).join('\r\n') + '\r\n';
  }
  function downloadFile(name, mime, content) {
    var blob = new Blob([content], { type: mime });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    window.setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  function initCalendar() {
    var root = $('[data-calendar]');
    if (!root) return;
    var list = $('[data-calendar-list]', root);
    var typeBox = $('[data-calendar-types]', root);
    var yearBox = $('[data-calendar-years]', root);
    var nextBox = $('[data-calendar-next]', root);
    var status = $('[data-calendar-status]', root);
    var icsBtn = $('[data-calendar-ics]', root);

    var events = [];
    var state = { type: 'all', year: 'all' };

    function chip(group, value, label, pressed) {
      return '<button type="button" class="chip" data-group="' + group + '" data-value="' + esc(value) + '" aria-pressed="' + (pressed ? 'true' : 'false') + '">' + esc(label) + '</button>';
    }

    function setup() {
      events = DATA.events.slice().sort(function (a, b) { return a.date.localeCompare(b.date); });
      var years = [];
      events.forEach(function (e) { var y = e.date.slice(0, 4); if (years.indexOf(y) < 0) years.push(y); });
      if (state.year !== 'all' && years.indexOf(state.year) < 0) state.year = 'all';
      typeBox.innerHTML = chip('type', 'all', 'Todos', state.type === 'all') + Object.keys(DATA.eventTypes).map(function (t) { return chip('type', t, DATA.eventTypes[t], state.type === t); }).join('');
      yearBox.innerHTML = chip('year', 'all', 'Todos os anos', state.year === 'all') + years.map(function (y) { return chip('year', y, y, state.year === y); }).join('');

      var nxt = nextEvent();
      if (nextBox) {
        nextBox.hidden = !nxt;
        if (nxt) nextBox.innerHTML = dateBadge(nxt) + '<div><small>Próximo evento</small><h2>' + esc(nxt.title) + '</h2><p>' + esc(describeDate(nxt)) + (nxt.desc ? ' · ' + esc(nxt.desc) : '') + '</p></div>';
      }
      render();
    }

    function filtered() {
      return events.filter(function (e) {
        return (state.type === 'all' || e.type === state.type) && (state.year === 'all' || e.date.slice(0, 4) === state.year);
      });
    }
    function render() {
      var items = filtered(), today = todayIso(), groups = {}, order = [];
      items.forEach(function (e) { var k = e.date.slice(0, 7); if (!groups[k]) { groups[k] = []; order.push(k); } groups[k].push(e); });
      list.innerHTML = order.length ? order.map(function (k) {
        var title = parseDate(k + '-01').toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
        title = title.charAt(0).toUpperCase() + title.slice(1);
        return '<section class="cal-month" aria-labelledby="mes-' + k + '"><h2 class="cal-month__title" id="mes-' + k + '">' + esc(title) + '</h2><ul class="cal-list">' +
          groups[k].map(function (e) {
            var past = (e.end || e.date) < today;
            var isToday = e.date <= today && (e.end || e.date) >= today;
            return '<li class="cal-item' + (past ? ' is-past' : '') + (isToday ? ' is-today' : '') + '">' + dateBadge(e) +
              '<div><h3>' + esc(e.title) + '</h3><p><time datetime="' + esc(e.date) + '">' + esc(describeDate(e)) + '</time>' + (e.desc ? ' · ' + esc(e.desc) : '') + '</p></div>' +
              '<span class="tag tag--' + esc(e.type) + '">' + esc(DATA.eventTypes[e.type] || e.type) + '</span></li>';
          }).join('') + '</ul></section>';
      }).join('') : '<p class="empty-state">Nenhum evento encontrado para este filtro.</p>';
      if (status) status.textContent = items.length + (items.length === 1 ? ' evento exibido.' : ' eventos exibidos.');
    }

    root.addEventListener('click', function (e) {
      var c = e.target.closest('.chip');
      if (!c) return;
      var group = c.getAttribute('data-group');
      state[group] = c.getAttribute('data-value');
      $$('.chip[data-group="' + group + '"]', root).forEach(function (x) { x.setAttribute('aria-pressed', x === c ? 'true' : 'false'); });
      render();
    });
    if (icsBtn) icsBtn.addEventListener('click', function () {
      downloadFile('calendario-escolar-edificar.ics', 'text/calendar;charset=utf-8', buildIcs(filtered()));
    });
    setup();
    refreshCalendar = setup;
  }

  /* Cartão "próximo evento" na home --------------------------------------------------------------------------------------- */
  function initNextEventCard() {
    var box = $('[data-next-event]');
    var ev = nextEvent();
    if (!box || !ev) return;
    var t = $('[data-next-title]', box), d = $('[data-next-date]', box);
    if (t) t.textContent = ev.title;
    if (d) d.textContent = describeDate(ev);
  }

  /* Formulários (envio por WhatsApp ou e-mail) ---------------------------------------------------------------------------------- */
  function maskPhone(value) {
    var d = Util.digits(value).slice(0, 11);
    if (d.length <= 2) return d.length ? '(' + d : '';
    if (d.length <= 6) return '(' + d.slice(0, 2) + ') ' + d.slice(2);
    if (d.length <= 10) return '(' + d.slice(0, 2) + ') ' + d.slice(2, 6) + '-' + d.slice(6);
    return '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7);
  }
  function fieldMessage(el) {
    var value = el.type === 'checkbox' ? (el.checked ? 'sim' : '') : String(el.value).trim();
    if (el.required && !value) return el.type === 'checkbox' ? 'Para continuar, é necessário concordar com o uso dos dados.' : 'Preencha este campo.';
    if (!value) return '';
    if (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Informe um e-mail válido, como nome@exemplo.com.';
    if (el.name === 'telefone' && Util.digits(value).length < 10) return 'Informe o telefone com DDD.';
    return '';
  }
  function labelOf(el) {
    var field = el.closest('.field');
    var label = field && $('label', field);
    return label ? label.textContent.replace(/\*/g, '').replace(/\(obrigatório\)/i, '').trim() : el.name;
  }
  function initForms() {
    $$('form[data-form]').forEach(function (form) {
      form.setAttribute('novalidate', '');
      var status = $('.form-status', form);
      var fields = $$('input, select, textarea', form).filter(function (el) { return el.name; });

      fields.forEach(function (el) {
        if (el.name === 'telefone') el.addEventListener('input', function () { el.value = maskPhone(el.value); });
        var clear = function () { setError(el, ''); };
        el.addEventListener(el.type === 'checkbox' || el.tagName === 'SELECT' ? 'change' : 'input', clear);
      });

      function setError(el, msg) {
        var field = el.closest('.field') || el.closest('.check');
        if (!field) return;
        var err = $('.field__error', field);
        field.classList.toggle('field--error', !!msg);
        if (msg) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid');
        if (err) err.textContent = msg;
      }
      function validate() {
        var first = null;
        fields.forEach(function (el) {
          var msg = fieldMessage(el);
          setError(el, msg);
          if (msg && !first) first = el;
        });
        return first;
      }
      function message() {
        var lines = [form.getAttribute('data-intro') || 'Olá!', ''];
        fields.forEach(function (el) {
          if (el.type === 'checkbox') return;
          var v = el.tagName === 'SELECT' ? (el.selectedIndex > 0 ? el.options[el.selectedIndex].text : '') : String(el.value).trim();
          if (v) lines.push(labelOf(el) + ': ' + v);
        });
        return lines.join('\n');
      }
      function show(kind, html) {
        if (!status) return;
        status.hidden = false;
        status.className = 'form-status form-status--' + kind;
        status.setAttribute('role', kind === 'error' ? 'alert' : 'status');
        status.innerHTML = html;
      }

      form.addEventListener('submit', function (e) { e.preventDefault(); });
      $$('[data-channel]', form).forEach(function (btn) {
        btn.addEventListener('click', function () {
          var bad = validate();
          if (bad) {
            bad.focus();
            show('error', '<p>Confira os campos destacados e tente novamente.</p>');
            return;
          }
          var text = message();
          if (btn.getAttribute('data-channel') === 'wa') {
            window.open(Util.waHref(text), '_blank', 'noopener');
            show('ok', '<p><strong>Quase lá!</strong> Abrimos o WhatsApp da secretaria com sua mensagem pronta. É só tocar em enviar.</p>');
          } else {
            window.location.href = Util.mailHref(form.getAttribute('data-subject') || 'Contato pelo site', text);
            show('ok', '<p><strong>Quase lá!</strong> Abrimos o seu aplicativo de e-mail com a mensagem pronta. É só enviar.</p>');
          }
        });
      });
    });
  }

  /* Copiar link ------------------------------------------------------------------------------------------------------------- */
  function initCopyLinks() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-copy-link]');
      if (!btn) return;
      var label = $('span', btn);
      var done = function () { if (label) { var old = label.textContent; label.textContent = 'Link copiado!'; window.setTimeout(function () { label.textContent = old; }, 2200); } };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(window.location.href).then(done, function () { window.prompt('Copie o link:', window.location.href); });
      else window.prompt('Copie o link:', window.location.href);
    });
  }

  /* Perguntas frequentes (acordeão) ------------------------------------------------------------------------------------------------------ */
  function initFaq() {
    $$('[data-faq]').forEach(function (box) {
      var limit = parseInt(box.getAttribute('data-limit') || '0', 10);
      var items = limit ? DATA.faq.slice(0, limit) : DATA.faq;
      box.className = (box.className + ' accordion').trim();
      box.innerHTML = items.map(function (f) {
        return '<details><summary>' + esc(f.q) + icon('i-chevron-down') + '</summary><div class="accordion__body"><p>' + esc(f.a) + '</p></div></details>';
      }).join('');
    });
  }

  /* Revelar ao rolar ------------------------------------------------------------------------------------------------------------- */
  function initReveal() {
    var els = $$('.reveal');
    if (!els.length || reduceMotion || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    document.documentElement.classList.add('reveal-ready');
    els.forEach(function (el) { io.observe(el); });
  }

  [hydrateSite, initHeader, initA11y, initTabs, initSlider, initCarousel, initNews, initCalendar, initNextEventCard, initFaq, initForms, initCopyLinks, initReveal].forEach(function (fn) {
    try { fn(); } catch (err) { if (window.console) console.error('[Edificar] erro em ' + fn.name, err); }
  });

  /* Eventos e notícias da nuvem (Supabase): quando chegarem, atualiza a página ------------------------------------ */
  if (window.EDIFICAR_CLOUD) {
    if (window.EDIFICAR_CLOUD.events) {
      window.EDIFICAR_CLOUD.events.then(function (cloudEvents) {
        if (!cloudEvents) return; // indisponível: mantém os eventos do data.js
        DATA.events = cloudEvents;
        try { if (refreshCalendar) refreshCalendar(); } catch (err) {}
        try { initNextEventCard(); } catch (err) {}
      });
    }
    if (window.EDIFICAR_CLOUD.news) {
      window.EDIFICAR_CLOUD.news.then(function (cloudNews) {
        if (!cloudNews) return; // indisponível: mantém as notícias do data.js
        DATA.news = cloudNews;
        try { if (refreshNews) refreshNews(); } catch (err) {}
      });
    }
  }
}());
