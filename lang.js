function setLang(lang) {
  const en = lang === 'en';
  document.body.classList.toggle('en', en);
  document.documentElement.lang = lang;
  const bt = document.getElementById('btn-tr');
  const be = document.getElementById('btn-en');
  if (bt && be) { bt.classList.toggle('active', !en); be.classList.toggle('active', en); }
  try { localStorage.setItem('dk_lang', lang); } catch (e) {}
}

(function init() {
  let saved = 'tr';
  try { saved = localStorage.getItem('dk_lang') || 'tr'; } catch (e) {}
  setLang(saved);
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
