document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    // Get the base path depending on the environment
    const getBasePath = () => {
        return window.location.hostname === 'sujaymungi.github.io' ? '/Atreya' : '';
    };

    const basePath = getBasePath();
    
    // Use the simplified path structure
    const images = [
        `${basePath}/images/1.PNG`,
        `${basePath}/images/2.PNG`
    ];
    
    // Create image elements
    function setupCarousel() {
        images.forEach((imagePath, index) => {
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = `Carousel Image ${index + 1}`;
            img.onerror = function() {
                console.error(`Failed to load image: ${this.src}`);
            };
            carouselContainer.appendChild(img);
        });
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }

    // Add event listeners
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Auto-advance carousel every 5 seconds
    setInterval(nextSlide, 5000);

    // Initialize carousel
    setupCarousel();
});