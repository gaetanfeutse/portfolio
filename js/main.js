/* ===== SCROLL PROGRESS BAR ===== */
const progressBar = document.querySelector('.progress-bar');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (scrollTop / docHeight) * 100 + '%';
  });
}

/* ===== NAVBAR SCROLL EFFECT ===== */
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  });
}

/* ===== HAMBURGER / MOBILE NAV ===== */
const hamburger = document.querySelector('.hamburger');
const navOverlay = document.querySelector('.nav-overlay');

if (hamburger && navOverlay) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navOverlay.classList.toggle('open');
    document.body.style.overflow = navOverlay.classList.contains('open') ? 'hidden' : '';
  });

  navOverlay.querySelectorAll('.nav-overlay__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ===== TYPING ANIMATION ===== */
const typingEl = document.getElementById('typing');
if (typingEl) {
  const words = ['Web Developer', 'Technical Consultant', 'Full Stack Engineer', 'Founder & CEO'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = words[wordIndex];
    if (isDeleting) {
      typingEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 45 : 95;
    if (!isDeleting && charIndex === current.length) {
      speed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 400;
    }
    setTimeout(type, speed);
  }
  setTimeout(type, 1200);
}

/* ===== SCROLL REVEAL ===== */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
if (revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
}
