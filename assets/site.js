document.addEventListener('DOMContentLoaded', function () {
  var dock = document.getElementById('egDock');
  if (dock) dock.classList.remove('hide');

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: .12, rootMargin: '0px 0px -60px 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
});

/* animated counters (impact page) */
(function () {
  var els = document.querySelectorAll('.counter-val');
  if (!els.length) return;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function run(el) {
    var target = parseFloat(el.dataset.target || '0');
    var suffix = el.dataset.suffix || '';
    if (reduce) { el.textContent = target + suffix; return; }
    var t0 = null, dur = 1600;
    function tick(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      p = 1 - Math.pow(1 - p, 3);
      var v = target * p;
      el.textContent = (target % 1 ? v.toFixed(1) : Math.round(v)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
    });
  }, { threshold: .4 });
  els.forEach(function (el) { io.observe(el); });
})();
