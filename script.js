// ── Reveal on scroll ──
const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);
revealElements.forEach((el) => observer.observe(el));

// ── Footer year ──
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ── Typing effect ──
const roles = [
  "a Web Developer",
  "an App Developer",
  "an Electrical & Arduino Maker",
];
const typingRoleEl = document.getElementById("typing-role");

if (typingRoleEl) {
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const eraseSpeed = 50;
  const pauseBetween = 900;

  function type() {
    const current = roles[roleIndex];
    if (!isDeleting) {
      typingRoleEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(type, pauseBetween);
        return;
      }
    } else {
      typingRoleEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(type, isDeleting ? eraseSpeed : typeSpeed);
  }

  type();
}

// ── Lightbox ──
const lightbox     = document.getElementById("lightbox");
const lightboxImg  = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

document.querySelectorAll(".project-image-wrap").forEach((wrap) => {
  wrap.addEventListener("click", () => {
    const img = wrap.querySelector(".project-img");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  lightbox.classList.remove("active");
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);

// Close on backdrop click
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
const cards = document.querySelectorAll(
  ".card, .skill-card, .service-card, .project-card, .review-image-card, .testimonial-card"
);

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -6;
    const rotateY = ((x / rect.width) - 0.5) * 6;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

// ── Mobile hamburger menu ──
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  // Close menu when a link is tapped
  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", false);
    });
  });
}
