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

//Typing Animation

new Typed(".typing", {
  strings: [ "Web Designer", "Frontend Developer", "Freelancer"],
  typeSpeed: 90,
  backSpeed: 40,
  backDelay: 1100,
  loop: true
});

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


/* Conatct section */

gsap.registerPlugin(ScrollTrigger);

gsap.from(".contact-left", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 75%"
  },
  x: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".contact-right", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 75%"
  },
  x: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".footer-cta", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%"
  },
  opacity: 0,
  y: 80,
  duration: 1,
  ease: "power4.out"
});

gsap.from(".footer-col", {
  scrollTrigger: {
    trigger: ".footer-main",
    start: "top 85%"
  },
  opacity: 0,
  y: 40,
  stagger: 0.2,
  duration: 1,
  ease: "power3.out"
});


// Floating particals system

const canvas = document.getElementById("footerParticles");
const ctx = canvas.getContext("2d");

let particles = [];
const particleCount = 90;

let mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
};

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

window.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.depth = Math.random(); // 0 (far) → 1 (near)
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = 1 + this.depth * 3;
    this.speedY = 0.2 + this.depth * 1.2;
    this.opacity = 0.2 + this.depth * 0.6;
  }

  update() {
    this.y -= this.speedY;

    if (this.y < 0) {
      this.y = canvas.height;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    const parallaxX = (mouse.x - canvas.width / 2) * this.depth * 0.02;
    const parallaxY = (mouse.y - canvas.height / 2) * this.depth * 0.02;

    ctx.beginPath();
    ctx.arc(
      this.x + parallaxX,
      this.y + parallaxY,
      this.size,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = `rgba(138, 180, 255, ${this.opacity})`;
    ctx.shadowBlur = 20 * this.depth;
    ctx.shadowColor = "#8ab4ff";
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    p.update();
    p.draw();
  });

  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();


