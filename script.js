document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    fadeElements.forEach(el => observer.observe(el));

    const slider = document.querySelector(".product-slider");
    const scrollStep = 320;

    document.querySelector(".arrow.right").addEventListener("click", () => {
        slider.scrollBy({ left: scrollStep, behavior: "smooth" });
    });

    document.querySelector(".arrow.left").addEventListener("click", () => {
        slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
    });
});

function scrollSlider(direction) {
    const slider = document.querySelector('.product-slider');
    const scrollAmount = 300;
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

