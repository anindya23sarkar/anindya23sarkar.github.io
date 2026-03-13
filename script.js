// Build email links at runtime — bypasses Cloudflare obfuscation
(function() {
  var u = 'anindya23sarkar';
  var d = 'gmail.com';
  var href = 'ma' + 'ilto:' + u + '@' + d;
  var display = document.getElementById('email-display');
  var cta = document.getElementById('email-cta');
  if (display) { display.href = href; }
  if (cta)     { cta.href = href; }
})();


const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
if (toggle && navLinks) {
  toggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );
}
