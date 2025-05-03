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

let currentItem = null;
let selectedSize = null; // Добавляем переменную для хранения размера

// Функции для панели
function showPanel(imgSrc, description) {
  currentItem = { imgSrc, description };
  selectedSize = null; // Сбрасываем выбор размера
  document.getElementById("panelImg").src = imgSrc;
  document.getElementById("panelContent").innerHTML = description;
  document.getElementById("sidePanel").classList.add("open");
  
  // Обновляем текст выбранного размера
  document.getElementById("selected-size-text").textContent = "Выберите размер";
  
  // Сбрасываем активные кнопки размеров
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.classList.remove('active');
  });
}

// Обработчик выбора размера
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      // Удаляем активный класс у всех кнопок
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      
      // Добавляем активный класс текущей кнопке
      this.classList.add('active');
      
      // Сохраняем выбранный размер
      selectedSize = this.dataset.size;
      document.getElementById("selected-size-text").textContent = `Выбран размер: ${selectedSize}`;
    });
  });
});

// Обновите функцию добавления в корзину
function addToCart() {
  if (!currentItem) return;
  if (!selectedSize) {
    alert('Пожалуйста, выберите размер!');
    return;
  }
  
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Добавляем размер к данным товара
  const itemWithSize = {
    ...currentItem,
    size: selectedSize
  };
  
  cart.push(itemWithSize);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCounter();
  alert(`Товар добавлен в корзину (Размер: ${selectedSize})!`);
}

function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product, .item'); // Для всех страниц
    
    products.forEach(product => {
      const title = product.querySelector('p').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
        product.style.display = 'block';
        product.classList.add('search-highlight');
        setTimeout(() => {
          product.classList.remove('search-highlight');
        }, 2000);
      } else {
        product.style.display = 'none';
      }
    });
  }
  
 