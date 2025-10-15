document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    // Get the base path depending on the environment
    const getBasePath = () => {
        const isGitHubPages = window.location.hostname === 'sujaymungi.github.io';
        console.log('Is GitHub Pages:', isGitHubPages);
        console.log('Current hostname:', window.location.hostname);
        
        if (isGitHubPages) {
            return '/Atreya/Atreya/wwwroot';  // Updated to match the actual file structure
        }
        return '';
    };

    const basePath = getBasePath();
    console.log('Base path:', basePath);
    
    // Use the correct path structure
    const images = [
        `${basePath}/images/1.PNG`,
        `${basePath}/images/2.PNG`
    ];
    console.log('Image paths:', images);
    
    // Create image elements
    function setupCarousel() {
        images.forEach((imagePath, index) => {
            const img = document.createElement('img');
            img.src = imagePath;
            console.log(`Loading image ${index + 1}:`, img.src);
            
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