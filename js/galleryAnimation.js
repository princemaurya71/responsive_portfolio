gsap.registerPlugin(ScrollTrigger);

const track = document.querySelector(".horizontal-track");

let totalWidth = track.scrollWidth - window.innerWidth + 70;

gsap.to(track, {
  x: -totalWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-gallery",
    start: "top top",
    end: () => "+=" + totalWidth,
    scrub: 1,
    pin: true,
    anticipatePin: 1
  }
});

