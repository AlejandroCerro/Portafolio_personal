
// Menú hamburguesa
document.getElementById("menu-btn").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
  document.querySelector(".menu-open-icon").classList.toggle("hidden");
  document.querySelector(".menu-close-icon").classList.toggle("hidden");
});

// Animación al hacer scroll (sirve tanto para tecnologías como proyectos)

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target); // ya no lo observa más
    }
  });
}, { threshold: 0.2 });

// Observar todas las tarjetas
document.querySelectorAll(".tech-card").forEach(card => observer.observe(card));
