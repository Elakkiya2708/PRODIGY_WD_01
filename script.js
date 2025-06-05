const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const navList = document.getElementById('nav-list');
const menuToggle = document.getElementById('menu-toggle');

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Theme switcher
let darkMode = true;
themeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  body.classList.toggle('dark-theme', darkMode);
  body.classList.toggle('light-theme', !darkMode);
});

// Scroll effect for navbar shadow
window.addEventListener('scroll', () => {
  document.querySelector('.navbar').style.boxShadow =
    window.scrollY > 50 ? '0 4px 8px rgba(0,0,0,0.3)' : 'none';
});

// Scroll reveal animations
ScrollReveal().reveal('.reveal', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  reset: false
});
