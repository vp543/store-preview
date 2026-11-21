// Hand-built SVG illustrations for sample posts. No stock photos, no real-store imagery.
(function (root) {
  // Midnight & champagne: 'plum' is the line colour (champagne), fills are muted jewel tones.
  const C = { plum: '#E2C68C', coral: '#8E2A3E', sun: '#C9A45E', mint: '#3E6E61', lilac: '#2A2030',
    white: '#F3ECE4', fur: '#C7A27A', furDark: '#7D5638', wine: '#5E1328', glass: '#2C3B44', skin: '#C99B7E', skin2: '#7A5038' };
  const S = `stroke="${C.plum}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`;

  function dog(x, y, s, clean) {
    const t = `transform="translate(${x} ${y}) scale(${s})"`;
    const fluff = clean ? '' :
      `<path d="M-38 -30 l-10 -8 M-42 -8 l-12 -2 M38 -30 l10 -8 M42 -8 l12 -2 M-20 -44 l-4 -12 M20 -44 l4 -12" ${S} fill="none"/>
       <path d="M-30 18 q8 6 0 12 M30 18 q-8 6 0 12" ${S} fill="none"/>`;
    const extra = clean
      ? `<path d="M-14 34 l-16 -10 v20 z M14 34 l16 -10 v20 z" fill="${C.coral}" ${S}/><circle cx="0" cy="34" r="6" fill="${C.coral}" ${S}/>
         <path d="M48 -40 l4 -10 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 z" fill="${C.sun}" ${S}/>`
      : `<path d="M-52 -54 q6 -10 12 0" ${S} fill="none"/><path d="M44 -58 q6 -10 12 0" ${S} fill="none"/>`;
    return `<g ${t}>
      <path d="M-40 -30 q-22 10 -14 46 q14 4 20 -14 z" fill="${C.furDark}" ${S}/>
      <path d="M40 -30 q22 10 14 46 q-14 4 -20 -14 z" fill="${C.furDark}" ${S}/>
      <ellipse cx="0" cy="0" rx="40" ry="42" fill="${C.fur}" ${S}/>
      ${fluff}
      ${clean ? `<path d="M-20 -8 q6 -7 12 0 M8 -8 q6 -7 12 0" ${S} fill="none"/>` : `<circle cx="-14" cy="-8" r="5" fill="${C.plum}"/><circle cx="14" cy="-8" r="5" fill="${C.plum}"/><path d="M-22 -20 l12 4 M22 -20 l-12 4" ${S}/>`}
      <ellipse cx="0" cy="10" rx="9" ry="6" fill="${C.plum}"/>
      ${clean ? `<path d="M-12 20 q12 12 24 0" ${S} fill="none"/>` : `<path d="M-10 24 q10 -6 20 0" ${S} fill="none"/>`}
      ${extra}
    </g>`;
  }

  function person(x, y, s, shirt, skin) {
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <path d="M-42 70 q0 -50 42 -50 q42 0 42 50 z" fill="${shirt}" ${S}/>
      <circle cx="0" cy="-12" r="26" fill="${skin}" ${S}/>
      <path d="M-26 -16 q4 -30 26 -30 q24 0 26 26 q-20 -6 -34 -18 q-6 14 -18 22 z" fill="${C.plum}"/>
      <circle cx="-9" cy="-8" r="3" fill="${C.plum}"/><circle cx="9" cy="-8" r="3" fill="${C.plum}"/>
      <path d="M-8 4 q8 7 16 0" ${S} fill="none"/>
    </g>`;
  }

  function bottle(x, y, s, body, label) {
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <path d="M-8 -70 h16 v26 q22 10 22 34 v70 q0 6 -6 6 h-48 q-6 0 -6 -6 v-70 q0 -24 22 -34 z" fill="${body}" ${S}/>
      <rect x="-20" y="6" width="40" height="34" rx="4" fill="${label}" ${S}/>
      <rect x="-10" y="-80" width="20" height="12" rx="3" fill="${C.coral}" ${S}/>
    </g>`;
  }

  function wineGlass(x, y, s, fillc) {
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <path d="M-26 -50 h52 q2 40 -26 48 q-28 -8 -26 -48 z" fill="${C.white}" ${S}/>
      <path d="M-24 -32 h48 q-4 26 -24 30 q-20 -4 -24 -30 z" fill="${fillc}"/>
      <path d="M0 -2 v40 M-20 40 h40" ${S}/>
    </g>`;
  }

  function star(x, y, r, fillc) {
    const pts = [];
    for (let i = 0; i < 10; i++) {
      const a = Math.PI / 5 * i - Math.PI / 2, rr = i % 2 ? r * 0.45 : r;
      pts.push((x + rr * Math.cos(a)).toFixed(1) + ',' + (y + rr * Math.sin(a)).toFixed(1));
    }
    return `<polygon points="${pts.join(' ')}" fill="${fillc}" ${S}/>`;
  }

  function bubbles(list) {
    return list.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${C.white}" ${S} stroke-width="4"/>`).join('');
  }

  const ART = {
    beforeafter: () => `<rect x="100" y="0" width="100" height="200" fill="${C.mint}"/>
      ${dog(52, 104, 0.82, false)}${dog(150, 104, 0.82, true)}
      <path d="M100 10 v180" ${S} stroke-dasharray="10 10"/>`,
    star: () => `${star(100, 70, 46, C.sun)}${dog(100, 136, 0.7, true)}`,
    groomer: () => `${person(100, 96, 1, C.mint, C.skin)}<g transform="translate(150 140) rotate(-30)"><circle cx="-10" cy="10" r="10" fill="${C.white}" ${S}/><circle cx="10" cy="10" r="10" fill="${C.white}" ${S}/><path d="M-6 2 l26 -40 M6 2 l-26 -40" ${S}/></g>`,
    bath: () => `<path d="M30 110 h140 v20 q0 40 -40 40 h-60 q-40 0 -40 -40 z" fill="${C.white}" ${S}/>${dog(100, 92, 0.62, true)}
      <path d="M30 110 h140" ${S}/>${bubbles([[42, 98, 12], [62, 84, 8], [150, 90, 14], [170, 70, 8], [128, 60, 6]])}`,
    bandana: () => `${dog(100, 90, 0.8, true)}<path d="M50 130 h100 l-50 50 z" fill="${C.coral}" ${S}/>
      <circle cx="80" cy="144" r="5" fill="${C.white}"/><circle cx="110" cy="150" r="5" fill="${C.white}"/><circle cx="98" cy="166" r="4" fill="${C.white}"/>`,
    tip: () => `<circle cx="100" cy="86" r="46" fill="${C.sun}" ${S}/><path d="M82 132 h36 v20 h-36 z M88 160 h24" fill="${C.white}" ${S}/>
      <path d="M86 92 q14 -24 28 0 M100 70 v40" ${S} fill="none"/><path d="M40 40 l-14 -14 M160 40 l14 -14 M30 90 h-18 M170 90 h18" ${S}/>`,
    treat: () => `<g transform="rotate(-18 100 110)"><path d="M48 96 a16 16 0 1 1 22 -16 h60 a16 16 0 1 1 22 16 a16 16 0 1 1 -22 16 h-60 a16 16 0 1 1 -22 -16 z" fill="${C.fur}" ${S}/></g>
      ${star(156, 46, 14, C.white)}${star(44, 160, 10, C.white)}`,
    review: () => `<rect x="24" y="40" width="152" height="120" rx="18" fill="${C.white}" ${S}/>
      ${[44, 72, 100, 128, 156].map(x => star(x, 82, 14, C.sun)).join('')}
      <path d="M48 116 h104 M48 138 h70" ${S}/>`,
    calendar: () => `<rect x="34" y="40" width="132" height="124" rx="14" fill="${C.white}" ${S}/><path d="M34 74 h132" ${S}/>
      <rect x="34" y="40" width="132" height="34" rx="14" fill="${C.coral}" ${S}/><path d="M66 28 v24 M134 28 v24" ${S}/>
      <circle cx="112" cy="120" r="20" fill="${C.sun}" ${S}/><path d="M104 120 l6 6 l12 -12" ${S} fill="none"/>
      <path d="M58 102 h14 M58 126 h14 M58 148 h14 M84 148 h14" ${S}/>`,
    wine: () => `${bottle(76, 104, 1, C.wine, C.lilac)}${wineGlass(146, 120, 0.9, C.wine)}${star(160, 40, 14, C.sun)}`,
    newarrival: () => `<path d="M30 110 h140 v64 h-140 z" fill="${C.furDark}" ${S}/><path d="M30 110 l20 -24 h100 l20 24" fill="${C.fur}" ${S}/>
      ${bottle(76, 82, 0.62, C.wine, C.sun)}${bottle(124, 82, 0.62, C.mint, C.white)}<path d="M84 142 h32" ${S}/>`,
    pairing: () => `<path d="M40 130 q60 -80 120 0 z" fill="${C.sun}" ${S}/><path d="M56 118 q44 -40 88 0" fill="none" stroke="${C.mint}" stroke-width="12" stroke-linecap="round"/>
      <circle cx="80" cy="112" r="6" fill="${C.coral}"/><circle cx="104" cy="104" r="6" fill="${C.coral}"/><circle cx="124" cy="114" r="6" fill="${C.coral}"/>
      ${wineGlass(160, 96, 0.6, '#F3E38B')}`,
    gameday: () => `<g transform="rotate(-24 100 100)"><ellipse cx="100" cy="100" rx="60" ry="36" fill="${C.furDark}" ${S}/><path d="M76 100 h48 M88 92 v16 M100 92 v16 M112 92 v16" stroke="${C.white}" stroke-width="5" stroke-linecap="round"/></g>${star(164, 44, 12, C.sun)}${star(40, 160, 10, C.white)}`,
    beer: () => `<path d="M60 60 h70 v110 q0 10 -10 10 h-50 q-10 0 -10 -10 z" fill="${C.sun}" ${S}/><path d="M130 84 h18 q12 0 12 12 v30 q0 12 -12 12 h-18" fill="none" ${S}/>
      <path d="M54 66 q0 -22 20 -18 q8 -16 26 -8 q18 -10 28 8 q16 0 10 18 z" fill="${C.white}" ${S}/><path d="M80 100 v56 M106 100 v56" stroke="${C.white}" stroke-width="5" stroke-linecap="round" opacity=".7"/>`,
    tasting: () => `${wineGlass(70, 110, 0.85, C.wine)}${wineGlass(130, 110, 0.85, '#F3E38B')}<path d="M82 52 l18 -18 l18 18" ${S} fill="none"/>${star(100, 26, 10, C.sun)}`,
    staff: () => `${person(72, 100, 0.8, C.coral, C.skin)}${person(132, 104, 0.8, C.mint, C.skin2)}`,
    gift: () => `<rect x="44" y="88" width="112" height="84" rx="8" fill="${C.coral}" ${S}/><rect x="36" y="68" width="128" height="26" rx="6" fill="${C.coral}" ${S}/>
      <path d="M100 68 v104" stroke="${C.sun}" stroke-width="14"/><path d="M100 68 v104" ${S} fill="none" stroke-width="0"/>
      <path d="M100 68 q-40 -40 -40 -10 q0 14 40 10 q40 4 40 -10 q0 -30 -40 10" fill="${C.sun}" ${S}/>`,
    bag: () => `<path d="M48 70 h104 l10 104 h-124 z" fill="${C.coral}" ${S}/><path d="M76 70 v-14 q0 -24 24 -24 q24 0 24 24 v14" fill="none" ${S}/>${star(100, 122, 22, C.sun)}`,
    behind: () => `<rect x="24" y="110" width="152" height="66" rx="8" fill="${C.furDark}" ${S}/>${person(100, 72, 0.72, C.mint, C.skin2)}
      <rect x="128" y="88" width="34" height="26" rx="4" fill="${C.white}" ${S}/><path d="M24 132 h152" ${S}/>`,
    customer: () => `${person(100, 98, 0.95, C.sun, C.skin)}<path d="M52 140 h36 l6 40 h-48 z" fill="${C.coral}" ${S}/><path d="M60 140 q10 -20 20 0" fill="none" ${S}/>`,
    sale: () => `<path d="M40 60 h76 l50 50 l-56 56 l-50 -50 z" fill="${C.sun}" ${S}/><circle cx="66" cy="84" r="10" fill="${C.white}" ${S}/>
      <text x="112" y="132" text-anchor="middle" font-family="Bricolage Grotesque, sans-serif" font-weight="800" font-size="34" fill="${C.plum}" transform="rotate(45 112 124)">%</text>`,
    owner: () => `${person(100, 96, 1, C.coral, C.skin2)}<path d="M150 50 q14 -18 28 0" ${S} fill="none"/><path d="M146 36 q22 -28 44 0" ${S} fill="none" opacity=".6"/>`,
    bubbly: () => `${bottle(80, 106, 0.95, '#2F6B4F', C.sun)}${wineGlass(146, 118, 0.85, '#F3E38B')}
      ${[[132, 52, 5], [150, 38, 4], [164, 58, 5], [120, 34, 3]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${C.white}" ${S} stroke-width="3"/>`).join('')}`,
    clover: () => `<g transform="translate(100 92)">${[0, 90, 180, 270].map(a => `<g transform="rotate(${a})"><path d="M0 0 q-34 -10 -26 -36 q14 -14 26 4 q12 -18 26 -4 q8 26 -26 36 z" fill="#3FAE6A" ${S}/></g>`).join('')}</g>
      <path d="M100 96 q6 40 26 74" fill="none" ${S} stroke-width="7"/>${star(160, 40, 12, C.sun)}`,
    summer: () => `<circle cx="150" cy="54" r="26" fill="${C.sun}" ${S}/><path d="M150 14 v10 M150 84 v10 M110 54 h10 M180 54 h10" ${S}/>
      <rect x="34" y="104" width="112" height="70" rx="10" fill="${C.coral}" ${S}/><rect x="28" y="90" width="124" height="20" rx="6" fill="${C.white}" ${S}/>
      <path d="M62 104 v-28 h56 v28" fill="none" ${S}/><path d="M60 136 h60" stroke="${C.white}" stroke-width="6" stroke-linecap="round"/>`,
    heart: () => `<path d="M100 170 q-80 -50 -70 -100 q10 -36 46 -30 q16 4 24 24 q8 -20 24 -24 q36 -6 46 30 q10 50 -70 100 z" fill="${C.coral}" ${S}/>${star(150, 48, 12, C.sun)}`,
  };

  const BG = ['#1E1418', '#1F1A13', '#121B19', '#191421'];

  function art(key, i = 0) {
    const draw = ART[key] || ART.star;
    const bg = BG[i % BG.length];
    return `<svg viewBox="0 0 200 200" role="img" aria-hidden="true"><rect width="200" height="200" fill="${bg}"/>${draw()}</svg>`;
  }

  root.Art = { art, keys: Object.keys(ART), C };
})(window);
