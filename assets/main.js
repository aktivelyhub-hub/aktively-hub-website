document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => { const open = mobileMenu.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { mobileMenu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }));
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});
