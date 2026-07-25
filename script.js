// ---------- mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  document.querySelectorAll('.nav-mobile-links a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// ---------- scroll reveal ----------
const revealTargets = document.querySelectorAll(
  '.about-grid, .skills-grid, .timeline-item, .project-card, .contact-inner'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => io.observe(el));

// ---------- active nav link on scroll ----------
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-pill a, .nav-mobile-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--signal-bright)' : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(sec => sectionObserver.observe(sec));
