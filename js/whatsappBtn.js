const toggleBtn = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");
const closeBtn = document.getElementById("closeChat");

// toggleBtn.onclick = () => {
// chatBox.style.display = "block";
// };

// closeBtn.onclick = () => {
// chatBox.style.display = "none";
// };

document.querySelectorAll(".quick-msg").forEach((btn) => {
  btn.addEventListener("click", () => {
    let message = btn.getAttribute("data-msg");
    let url = "https://wa.me/919167853886?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
  });
});

let scrollTimer;

const whatsappWidget = document.querySelector(".whatsapp-widget");
window.addEventListener("scroll", () => {
  whatsappWidget.classList.add("hide");
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    whatsappWidget.classList.remove("hide");
  }, 500);
});

if (window.innerWidth < 768) {
  let scrollTimer;
  const whatsappWidget = document.querySelector(".whatsapp-widget");
  window.addEventListener("scroll", () => {
    whatsappWidget.classList.add("hide");
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      whatsappWidget.classList.remove("hide");
    }, 500);
  });
}
