// Pure helpers shared by the page (window.Logic) and the Node tests.
(function (root) {
  const TYPES = ['groomer', 'liquor', 'store'];
  const DEFAULTS = { store: 'Your Store', town: 'your town', type: 'liquor' }; // liquor stores lead

  function collapse(s) {
    return String(s == null ? '' : s).replace(/\s+/g, ' ').trim();
  }

  function cleanName(s, max = 40) {
    const c = collapse(s);
    return c.length > max ? c.slice(0, max - 1).trimEnd() + '…' : c;
  }

  function parseParams(search) {
    const q = new URLSearchParams(search || '');
    const store = cleanName(q.get('store')) || DEFAULTS.store;
    const town = cleanName(displayTown(q.get('town')), 30) || DEFAULTS.town;
    const t = collapse(q.get('type')).toLowerCase();
    return { store, town, type: !t ? DEFAULTS.type : TYPES.includes(t) ? t : 'store' };
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function townTag(town) {
    const t = collapse(town);
    if (!t || t.toLowerCase() === DEFAULTS.town) return '#ShopLocalNJ';
    const base = t.replace(/,?\s*(NJ|New Jersey)\.?$/i, '').replace(/[^A-Za-z0-9]/g, '');
    return '#' + base + 'NJ';
  }

  function displayTown(town) {
    return collapse(town).replace(/,?\s*(NJ|New Jersey)\.?$/i, '');
  }

  function fill(template, vars) {
    return String(template).replace(/\{(store|town|townTag)\}/g, (_, k) =>
      k === 'townTag' ? townTag(vars.town) : vars[k]);
  }

  function buildLink(base, { store, town, type }) {
    const q = new URLSearchParams();
    if (collapse(store)) q.set('store', collapse(store));
    if (collapse(town)) q.set('town', collapse(town));
    q.set('type', TYPES.includes(type) ? type : 'store');
    return base + '?' + q.toString();
  }

  function recommendFor(type, content) {
    return (content.types[type] || content.types.store).recommend;
  }

  const api = { TYPES, DEFAULTS, parseParams, escapeHtml, cleanName, townTag, fill, displayTown, buildLink, recommendFor };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Logic = api;
})(typeof window !== 'undefined' ? window : globalThis);
