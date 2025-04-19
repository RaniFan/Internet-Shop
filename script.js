document.addEventListener("DOMContentLoaded", () => {
    // Появление элементов при скролле
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    fadeElements.forEach(el => observer.observe(el));

    // Слайдер
    const slider = document.querySelector(".product-slider");
    const scrollStep = 320;

    document.querySelector(".arrow.right").addEventListener("click", () => {
        slider.scrollBy({ left: scrollStep, behavior: "smooth" });
    });

    document.querySelector(".arrow.left").addEventListener("click", () => {
        slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
    });
});

// Модалка
function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
