/* ============================================================
   Navbar: scroll behaviour & active link tracking
   ============================================================ */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const allNavLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

// Navbar background on scroll
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  highlightActiveLink();
});

// Highlight the nav link matching the current section in view
function highlightActiveLink() {
  let currentSection = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });
  allNavLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
  });
}

// Mobile nav toggle
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  // Animate hamburger
  const spans = navToggle.querySelectorAll('span');
  navLinks.classList.contains('open')
    ? animateOpen(spans)
    : animateClose(spans);
});

function animateOpen(spans) {
  spans[0].style.transform = 'translateY(7px) rotate(45deg)';
  spans[1].style.opacity = '0';
  spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
}

function animateClose(spans) {
  spans[0].style.transform = '';
  spans[1].style.opacity = '';
  spans[2].style.transform = '';
}

// Close mobile nav on link click
allNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    animateClose(navToggle.querySelectorAll('span'));
  });
});

/* ============================================================
   Typed-text effect in hero
   ============================================================ */
const typedEl = document.getElementById('typed-text');
const phrases = [
  'Full-Stack Developer',
  'Frontend Engineer',
  'Tech Enthusiast',
  'Open Source Contributor',
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typedEl.textContent = currentPhrase.slice(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = currentPhrase.slice(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 60 : 110;

  if (!isDeleting && charIndex === currentPhrase.length) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400;
  }

  typingTimeout = setTimeout(type, delay);
}

// Start the typing animation after a short delay
setTimeout(type, 600);

/* ============================================================
   Skill bar animations (triggered on scroll into view)
   ============================================================ */
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        fill.style.width = `${fill.dataset.width}%`;
        skillObserver.unobserve(fill);
      }
    });
  },
  { threshold: 0.3 }
);

skillFills.forEach((fill) => skillObserver.observe(fill));

/* ============================================================
   Fade-in animation for sections (scroll reveal)
   ============================================================ */
const fadeElements = document.querySelectorAll(
  '.stat-card, .skill-category, .project-card, .about-text, .about-stats'
);

// Inject keyframe styles
const style = document.createElement('style');
style.textContent = `
  .fade-hidden {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .fade-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

fadeElements.forEach((el, i) => {
  el.classList.add('fade-hidden');
  // Stagger cards within the same parent
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
});

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

fadeElements.forEach((el) => fadeObserver.observe(el));

/* ============================================================
   Contact form (demo – shows success message)
   ============================================================ */
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    showStatus('Please fill in all fields.', 'error');
    return;
  }

  if (!isValidEmail(email)) {
    showStatus('Please enter a valid email address.', 'error');
    return;
  }

  // Simulate sending (replace with real API call when ready)
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending…';

  setTimeout(() => {
    showStatus('Thanks for reaching out! I\'ll get back to you soon. 🎉', 'success');
    contactForm.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }, 1200);
});

function showStatus(msg, type) {
  formStatus.textContent = msg;
  formStatus.className = `form-status ${type}`;
  setTimeout(() => {
    formStatus.textContent = '';
    formStatus.className = 'form-status';
  }, 5000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
