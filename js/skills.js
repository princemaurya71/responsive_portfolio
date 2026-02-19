const skillCards = document.querySelectorAll('.skill-card');

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progress = entry.target.querySelector('.progress');
      const value = entry.target.getAttribute('data-progress');

      progress.style.width = value + '%';
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.3 });

skillCards.forEach(card => {
  observer1.observe(card);
});