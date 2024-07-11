document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
});

// Slider functionality (if needed)
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const indicators = document.querySelectorAll('[data-slide]');
let currentIndex = 0;

function updateSlide(position) {
    slides.style.transform = `translateX(-${position * 100}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('bg-gray-600', index === position);
    });
}

function nextSlide() {
    currentIndex = (currentIndex < slide.length - 1) ? currentIndex + 1 : 0;
    updateSlide(currentIndex);
}

let slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

prev.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slide.length - 1;
    updateSlide(currentIndex);
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
});

next.addEventListener('click', () => {
    nextSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateSlide(currentIndex);
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
    });
});