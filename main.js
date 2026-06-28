// Theme toggle
const html = document.documentElement;
const toggle = document.getElementById('themeToggle');

const saved = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', saved);
if (toggle) toggle.textContent = saved === 'dark' ? '☀️' : '🌙';

if (toggle) {
  toggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    toggle.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target))
      mobileMenu.classList.remove('open');
  });
}
