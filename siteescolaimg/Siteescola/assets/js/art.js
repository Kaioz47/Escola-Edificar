/*
  Ilustrações originais da Escola Edificar (placeholders para fotos reais).
  Para trocar por fotografias, substitua o <svg> da seção por uma tag <img> com a foto da escola.
*/
window.SPRITE_ART = `
<defs>
  <linearGradient id="g-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c4dbff"/><stop offset="1" stop-color="#f1f6ff"/></linearGradient>
  <linearGradient id="g-warm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff4cf"/><stop offset="1" stop-color="#ffe3a8"/></linearGradient>
  <linearGradient id="g-cool" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d3e5ff"/><stop offset="1" stop-color="#f0f5ff"/></linearGradient>
  <linearGradient id="g-dusk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a2fd0"/><stop offset="1" stop-color="#141b93"/></linearGradient>
  <clipPath id="cp-hero"><rect width="560" height="470" rx="40"/></clipPath>
  <clipPath id="cp-visita"><rect width="560" height="470" rx="40"/></clipPath>
  <clipPath id="cp-hist"><rect width="560" height="420" rx="36"/></clipPath>
  <clipPath id="cp-etapa"><rect width="360" height="280" rx="28"/></clipPath>
</defs>
<style>
  .k-skin{fill:var(--skin,#e8b88f)} .k-skin-s{stroke:var(--skin,#e8b88f)}
  .k-hair{fill:var(--hair,#3b2314)}
  .k-shirt{fill:var(--shirt,#fff)} .k-shirt-s{stroke:var(--shirt,#fff)}
  .k-pants{fill:var(--pants,#141b93)}
  .b-fill{fill:var(--c,#f5b400)}
</style>

<symbol id="cloud" viewBox="0 0 100 50">
  <g fill="#fff"><circle cx="26" cy="32" r="12"/><circle cx="46" cy="22" r="16"/><circle cx="68" cy="28" r="14"/><circle cx="82" cy="36" r="9"/><rect x="26" y="30" width="56" height="14" rx="7"/></g>
</symbol>

<symbol id="tree" viewBox="0 0 60 100">
  <rect x="26.5" y="58" width="7" height="42" rx="3" fill="#8b5a2b"/>
  <circle cx="30" cy="36" r="24" fill="#2fa86b"/><circle cx="16" cy="52" r="14" fill="#2a9a61"/><circle cx="44" cy="52" r="14" fill="#2a9a61"/>
  <circle cx="23" cy="30" r="9" fill="#46c081" opacity=".7"/>
</symbol>

<symbol id="bush" viewBox="0 0 80 40">
  <circle cx="22" cy="26" r="14" fill="#2a9a61"/><circle cx="42" cy="20" r="18" fill="#2fa86b"/><circle cx="60" cy="27" r="13" fill="#2a9a61"/>
  <rect x="10" y="26" width="64" height="14" rx="7" fill="#2a9a61"/>
</symbol>

<symbol id="block" viewBox="0 0 26 26">
  <rect width="26" height="26" rx="5" class="b-fill"/>
  <path d="M0 19h26v2a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z" fill="#000" opacity=".13"/>
  <rect x="3.5" y="3.5" width="19" height="5" rx="2.5" fill="#fff" opacity=".35"/>
</symbol>

<symbol id="star-art" viewBox="0 0 24 24"><path d="m12 1.5 3.1 6.6 7.2.9-5.3 5 1.4 7.2L12 17.6l-6.4 3.6L7 14l-5.3-5 7.2-.9z" fill="#ffc21a"/></symbol>

<symbol id="book-art" viewBox="0 0 44 32">
  <path d="M2 5c8-3 15-2 20 3 5-5 12-6 20-3v22c-8-3-15-2-20 3-5-5-12-6-20-3z" fill="#fff" stroke="#141b93" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M22 8v22" stroke="#141b93" stroke-width="2.4"/>
  <path d="M7 11c4-1 8 0 11 2M7 17c4-1 8 0 11 2M26 13c3-2 7-3 11-2M26 19c3-2 7-3 11-2" stroke="#9db0e8" stroke-width="1.8" fill="none" stroke-linecap="round"/>
</symbol>

<symbol id="kid" viewBox="0 0 60 104">
  <path class="k-skin-s" d="M13 41C7 47 6 57 9 66" fill="none" stroke-width="7" stroke-linecap="round"/>
  <path class="k-skin-s" d="M47 41C53 47 54 57 51 66" fill="none" stroke-width="7" stroke-linecap="round"/>
  <rect class="k-pants" x="17" y="58" width="12" height="38" rx="5"/><rect class="k-pants" x="31" y="58" width="12" height="38" rx="5"/>
  <ellipse cx="23" cy="97" rx="8" ry="4.5" fill="#2b2f6b"/><ellipse cx="37" cy="97" rx="8" ry="4.5" fill="#2b2f6b"/>
  <rect class="k-shirt" x="12" y="34" width="36" height="34" rx="12"/>
  <path class="k-shirt-s" d="M13 41C10 43 8 46 7.5 50" fill="none" stroke-width="9" stroke-linecap="round"/>
  <path class="k-shirt-s" d="M47 41C50 43 52 46 52.5 50" fill="none" stroke-width="9" stroke-linecap="round"/>
  <circle cx="39" cy="46" r="3.6" fill="#f5b400"/>
  <rect class="k-skin" x="26" y="28" width="8" height="10" rx="3"/>
  <circle class="k-skin" cx="15" cy="20" r="3"/><circle class="k-skin" cx="45" cy="20" r="3"/><circle class="k-skin" cx="30" cy="18" r="15"/>
  <path class="k-hair" d="M15 17C14 5 23 2 30 2c8 0 16 3 15 15-3-5-9-8-15-8s-12 3-15 8z"/>
  <circle cx="24" cy="19.5" r="1.8" fill="#1d1d3a"/><circle cx="36" cy="19.5" r="1.8" fill="#1d1d3a"/>
  <path d="M25.5 25.5Q30 29.5 34.5 25.5" fill="none" stroke="#1d1d3a" stroke-width="1.6" stroke-linecap="round"/>
  <circle cx="20.5" cy="24.5" r="2.6" fill="#ff7a7a" opacity=".35"/><circle cx="39.5" cy="24.5" r="2.6" fill="#ff7a7a" opacity=".35"/>
</symbol>

<symbol id="kid-wave" viewBox="0 0 60 104">
  <path class="k-skin-s" d="M13 41C7 47 6 57 9 66" fill="none" stroke-width="7" stroke-linecap="round"/>
  <path class="k-skin-s" d="M47 41C56 37 58 27 54.5 19" fill="none" stroke-width="7" stroke-linecap="round"/>
  <rect class="k-pants" x="17" y="58" width="12" height="38" rx="5"/><rect class="k-pants" x="31" y="58" width="12" height="38" rx="5"/>
  <ellipse cx="23" cy="97" rx="8" ry="4.5" fill="#2b2f6b"/><ellipse cx="37" cy="97" rx="8" ry="4.5" fill="#2b2f6b"/>
  <rect class="k-shirt" x="12" y="34" width="36" height="34" rx="12"/>
  <path class="k-shirt-s" d="M13 41C10 43 8 46 7.5 50" fill="none" stroke-width="9" stroke-linecap="round"/>
  <path class="k-shirt-s" d="M47 41C50 40 52 38.500 53 36.500" fill="none" stroke-width="9" stroke-linecap="round"/>
  <circle cx="39" cy="46" r="3.6" fill="#f5b400"/>
  <rect class="k-skin" x="26" y="28" width="8" height="10" rx="3"/>
  <circle class="k-skin" cx="15" cy="20" r="3"/><circle class="k-skin" cx="45" cy="20" r="3"/><circle class="k-skin" cx="30" cy="18" r="15"/>
  <path class="k-hair" d="M15 17C14 5 23 2 30 2c8 0 16 3 15 15-3-5-9-8-15-8s-12 3-15 8z"/>
  <circle cx="24" cy="19.5" r="1.8" fill="#1d1d3a"/><circle cx="36" cy="19.5" r="1.8" fill="#1d1d3a"/>
  <path d="M25 25Q30 31 35 25z" fill="#1d1d3a" stroke="#1d1d3a" stroke-width="1.2" stroke-linejoin="round"/>
  <circle cx="20.5" cy="24.5" r="2.6" fill="#ff7a7a" opacity=".35"/><circle cx="39.5" cy="24.5" r="2.6" fill="#ff7a7a" opacity=".35"/>
</symbol>

<symbol id="kid-long" viewBox="0 0 60 104">
  <path class="k-skin-s" d="M13 41C7 47 6 57 9 66" fill="none" stroke-width="7" stroke-linecap="round"/>
  <path class="k-skin-s" d="M47 41C53 47 54 57 51 66" fill="none" stroke-width="7" stroke-linecap="round"/>
  <rect class="k-pants" x="17" y="58" width="12" height="38" rx="5"/><rect class="k-pants" x="31" y="58" width="12" height="38" rx="5"/>
  <ellipse cx="23" cy="97" rx="8" ry="4.5" fill="#2b2f6b"/><ellipse cx="37" cy="97" rx="8" ry="4.5" fill="#2b2f6b"/>
  <path class="k-hair" d="M14 18C9 32 11 46 18 52l8-8h8l8 8c7-6 9-20 4-34z"/>
  <rect class="k-shirt" x="12" y="34" width="36" height="34" rx="12"/>
  <path class="k-shirt-s" d="M13 41C10 43 8 46 7.5 50" fill="none" stroke-width="9" stroke-linecap="round"/>
  <path class="k-shirt-s" d="M47 41C50 43 52 46 52.5 50" fill="none" stroke-width="9" stroke-linecap="round"/>
  <circle cx="39" cy="46" r="3.6" fill="#f5b400"/>
  <rect class="k-skin" x="26" y="28" width="8" height="10" rx="3"/>
  <circle class="k-skin" cx="30" cy="18" r="15"/>
  <path class="k-hair" d="M14.500 19C13 6 22 2 30 2s17 4 15.500 17c-2-6-6-10-15.500-10S16.500 13 14.500 19z"/>
  <circle cx="19" cy="7" r="4.200" fill="#f5b400"/>
  <circle cx="24" cy="19.500" r="1.800" fill="#1d1d3a"/><circle cx="36" cy="19.500" r="1.800" fill="#1d1d3a"/>
  <path d="M25.500 25.500Q30 29.500 34.500 25.500" fill="none" stroke="#1d1d3a" stroke-width="1.600" stroke-linecap="round"/>
  <circle cx="20.500" cy="24.500" r="2.600" fill="#ff7a7a" opacity=".35"/><circle cx="39.500" cy="24.500" r="2.600" fill="#ff7a7a" opacity=".35"/>
</symbol>

<symbol id="kid-long-wave" viewBox="0 0 60 104">
  <path class="k-skin-s" d="M13 41C7 47 6 57 9 66" fill="none" stroke-width="7" stroke-linecap="round"/>
  <path class="k-skin-s" d="M47 41C56 37 58 27 54.500 19" fill="none" stroke-width="7" stroke-linecap="round"/>
  <rect class="k-pants" x="17" y="58" width="12" height="38" rx="5"/><rect class="k-pants" x="31" y="58" width="12" height="38" rx="5"/>
  <ellipse cx="23" cy="97" rx="8" ry="4.5" fill="#2b2f6b"/><ellipse cx="37" cy="97" rx="8" ry="4.5" fill="#2b2f6b"/>
  <path class="k-hair" d="M14 18C9 32 11 46 18 52l8-8h8l8 8c7-6 9-20 4-34z"/>
  <rect class="k-shirt" x="12" y="34" width="36" height="34" rx="12"/>
  <path class="k-shirt-s" d="M13 41C10 43 8 46 7.5 50" fill="none" stroke-width="9" stroke-linecap="round"/>
  <path class="k-shirt-s" d="M47 41C50 40 52 38.500 53 36.500" fill="none" stroke-width="9" stroke-linecap="round"/>
  <circle cx="39" cy="46" r="3.6" fill="#f5b400"/>
  <rect class="k-skin" x="26" y="28" width="8" height="10" rx="3"/>
  <circle class="k-skin" cx="30" cy="18" r="15"/>
  <path class="k-hair" d="M14.500 19C13 6 22 2 30 2s17 4 15.500 17c-2-6-6-10-15.500-10S16.500 13 14.500 19z"/>
  <circle cx="19" cy="7" r="4.200" fill="#f5b400"/>
  <circle cx="24" cy="19.500" r="1.800" fill="#1d1d3a"/><circle cx="36" cy="19.500" r="1.800" fill="#1d1d3a"/>
  <path d="M25 25Q30 31 35 25z" fill="#1d1d3a" stroke="#1d1d3a" stroke-width="1.200" stroke-linejoin="round"/>
  <circle cx="20.500" cy="24.500" r="2.600" fill="#ff7a7a" opacity=".35"/><circle cx="39.500" cy="24.500" r="2.600" fill="#ff7a7a" opacity=".35"/>
</symbol>

<symbol id="school" viewBox="0 0 300 230">
  <ellipse cx="150" cy="222" rx="142" ry="7" fill="#0b1b6b" opacity=".14"/>
  <rect x="94" y="206" width="112" height="12" rx="3" fill="#c9d4f0"/>
  <rect x="102" y="197" width="96" height="11" rx="3" fill="#dde5f8"/>
  <rect x="38" y="112" width="224" height="88" fill="#fff"/>
  <rect x="38" y="190" width="224" height="10" fill="#e3eafb"/>
  <g fill="#bcd6f7"><rect x="52" y="132" width="26" height="36" rx="3"/><rect x="88" y="132" width="26" height="36" rx="3"/><rect x="186" y="132" width="26" height="36" rx="3"/><rect x="222" y="132" width="26" height="36" rx="3"/></g>
  <path d="M65 132v36M52 150h26M101 132v36M88 150h26M199 132v36M186 150h26M235 132v36M222 150h26" stroke="#fff" stroke-width="3"/>
  <rect x="98" y="98" width="104" height="102" fill="#f1f4ff"/>
  <g fill="#fff" stroke="#d5ddf3" stroke-width="1.500"><rect x="104" y="108" width="9" height="92"/><rect x="128" y="108" width="9" height="92"/><rect x="163" y="108" width="9" height="92"/><rect x="187" y="108" width="9" height="92"/></g>
  <path d="M137 200v-40a13 13 0 0 1 26 0v40z" fill="#141b93"/>
  <path d="M143 200v-39a7 7 0 0 1 14 0v39z" fill="url(#g-gold)"/>
  <rect x="30" y="68" width="240" height="45" rx="5" fill="#141b93"/>
  <rect x="30" y="105" width="240" height="8" fill="#f5b400"/>
  <text x="150" y="98" text-anchor="middle" font-family="Poppins, Arial, sans-serif" font-weight="700" font-size="26" fill="#fff">Edificar</text>
  <rect x="149" y="36" width="2.600" height="34" fill="#141b93"/>
  <path d="M151.600 38 180 45l-28.400 7z" fill="#ffc21a"/>
</symbol>

<symbol id="wheel-values" viewBox="0 0 400 400">
  <circle cx="200" cy="200" r="196" fill="#fff"/>
  <g fill="none" stroke-width="90" transform="rotate(-120 200 200)">
    <circle cx="200" cy="200" r="140" stroke="#2312ce" stroke-dasharray="141.6 738.05" stroke-dashoffset="-2.5"/>
    <circle cx="200" cy="200" r="140" stroke="#d4474a" stroke-dasharray="141.6 738.05" stroke-dashoffset="-2.5" transform="rotate(60 200 200)"/>
    <circle cx="200" cy="200" r="140" stroke="#0f7d37" stroke-dasharray="141.6 738.05" stroke-dashoffset="-2.5" transform="rotate(120 200 200)"/>
    <circle cx="200" cy="200" r="140" stroke="#0e7c86" stroke-dasharray="141.6 738.05" stroke-dashoffset="-2.5" transform="rotate(180 200 200)"/>
    <circle cx="200" cy="200" r="140" stroke="#1a63a8" stroke-dasharray="141.6 738.05" stroke-dashoffset="-2.5" transform="rotate(240 200 200)"/>
    <circle cx="200" cy="200" r="140" stroke="#f5b400" stroke-dasharray="141.6 738.05" stroke-dashoffset="-2.5" transform="rotate(300 200 200)"/>
  </g>
  <g style="fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round">
    <use href="#i-check-circle" x="185" y="26" width="30" height="30"/>
    <use href="#i-heart" x="306" y="96" width="30" height="30"/>
    <use href="#i-smile" x="306" y="236" width="30" height="30"/>
    <use href="#i-users" x="185" y="306" width="30" height="30"/>
    <use href="#i-shield" x="64" y="236" width="30" height="30"/>
    <use href="#i-lightbulb" x="64" y="96" width="30" height="30" style="stroke:#070864"/>
  </g>
  <g font-family="Poppins, Arial, sans-serif" font-size="11.5" font-weight="700" text-anchor="middle" fill="#fff">
    <text x="200" y="78">Responsabilidade</text>
    <text x="321" y="148">Respeito</text>
    <text x="321" y="288">Empatia</text>
    <text x="200" y="358">Cooperação</text>
    <text x="79" y="288">Ética</text>
    <text x="79" y="148" fill="#070864">Curiosidade</text>
  </g>
  <circle cx="200" cy="200" r="86" fill="#fff"/>
  <circle cx="200" cy="200" r="86" fill="none" stroke="#e8ecff" stroke-width="6"/>
  <image href="assets/img/logo-edificar.png" x="158" y="158" width="84" height="84"/>
</symbol>

<symbol id="scene-hero" viewBox="-24 -24 608 518">
  <g clip-path="url(#cp-hero)">
    <rect width="560" height="470" fill="url(#g-sky)"/>
    <circle cx="470" cy="86" r="62" fill="#ffd25a" opacity=".28"/><circle cx="470" cy="86" r="40" fill="#ffd25a"/>
    <use href="#cloud" x="40" y="58" width="130" height="65"/>
    <use href="#cloud" x="300" y="34" width="96" height="48" opacity=".9"/>
    <path d="M0 322C90 288 170 296 250 316S430 336 560 296V470H0z" fill="#cfe9d7"/>
    <path d="M0 384C120 354 230 364 330 380S480 392 560 368V470H0z" fill="#9fd9b0"/>
    <use href="#school" x="62" y="52" width="436" height="334"/>
    <use href="#bush" x="86" y="338" width="96" height="48"/><use href="#bush" x="378" y="338" width="96" height="48"/>
    <path d="M236 380h88l46 90H190z" fill="#ead9b0"/>
    <use href="#kid-long-wave" x="62" y="328" width="72" height="125" style="--skin:#f0c3a0;--hair:#4a2a14"/>
    <use href="#kid" x="136" y="340" width="66" height="114" style="--skin:#8d5a3b;--hair:#171212"/>
    <use href="#kid" x="352" y="338" width="68" height="118" style="--skin:#c98a5e;--hair:#2b1b12"/>
    <use href="#kid-long-wave" x="424" y="326" width="74" height="128" style="--skin:#6f4430;--hair:#120d0b"/>
  </g>
  <use href="#block" x="-10" y="22" width="44" height="44" transform="rotate(-14 12 44)" style="--c:#f5b400"/>
  <use href="#block" x="522" y="150" width="40" height="40" transform="rotate(16 542 170)" style="--c:#2f8ae8"/>
  <use href="#block" x="500" y="402" width="34" height="34" transform="rotate(-10 517 419)" style="--c:#ef6f6c"/>
  <use href="#star-art" x="496" y="10" width="38" height="38"/>
  <use href="#star-art" x="-6" y="196" width="28" height="28"/>
</symbol>

<symbol id="scene-visita" viewBox="-24 -24 608 518">
  <g clip-path="url(#cp-visita)">
    <rect width="560" height="470" fill="url(#g-warm)"/>
    <circle cx="86" cy="86" r="34" fill="#ffc21a" opacity=".9"/>
    <use href="#cloud" x="380" y="40" width="120" height="60"/>
    <path d="M0 404C140 376 420 376 560 404V470H0z" fill="#9fd9b0"/>
    <rect x="110" y="134" width="340" height="272" rx="10" fill="#fff"/>
    <rect x="94" y="108" width="372" height="34" rx="10" fill="#141b93"/>
    <rect x="94" y="136" width="372" height="8" fill="#f5b400"/>
    <g fill="#bcd6f7"><rect x="136" y="190" width="56" height="84" rx="28"/><rect x="368" y="190" width="56" height="84" rx="28"/></g>
    <path d="M164 190v84M136 232h56M396 190v84M368 232h56" stroke="#fff" stroke-width="4"/>
    <path d="M212 406V274a68 68 0 0 1 136 0v132z" fill="#070864"/>
    <path d="M224 406V276a56 56 0 0 1 112 0v130z" fill="url(#g-gold)"/>
    <path d="M212 406V274a68 68 0 0 1 22-50l-6 182z" fill="#2312ce"/>
    <path d="M348 406V274a68 68 0 0 0-22-50l6 182z" fill="#2312ce"/>
    <use href="#kid-long-wave" x="252" y="300" width="56" height="97" style="--skin:#e1a97f;--hair:#2a1810;--shirt:#2312ce;--pants:#070864"/>
    <rect x="190" y="152" width="180" height="40" rx="20" fill="url(#g-gold)"/>
    <text x="280" y="179" text-anchor="middle" font-family="Poppins,Arial,sans-serif" font-weight="700" font-size="19" fill="#070864">Bem-vindos!</text>
    <path d="M70 70Q280 130 490 70" fill="none" stroke="#141b93" stroke-width="2.500"/>
    <g>
      <path d="M92 78l16 26 16-20z" fill="#f5b400"/><path d="M142 90l14 28 18-24z" fill="#2f8ae8"/><path d="M196 104l14 28 18-22z" fill="#ef6f6c"/>
      <path d="M252 112l14 28 18-24z" fill="#3dbb7d"/><path d="M308 112l14 28 18-24z" fill="#f5b400"/><path d="M362 102l14 28 18-24z" fill="#2f8ae8"/><path d="M414 88l14 28 18-24z" fill="#ef6f6c"/>
    </g>
    <use href="#bush" x="104" y="360" width="100" height="50"/><use href="#bush" x="356" y="360" width="100" height="50"/>
    <path d="M238 406h84l40 64H198z" fill="#ead9b0"/>
    <use href="#kid-wave" x="60" y="336" width="72" height="125" style="--skin:#c98a5e;--hair:#1a1210"/>
    <use href="#kid-long" x="140" y="344" width="66" height="114" style="--skin:#f0c3a0;--hair:#7a4a22"/>
    <use href="#kid-long-wave" x="352" y="342" width="68" height="118" style="--skin:#8d5a3b;--hair:#120d0b"/>
    <use href="#kid" x="428" y="334" width="72" height="125" style="--skin:#e8b88f;--hair:#2b1b12"/>
  </g>
  <use href="#block" x="-8" y="196" width="40" height="40" transform="rotate(-12 12 216)" style="--c:#2f8ae8"/>
  <use href="#block" x="526" y="40" width="40" height="40" transform="rotate(14 546 60)" style="--c:#f5b400"/>
  <use href="#star-art" x="514" y="224" width="34" height="34"/>
</symbol>

<symbol id="scene-historia" viewBox="-24 -24 608 468">
  <g clip-path="url(#cp-hist)">
    <rect width="560" height="420" fill="url(#g-sky)"/>
    <use href="#cloud" x="40" y="40" width="120" height="60"/><use href="#cloud" x="250" y="22" width="90" height="45" opacity=".9"/>
    <path d="M0 336C120 312 260 322 360 334S500 340 560 322V420H0z" fill="#9fd9b0"/>
    <use href="#school" x="40" y="80" width="330" height="253"/>
    <g stroke="#f5a800" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M456 340V78M486 340V78"/>
      <path d="M456 330l30-24-30-24 30-24-30-24 30-24-30-24" stroke-width="2.500"/>
      <path d="M386 66h150M386 66l24-26h74l-24 26" stroke-width="3.500"/>
      <path d="M420 66v-26M500 66v-26" stroke-width="2.500"/>
    </g>
    <rect x="426" y="48" width="14" height="18" rx="2" fill="#2312ce"/>
    <rect x="466" y="320" width="44" height="22" rx="3" fill="#8b6b4a"/>
    <path d="M404 66V176" stroke="#141b93" stroke-width="2.500"/>
    <path d="M404 176l-12 18h24z" fill="none" stroke="#141b93" stroke-width="2.500" stroke-linejoin="round"/>
    <use href="#block" x="378" y="190" width="52" height="52" style="--c:#f5b400"/>
    <text x="404" y="228" text-anchor="middle" font-family="Poppins,Arial,sans-serif" font-weight="700" font-size="30" fill="#070864">E</text>
    <g><use href="#block" x="476" y="298" width="22" height="22" style="--c:#2f8ae8"/><use href="#block" x="500" y="298" width="22" height="22" style="--c:#ef6f6c"/><use href="#block" x="488" y="276" width="22" height="22" style="--c:#3dbb7d"/></g>
    <use href="#kid-wave" x="64" y="298" width="64" height="111" style="--skin:#e8b88f;--hair:#3b2314"/>
    <use href="#kid-long" x="130" y="304" width="62" height="107" style="--skin:#8d5a3b;--hair:#171212"/>
    <use href="#kid" x="196" y="300" width="64" height="111" style="--skin:#c98a5e;--hair:#2b1b12"/>
  </g>
  <use href="#star-art" x="-4" y="34" width="32" height="32"/>
  <use href="#block" x="530" y="-12" width="36" height="36" transform="rotate(14 548 6)" style="--c:#2f8ae8"/>
</symbol>

<symbol id="scene-infantil" viewBox="-16 -16 392 312">
  <g clip-path="url(#cp-etapa)">
    <rect width="360" height="280" fill="url(#g-warm)"/>
    <circle cx="300" cy="58" r="28" fill="#ffc21a"/>
    <g fill="none" stroke-width="9" stroke-linecap="round">
      <path d="M26 156a74 74 0 0 1 148 0" stroke="#ef6f6c"/><path d="M38 156a62 62 0 0 1 124 0" stroke="#ffc21a"/>
      <path d="M50 156a50 50 0 0 1 100 0" stroke="#3dbb7d"/><path d="M62 156a38 38 0 0 1 76 0" stroke="#2f8ae8"/>
    </g>
    <use href="#cloud" x="0" y="120" width="90" height="45"/><use href="#cloud" x="110" y="122" width="90" height="45"/>
    <path d="M0 236C80 212 150 218 220 230S320 240 360 224V280H0z" fill="#9fd9b0"/>
    <use href="#block" x="224" y="196" width="42" height="42" style="--c:#2f8ae8"/>
    <use href="#block" x="268" y="196" width="42" height="42" style="--c:#f5b400"/>
    <use href="#block" x="246" y="154" width="42" height="42" transform="rotate(-4 267 175)" style="--c:#ef6f6c"/>
    <use href="#block" x="250" y="112" width="42" height="42" transform="rotate(6 271 133)" style="--c:#3dbb7d"/>
    <use href="#kid" x="50" y="150" width="62" height="107" style="--skin:#c98a5e;--hair:#1a1210"/>
    <use href="#kid-long-wave" x="126" y="156" width="62" height="107" style="--skin:#f0c3a0;--hair:#4a2a14"/>
    <circle cx="206" cy="250" r="13" fill="#ef6f6c"/><path d="M196 244c6 4 14 4 20 0M196 256c6-4 14-4 20 0" stroke="#fff" stroke-width="2.400" fill="none"/>
  </g>
  <use href="#star-art" x="326" y="-6" width="28" height="28"/>
</symbol>

<symbol id="scene-fund1" viewBox="-16 -16 392 312">
  <g clip-path="url(#cp-etapa)">
    <rect width="360" height="280" fill="url(#g-cool)"/>
    <rect x="26" y="24" width="220" height="122" rx="10" fill="#c28a4b"/>
    <rect x="34" y="32" width="204" height="106" rx="6" fill="#0f2f6f"/>
    <text x="50" y="78" font-family="Poppins,Arial,sans-serif" font-weight="700" font-size="32" fill="#fff">A B C</text>
    <text x="50" y="118" font-family="Poppins,Arial,sans-serif" font-weight="600" font-size="22" fill="#ffd25a">1 + 2 = 3</text>
    <path d="M196 54l10 10 18-22" fill="none" stroke="#7ee0a3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="298" cy="86" r="32" fill="#2f8ae8"/>
    <path d="M280 68c8-6 16-4 20 2s-2 12-10 12-14 6-14 14c-6-10-6-20 4-28zM306 98c6-2 12 0 14 6-4 8-10 12-18 12 0-8 0-14 4-18z" fill="#4cc38a"/>
    <path d="M298 118v22M280 142h36" stroke="#141b93" stroke-width="5" stroke-linecap="round"/>
    <rect y="226" width="360" height="54" fill="#dbe7fb"/>
    <rect x="40" y="186" width="164" height="14" rx="5" fill="#8b5a2b"/><rect x="54" y="198" width="9" height="48" rx="3" fill="#6d4420"/><rect x="180" y="198" width="9" height="48" rx="3" fill="#6d4420"/>
    <use href="#book-art" x="60" y="152" width="60" height="44"/>
    <rect x="132" y="170" width="14" height="16" rx="3" fill="#ef6f6c"/><path d="M135 170l3-12M139 170l1-14M143 170l-1-13" stroke="#f5b400" stroke-width="3" stroke-linecap="round"/>
    <use href="#kid" x="236" y="150" width="68" height="118" style="--skin:#8d5a3b;--hair:#171212;--shirt:#fff"/>
    <use href="#book-art" x="244" y="204" width="50" height="37"/>
  </g>
  <use href="#star-art" x="328" y="-6" width="30" height="30"/>
</symbol>

<symbol id="scene-fund2" viewBox="-16 -16 392 312">
  <g clip-path="url(#cp-etapa)">
    <rect width="360" height="280" fill="url(#g-dusk)"/>
    <g fill="#fff" opacity=".8"><circle cx="40" cy="34" r="2"/><circle cx="96" cy="64" r="1.600"/><circle cx="170" cy="28" r="2.200"/><circle cx="224" cy="70" r="1.600"/><circle cx="330" cy="30" r="2"/><circle cx="70" cy="110" r="1.400"/><circle cx="260" cy="26" r="1.400"/></g>
    <circle cx="276" cy="86" r="34" fill="#ffc21a"/>
    <ellipse cx="276" cy="86" rx="58" ry="13" fill="none" stroke="#fff" stroke-width="4" transform="rotate(-18 276 86)" opacity=".9"/>
    <path d="M242 98a36 36 0 0 0 66-12" fill="none" stroke="#f5a800" stroke-width="0"/>
    <g fill="none" stroke="#8fb4ff" stroke-width="3" opacity=".75">
      <ellipse cx="90" cy="96" rx="52" ry="19"/><ellipse cx="90" cy="96" rx="52" ry="19" transform="rotate(60 90 96)"/><ellipse cx="90" cy="96" rx="52" ry="19" transform="rotate(120 90 96)"/>
    </g>
    <circle cx="90" cy="96" r="8" fill="#ffc21a"/>
    <rect y="226" width="360" height="54" fill="#0c1470"/>
    <rect x="30" y="190" width="190" height="14" rx="5" fill="#e9eefc"/><rect x="44" y="202" width="9" height="46" rx="3" fill="#aab8e6"/><rect x="198" y="202" width="9" height="46" rx="3" fill="#aab8e6"/>
    <path d="M60 190l8-48h70l8 48z" fill="#c9d4f5"/>
    <rect x="68" y="146" width="62" height="40" rx="3" fill="#0b1b6b"/>
    <path d="M76 176l14-12 12 6 18-18 6 4" fill="none" stroke="#ffc21a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="52" y="186" width="94" height="6" rx="3" fill="#dfe6fb"/>
    <path d="M168 190v-22l-10-24h30l-10 24v22z" fill="#cfe0ff" opacity=".95"/><path d="M162 160h26l-4 10h-18z" fill="#3dbb7d"/>
    <use href="#kid-long" x="246" y="148" width="68" height="118" style="--skin:#f0c3a0;--hair:#1a1210;--shirt:#fff"/>
  </g>
  <use href="#star-art" x="328" y="150" width="26" height="26"/>
</symbol>
`;
