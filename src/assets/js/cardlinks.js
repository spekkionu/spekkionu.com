import debounce from 'lodash/debounce';

;(function () {
  window.cardCache = new Set();

  const preload = debounce((el) => {
    const url = el.getAttribute('href');
    if (!url) return;
    if (window.cardCache.has(url)) return;
    let img = new Image();
    img.src = url;
    window.cardCache.add(url);
  }, 150);

  window.initCardLinks = function () {
    document.querySelectorAll('.cardlink').forEach((el) => {
      el.addEventListener('mouseover', (e) => {
        preload(el);
      });
    });
  }
  document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('cardpopup');
    document.addEventListener('click', (e) => {
      if (!e.target.classList.contains('cardlink')) return;
      e.preventDefault();
      e.stopPropagation();
      const img = document.getElementById('cardpopup-img');
      img.setAttribute('src', e.target.getAttribute('href'));
      img.setAttribute('alt', e.target.getAttribute('data-card'));
      window.cardCache.add(e.target.getAttribute('href'));
      document.body.classList.add('has-open-modal');
      document.getElementById('cardpopup').showModal();
    });
    modal.addEventListener('close', (e) => {
      document.body.classList.remove('has-open-modal');
      const img = document.getElementById('cardpopup-img');
      img.removeAttribute('src');
      img.removeAttribute('alt');
    });
    modal.addEventListener('click', (e) => {
      document.getElementById('cardpopup').close();
    });
    document.getElementById('cardpopup-close').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      document.getElementById('cardpopup').close();
    });
    window.initCardLinks();
  });
})();
