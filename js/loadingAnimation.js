window.addEventListener("load", () => {

  const tl = gsap.timeline();

  // Text fade in
  tl.to(".loader-text", {
    opacity: 1,
    y: -10,
    duration: 1,
    ease: "power4.out"
  });

  // Progress bar animation
  tl.to(".loader-progress", {
    width: "100%",
    duration: 2,
    ease: "power2.inOut"
  }, "-=0.5");

  // Fade out preloader
  tl.to(".preloader", {
    y: "-100%",
    duration: 0.5,
    ease: "power4.inOut"
  });

});


window.addEventListener("load", () => {

  const text = document.querySelector(".loader-text");
  const percent = document.querySelector(".loader-percent");

  // Split text into letters
  const letters = text.textContent.split("");
  text.innerHTML = "";

  letters.forEach(letter => {
    const span = document.createElement("span");
    span.textContent = letter;
    text.appendChild(span);
  });

  const tl = gsap.timeline();

  // Letter animation
  tl.to(".loader-text span", {
    opacity: 1,
    y: 0,
    stagger: 0.08,
    duration: 0.8,
    ease: "power4.out"
  });

  // Percentage counter animation
  let obj = { count: 0 };

  tl.to(obj, {
    count: 100,
    duration: 2,
    ease: "power2.out",
    onUpdate: function () {
      percent.textContent = Math.floor(obj.count) + "%";
    }
  }, "-=0.5");

  // Slide up and reveal site
  tl.to(".preloader", {
    y: "-100%",
    duration: 1.2,
    ease: "power4.inOut"
  });

});

// Bubble Animation

gsap.utils.toArray(".bubble").forEach((bubble, i) => {

  gsap.to(bubble, {
    y: "random(-40, 50)",
    x: "random(-30, 30)",
    duration: gsap.utils.random(2, 3),
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(bubble, {
    rotation: gsap.utils.random(-15, 10),
    duration: gsap.utils.random(2, 5),
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

});