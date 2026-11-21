(function () {
  const L = window.Logic, CONTENT = window.CONTENT, art = window.Art.art;
  const p = L.parseParams(location.search);
  const T = CONTENT.types[p.type];
  const K = CONTENT.contact;
  const isDefault = p.store === L.DEFAULTS.store;
  const townLabel = p.town === L.DEFAULTS.town ? 'your town' : p.town;
  const raw = { store: p.store, town: townLabel };
  const h = L.escapeHtml;
  const t = s => h(L.fill(s, raw));            // fill trusted template with raw values, then escape everything
  const store = h(p.store), town = h(townLabel);

  const REEL_ART = { groomer: ['bath', 'beforeafter', null, 'bandana'], liquor: ['pairing', 'wine', null, 'gift'], store: ['bag', 'behind', null, 'sale'] };
  const REEL_CTA = { groomer: 'Book now', liquor: 'Visit us', store: 'Visit us' };
  const AUDIENCE = { groomer: ['Dog owners', 'Adults nearby'], liquor: ['Wine & beer lovers', 'Ages 21+ only'], store: ['Local shoppers', 'Adults nearby'] };
  const initials = p.store.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase() || 'YS';
  const handle = '@' + (p.store.toLowerCase().replace(/[^a-z0-9]+/g, '') || 'yourstore').slice(0, 24);
  const smsBody = encodeURIComponent(`Hi Keyur, I saw the marketing preview for ${p.store}. Can we set up the free 15-minute review?`);
  const smsHref = `sms:${K.phone}?&body=${smsBody}`;
  const telHref = `tel:${K.phone}`;
  const mailHref = `mailto:${K.email}?subject=${encodeURIComponent('Marketing preview for ' + p.store)}`;

  document.title = isDefault ? 'Your month, previewed' : `${p.store}: your month, previewed`;

  const sample = '<span class="sample">Sample</span>';

  // ---------- sections ----------
  const hero = `
  <header class="hero">
    <div class="dots" aria-hidden="true"><i></i><svg class="rings" viewBox="0 0 400 400"><circle cx="200" cy="200" r="190"/><circle cx="200" cy="200" r="140"/><circle cx="200" cy="200" r="92"/></svg></div>
    <p class="hero-kicker">Made for</p>
    <h1 class="hero-name"><span>${store}</span></h1>
    <p class="hero-town">${p.town === L.DEFAULTS.town ? ({ liquor: 'a liquor store near you', groomer: 'a groomer near you', store: 'a local store near you' })[p.type] : town + ', NJ'}</p>
    <p class="hero-lede">Here’s what one month of Facebook, Instagram and Google could look like for you. Scroll through, tap the posts, play the Reel.</p>
    <div class="hero-mini" aria-hidden="true">${T.posts.slice(0, 3).map((x, i) => `<div class="mini mini-${i}">${art(x.art, i)}</div>`).join('')}</div>
    <p class="hero-note">Sample preview. Nothing here has been posted.</p>
  </header>`;

  const google = `
  <section class="block" id="google">
    <div class="block-head"><h2>When someone in ${town} searches</h2>${sample}</div>
    <div class="split">
      <div class="gcard">
        <div class="gsearch"><span class="gsearch-icon" aria-hidden="true"></span>${t(T.searches[0])}</div>
        <div class="gprofile">
          <div class="gphotos">${[3, 4, 5].map((i, n) => `<div>${art(T.posts[i].art, n + 1)}</div>`).join('')}</div>
          <h3>${store}</h3>
          <p class="gstars"><span aria-hidden="true">★★★★★</span> your Google reviews here</p>
          <p class="gmeta">${h(T.category)} in ${town}</p>
          <p class="gopen"><b>Open</b> with up-to-date hours</p>
          <div class="gbtns"><span>Call</span><span>Directions</span><span>Website</span></div>
        </div>
      </div>
      <div class="fixlist">
        <p class="lead">Most people find a store on Google Maps before they ever see its Instagram. I keep your listing working for you:</p>
        <ul class="checks">
          <li>The right categories, so you show up for “${t(T.searches[0])}”</li>
          <li>Correct hours, services and new photos every week</li>
          <li>Google Posts for sales, events and new arrivals</li>
          <li>A reply to every review, good or bad</li>
          <li>Same name, address and phone on Google, Yelp, Apple Maps and Facebook</li>
        </ul>
      </div>
    </div>
  </section>`;

  const insta = `
  <section class="block" id="instagram">
    <div class="block-head"><h2>Your Instagram this month</h2>${sample}</div>
    <p class="lead">Nine example posts made for ${store}. Tap any post to read the caption and why it works.</p>
    <div class="phone">
      <div class="ig-head">
        <div class="ig-avatar">${h(initials)}</div>
        <div>
          <p class="ig-handle">${h(handle)}</p>
          <p class="ig-bio">${h(T.label)} in ${town}. ${h(T.heroLine)}</p>
        </div>
      </div>
      <div class="ig-grid">
        ${T.posts.map((x, i) => `<button class="tile" data-post="${i}" aria-label="Open sample post: ${t(x.title)}">${art(x.art, i)}<span>${t(x.title)}</span></button>`).join('')}
      </div>
    </div>
  </section>`;

  const reelScenes = T.reel.map((line, i) => {
    let body = '';
    if (i === 2) body = `<div class="chips">${T.services.map(s => `<span>${h(s)}</span>`).join('')}</div>`;
    else if (i === 4) body = `<div class="reel-btn">${REEL_CTA[p.type]}</div>`;
    else body = `<div class="reel-art">${art(REEL_ART[p.type][i], i + 1)}</div>`;
    return `<div class="scene scene-${i}"><p>${t(line)}</p>${body}${i === 3 ? '<div class="confetti" aria-hidden="true">' + '<i></i>'.repeat(14) + '</div>' : ''}</div>`;
  }).join('');

  const reel = `
  <section class="block" id="reel">
    <div class="block-head"><h2>A Reel for ${store}</h2>${sample}</div>
    <div class="split split-reel">
      <button class="reel" id="reel-btn" aria-label="Play the sample Reel">
        ${reelScenes}
        <span class="reel-play" aria-hidden="true"><svg viewBox="0 0 40 40"><path d="M14 10 l16 10 l-16 10 z" fill="currentColor"/></svg></span>
        <span class="reel-bar" aria-hidden="true"><i></i></span>
      </button>
      <div>
        <p class="lead">A 15-second Reel in five beats: a hook, the payoff, what you offer, a reason to come in now, and how to find you.</p>
        <p>For the real thing, I film in your store (${h(T.realWord)}) and edit it the way Instagram rewards: the payoff in the first second, on-screen text, trending audio, 7 to 15 seconds long.</p>
        <p class="small">Tap the Reel to play it. Sound off in this preview.</p>
      </div>
    </div>
  </section>`;

  const pr = CONTENT.proof, max = 600;
  const bar = (r, cls) => `<div class="range-row ${cls}">
      <p class="range-label">${h(r.label)}</p>
      <div class="range-track"><div class="range-fill" style="left:${r.low / max * 100}%;width:${(r.high - r.low) / max * 100}%"></div></div>
      <p class="range-val">${r.low}–${r.high} views</p></div>`;
  const proof = `
  <section class="block block-dark" id="proof">
    <div class="block-head"><h2>Real beats templates. By a lot.</h2></div>
    <p class="lead">I reviewed a local pet store’s Instagram. Their Reels made from generic franchise graphics got 53 to 86 views. Reels of real dogs in their own store got 252 to 587. That’s 3 to 11 times more people.</p>
    <div class="range" role="img" aria-label="Views per Reel: template graphics 53 to 86, real dogs in the store 252 to 587">
      ${bar(pr.template, 'is-template')}${bar(pr.real, 'is-real')}
      <div class="range-axis" aria-hidden="true"><span>0</span><span>200</span><span>400</span><span>600 views per Reel</span></div>
    </div>
    <p class="small">${h(pr.source)} For ${store}, the same idea means posting ${h(T.realWord)}.</p>
  </section>`;

  const ads = `
  <section class="block" id="ads">
    <div class="block-head"><h2>Ads only your neighbors see</h2>${sample}</div>
    <div class="split">
      <svg class="radius" viewBox="0 0 300 300" role="img" aria-label="Map showing a 5 and 10 mile ad radius around the store">
        <rect width="300" height="300" rx="24" class="map-bg"/>
        <path d="M0 80 H300 M0 190 H300 M70 0 V300 M200 0 V300 M0 260 L300 40" class="map-st" stroke-width="8"/>
        <circle cx="150" cy="150" r="128" class="map-r10" stroke-width="1.5" stroke-dasharray="4 6"/>
        <circle cx="150" cy="150" r="70" class="map-r5" stroke-width="1.5"/>
        <path d="M150 112 c-20 0 -30 16 -30 28 c0 22 30 48 30 48 s30 -26 30 -48 c0 -12 -10 -28 -30 -28 z" class="map-pin" stroke-width="2"/>
        <circle cx="150" cy="140" r="9" class="map-dot" stroke-width="2"/>
        <text x="150" y="98" text-anchor="middle" class="map-t">5 mi</text><text x="150" y="40" text-anchor="middle" class="map-t">10 mi</text>
      </svg>
      <div>
        <div class="adcard">
          <p class="ad-who"><span class="ig-avatar sm">${h(initials)}</span><b>${store}</b><em>Sponsored</em></p>
          <div class="ad-art">${art(T.posts[0].art, 2)}</div>
          <p class="ad-head">${t(T.ad.headline)}</p>
          <p class="ad-body">${t(T.ad.body)}</p>
          <span class="ad-cta">${h(T.ad.cta)}</span>
          <p class="ad-offer">${t(T.ad.offer)}</p>
        </div>
        <ul class="targets">
          <li>5–10 miles around ${town}</li>
          ${AUDIENCE[p.type].map(a => `<li${/21\+/.test(a) ? ' class="age"' : ''}>${h(a)}</li>`).join('')}
        </ul>
        <p class="small">You pay Meta directly for the ad budget, usually $5 to $20 a day, separate from your monthly package. I build, target and report on them every month: how many people saw the ad, clicked, called or asked for directions.</p>
      </div>
    </div>
  </section>`;

  const calendar = !T.calendar ? '' : `
  <section class="block" id="calendar">
    <div class="block-head"><h2>Your big selling days</h2>${sample}</div>
    <p class="lead">A liquor store’s year runs on a handful of days. Each one gets a post lined up ahead of time, and on Ads Pro, an ad to people nearby.</p>
    <div class="cal">
      ${T.calendar.map((c, i) => `
      <article class="cal-card">
        <div class="cal-art">${art(c.art, i)}</div>
        <div><p class="cal-when">${h(c.when)}</p><h3>${h(c.title)}</h3><p class="cal-idea">${t(c.idea)}</p></div>
      </article>`).join('')}
    </div>
  </section>`;

  const rules = !T.rules ? '' : `
  <section class="block" id="rules">
    <div class="rules-box">
      <div class="rules-badge" aria-hidden="true">21+</div>
      <div>
        <h2>Built for New Jersey liquor rules</h2>
        <p class="lead">Alcohol marketing comes with extra rules. Most marketers don’t know them. I follow them, so your license is never at risk.</p>
        <ul class="checks">${T.rules.map(r => `<li>${h(r)}</li>`).join('')}</ul>
        <p class="small">General guidance, not legal advice.</p>
      </div>
    </div>
  </section>`;

  const rec = L.recommendFor(p.type, CONTENT);
  const pkgCard = k => `
    <article class="pkg pkg-${k.id}${k.id === rec ? ' is-rec' : ''}">
      ${k.id === rec ? `<p class="rec-flag">Recommended for ${store}</p>` : (k.badge ? `<p class="badge">${h(k.badge)}</p>` : '')}
      <h3>${h(k.name)}</h3>
      <p class="price"><b>${h(k.price)}</b> <span>${h(k.per)}</span>${k.note ? `<em>${h(k.note)}</em>` : ''}</p>
      <p class="tagline">${h(k.tagline)}</p>
      <ul>${k.items.map(i => `<li>${h(i)}</li>`).join('')}</ul>
      ${k.fine ? `<p class="fine">${h(k.fine)}</p>` : ''}
    </article>`;
  const packages = `
  <section class="block" id="packages">
    <div class="block-head"><h2>Packages</h2></div>
    <p class="lead">Month to month. No long contracts.</p>
    <div class="pkgs">${CONTENT.packages.slice(0, 3).map(pkgCard).join('')}</div>
    <div class="pkgs pkgs-2">${CONTENT.packages.slice(3).map(pkgCard).join('')}</div>
  </section>`;

  const steps = `
  <section class="block" id="how">
    <div class="block-head"><h2>How it works</h2></div>
    <ol class="steps">${CONTENT.steps.map(([a, b]) => `<li><h3>${h(a)}</h3><p>${h(b)}</p></li>`).join('')}</ol>
  </section>`;

  const others = L.TYPES.filter(x => x !== p.type);
  const typeName = { groomer: 'a pet groomer', liquor: 'a liquor store', store: 'any other shop' };
  const cta = `
  <section class="block block-cta" id="contact">
    <h2>Let’s get more customers walking into ${store}.</h2>
    <p class="lead">Start with a free 15-minute review of your pages. No pressure, no contract.</p>
    <div class="cta-big">
      <a class="btn btn-coral" href="${smsHref}">Text me</a>
      <a class="btn btn-sun" href="${telHref}">Call ${h(K.phoneDisplay)}</a>
      <a class="btn btn-ghost" href="${mailHref}">Email ${h(K.email)}</a>
    </div>
    <p class="small">Social media marketing and local SEO for ${h(K.area)} stores.</p>
  </section>
  <footer class="foot">
    <p>Everything on this page is a sample made for this preview: the posts, offers, ad and Reel are examples, not real posts. The views comparison comes from a real Instagram review, November 2026.</p>
    <p>See the preview for ${others.map(o => `<a href="${h(L.buildLink('', { store: isDefault ? '' : p.store, town: p.town === L.DEFAULTS.town ? '' : p.town, type: o }))}">${typeName[o]}</a>`).join(' or ')}.</p>
  </footer>`;

  document.getElementById('app').innerHTML = hero + insta + reel + calendar + google + proof + ads + rules + packages + steps + cta;
  document.getElementById('cta-bar').innerHTML =
    `<a class="btn btn-coral" href="${smsHref}">Text me</a><a class="btn btn-sun" href="${telHref}">Call</a>`;

  // ---------- post sheet ----------
  const sheet = document.getElementById('sheet'), body = document.getElementById('sheet-body');
  let lastFocus = null;
  function openPost(i) {
    const x = T.posts[i];
    body.innerHTML = `
      <div class="sheet-art">${art(x.art, i)}</div>
      <div class="sheet-text">
        <p class="ig-handle"><span class="ig-avatar sm">${h(initials)}</span>${h(handle)}</p>
        <h3 id="sheet-title">${t(x.title)}</h3>
        <p class="caption">${t(x.caption)}</p>
        <div class="why"><b>Why this works</b><p>${t(x.why)}</p></div>
        <p class="small">Sample post. For the real one, I’d use a photo or video from your store.</p>
      </div>`;
    lastFocus = document.activeElement;
    sheet.hidden = false;
    document.body.classList.add('locked');
    sheet.querySelector('.sheet-close').focus();
  }
  function closePost() {
    sheet.hidden = true;
    document.body.classList.remove('locked');
    if (lastFocus) lastFocus.focus();
  }
  document.querySelectorAll('[data-post]').forEach(b => b.addEventListener('click', () => openPost(+b.dataset.post)));
  sheet.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', closePost));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !sheet.hidden) closePost(); });

  // ---------- reel ----------
  const reelBtn = document.getElementById('reel-btn');
  reelBtn.addEventListener('click', () => {
    reelBtn.classList.remove('playing');
    void reelBtn.offsetWidth;                // restart the animation
    reelBtn.classList.add('playing');
    reelBtn.setAttribute('aria-label', 'Replay the sample Reel');
  });
  reelBtn.addEventListener('animationend', e => {
    if (e.target.classList.contains('scene-4')) reelBtn.classList.add('ended');
  });
  if (new URLSearchParams(location.search).has('autoplay')) reelBtn.click();
})();
