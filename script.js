// ── EMAIL: Fully JS-injected — Cloudflare never sees it in HTML ──
(function () {
  var u = 'anindya23sarkar';
  var d = 'gm' + 'ail' + '.com';
  var href = 'ma' + 'ilto:' + u + '@' + d;
  var display = document.getElementById('email-display');
  var cta    = document.getElementById('email-cta');
  if (display) {
    display.href        = href;
    display.textContent = u + '@' + d;
  }
  if (cta) {
    cta.href = href;
  }
})();


// ── SCROLL PROGRESS BAR ──
(function () {
  var bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;

  function updateBar() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }

  window.addEventListener('scroll', updateBar, { passive: true });
  updateBar();
})();


// ── ACHIEVEMENT CARD ENTRANCE ANIMATION ──
(function () {
  var cards = document.querySelectorAll('.achievement-card');
  if (!cards.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var index = Array.prototype.indexOf.call(cards, entry.target);
          setTimeout(function () {
            entry.target.classList.add('ach-visible');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  cards.forEach(function (card) {
    observer.observe(card);
  });
})();


// ── EXPERIENCE CARD ENTRANCE ANIMATION ──
(function () {
  var cards = document.querySelectorAll('.exp-card');
  if (!cards.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var index = Array.prototype.indexOf.call(cards, entry.target);
          setTimeout(function () {
            entry.target.classList.add('exp-visible');
          }, index * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  cards.forEach(function (card) {
    observer.observe(card);
  });
})();


// ── MOBILE NAV TOGGLE ──
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });
})();
