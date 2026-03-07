gsap.registerPlugin(ScrollTrigger);
const cards = gsap.utils.toArray(".card");
cards.forEach((card, i) => {
  if (i !== cards.length - 1) {
    gsap.to(card, {
      scale: 0.9,
      scrollTrigger: {
        trigger: ".stack-section",
        start: () => "top -" + window.innerHeight * i,
        end: () => "+=" + window.innerHeight,
        scrub: true,
      },
    });
    gsap.from(cards[i + 1], {
      y: window.innerHeight,
      scrollTrigger: {
        trigger: ".stack-section",
        start: () => "top -" + window.innerHeight * i,
        end: () => "+=" + window.innerHeight,
        scrub: true,
      },
    });
  }
});

// ENTRY ANIMATIONS
gsap.from(".about-image img", {
  x: -100,
  opacity: 0,
  duration: 1.2,
  scrollTrigger: {
    trigger: ".about-card",
    start: "top center",
  },
});

gsap.from(".about-content .cta-btn", {
  x: 10,
  opacity: 1,
  stagger: 0.3,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-card",
    start: "top center",
  },
});

gsap.from(".about-content > *", {
  y: 40,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-card",
    start: "top center",
  },
});

// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  ScrollTrigger.create({
    trigger: counter,
    start: "top 80%",
    onEnter: () => {
      let target = +counter.getAttribute("data-target");
      gsap.to(counter, {
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
      });
    },
  });
});
