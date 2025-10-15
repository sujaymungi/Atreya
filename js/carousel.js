document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    // Get the base path depending on the environment
    const getBasePath = () => {
        // Check if we're on GitHub Pages
        if (window.location.hostname === 'sujaymungi.github.io') {
            return '/Atreya/Atreya';  // Updated to include double Atreya in path
        }
        return '';
    };

    const basePath = getBasePath();
    
    // Use relative paths that work both locally and on GitHub Pages
    const images = [
        `${basePath}/images/1.PNG`,
        `${basePath}/images/2.PNG`
    ];
    console.log('Loading images:', images);
    
    // Create image elements
    function setupCarousel() {
        images.forEach(imagePath => {
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = 'Carousel Image';
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