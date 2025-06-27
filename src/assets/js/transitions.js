;document.addEventListener('astro:page-load', function () {
  if (window.zaraz && window.zaraz !== undefined) {
    window.zaraz.spaPageview();
  }
  if (document.getElementById('disqus_thread')) {
    lazyLoadDisqus();
  }
  window.initCardLinks();
})
