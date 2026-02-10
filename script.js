// GSAP HERO ANIMATION
gsap.from(".logo", {
  y: -30,
  opacity: 0,
  duration: 1
});

gsap.from("nav ul li", {
  y: -20,
  opacity: 0,
  stagger: 0.15,
  duration: 0.8
});

gsap.from(".hero-text h1", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

gsap.from(".hero-text h2", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.7
});

gsap.from(".hero-text p, .btn", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.9,
  stagger: 0.2
});

gsap.from(".hero-img img", {
  scale: 0.7,
  opacity: 0,
  duration: 1.2,
  delay: 1
});

// Dark Mode
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Intersection Observer
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("menuOverlay");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  if (navMenu.classList.contains("active")) {
    gsap.from("#navMenu li", {
      x: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
      ease: "power2.out"
    });
  }
});

// Close menu when clicking overlay
overlay.addEventListener("click", () => {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
});


document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("open");
  });
});


// GSAP Blob Motion
gsap.to(".blob1", {
  x: 100,
  y: -80,
  duration: 12,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".blob2", {
  x: -120,
  y: 100,
  duration: 15,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".blob3", {
  x: 80,
  y: -120,
  duration: 18,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// ABOUT SECTION GSAP
gsap.from(".about-title", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%"
  },
  y: 40,
  opacity: 0,
  duration: 1
});

gsap.from(".about-text", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 75%"
  },
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.2
});

gsap.from(".about-btn", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 70%"
  },
  scale: 0.8,
  opacity: 0,
  duration: 0.6,
  delay: 0.4
});

/* Floating Image Animation */
gsap.to(".p1", {
  y: -20,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".p2", {
  y: 25,
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".p3", {
  y: -15,
  duration: 4.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});


/*Services*/

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".service-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 1,
    ease: "power3.out",
    delay: i * 0.05
  });
});


/*Team section CSS */

gsap.to(".team-floating img", {
  y: -15,
  rotation: 6,
  duration: 2,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut",
  stagger: 0.2
});
