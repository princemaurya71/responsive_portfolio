function main(){
    /* Duplicate cards for infinite loop */

document.querySelectorAll(".row").forEach((row) => {
  row.innerHTML += row.innerHTML;
});

/* Detect screen width */

let speed = window.innerWidth < 768 ? 60 : 10;

/* Row 1 animation */

gsap.to(".row1", {
  x: "-50%",
  duration: speed,
  ease: "none",
  repeat: -1,
});

/* Row 2 animation */

gsap.fromTo(
  ".row2",
  {
    xPercent: -50,
  },
  {
    xPercent: 0,
    duration: speed,
    ease: "none",
    repeat: -1,
  }
);

const cards = document.querySelectorAll(".f-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});

function cursorTracking() {
  const cards = document.querySelectorAll(".f-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--x", x + "px");
      card.style.setProperty("--y", y + "px");
    });
  });
}

cursorTracking()

}

main()