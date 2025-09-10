
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
const menuOpenIcon = document.querySelector('.menu-open-icon');
const menuCloseIcon = document.querySelector('.menu-close-icon');

btn.addEventListener("click", () => {
menu.classList.toggle("hidden");
menuOpenIcon.classList.toggle("hidden");
menuCloseIcon.classList.toggle("hidden");
});



// Animación para las tecnologías al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
const techCards = document.querySelectorAll('.tech-card');

// Crear el observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        // Cuando la tarjeta es visible en el viewport
        setTimeout(() => {
        entry.target.classList.add('visible');
        }, 100);
        observer.unobserve(entry.target); // Dejar de observar después de activar
    }
    });
}, {
    threshold: 0.2, // Activar cuando el 20% del elemento es visible
});

// Observar cada tarjeta de tecnología
techCards.forEach(card => {
    observer.observe(card);
});
});