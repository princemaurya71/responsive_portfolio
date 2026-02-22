const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

/* Track mouse */
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.left = mouseX + "px";
  dot.style.top = mouseY + "px";
});

/* Smooth follower animation */
function animate() {
  outlineX += (mouseX - outlineX) * 0.1;
  outlineY += (mouseY - outlineY) * 0.1;

  outline.style.left = outlineX + "px";
  outline.style.top = outlineY + "px";

  requestAnimationFrame(animate);
}
animate();

/* Hover detection */
const hoverElements = document.querySelectorAll("a, button, i");

hoverElements.forEach(el => {
  el.addEventListener("mouseenter", () => {
    outline.classList.add("cursor-hover");
  });
  el.addEventListener("mouseleave", () => {
    outline.classList.remove("cursor-hover");
  });
});

