// Responsive Navbar Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  // Toggle display between none and block for mobile navigation
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
});

// Dark Mode / Light Mode Toggle
const darkModeSwitch = document.getElementById('darkModeSwitch');
const body = document.body;


darkModeSwitch.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});

// Parallax Effect for Hero Section Background on Scroll
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    const offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.4 + 'px';
  }
});