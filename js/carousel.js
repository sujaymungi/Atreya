document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    // Get the base URL for GitHub Pages
    const baseUrl = '/Atreya';

    // Directly specify images (you can modify this array with your image names)
    const images = [
        '1.PNG',
        '2.PNG'
    ];
    console.log('images', images);
    
    // Create image elements
    function setupCarousel() {
        images.forEach(imagePath => {
            const img = document.createElement('img');
            // Use the correct path for GitHub Pages
            img.src = `${baseUrl}/images/${imagePath}`;
            img.alt = 'Carousel Image';
            img.onerror = function() {
                console.log(`Failed to load image: ${this.src}`);
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