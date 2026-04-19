let slideIndex = 0;

// Hide all sections except Hero initially
document.addEventListener('DOMContentLoaded', () => {
    hideAllSections();
    createParticles();
    initDots();
});

// Hide all sections except Hero
function hideAllSections() {
    const sections = document.querySelectorAll('.content-section, .message-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}

// Show all hidden sections
function showAllSections() {
    const sections = document.querySelectorAll('.content-section, .message-section');
    sections.forEach(section => {
        section.style.display = 'block';
    });
}

// Create Floating Particles
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const emojis = ['❤️', '💖', '💗', '💓', '✨', '🌸'];
    
    for (let i = 0; i < 35; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        particle.style.animationDelay = '-' + (Math.random() * 10) + 's';
        particle.style.opacity = Math.random() * 0.6 + 0.5;
        
        container.appendChild(particle);
    }
}

// Initialize Dots for Slideshow
function initDots() {
    const dotContainer = document.getElementById('dot-container');
    if (!dotContainer) return;

    const slides = document.getElementsByClassName("mySlides");
    dotContainer.innerHTML = '';

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = () => currentSlide(i + 1);
        dotContainer.appendChild(dot);
    }
}

// Automatic Slideshow
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }

    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Go to specific slide
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

// Main Button Click - Show everything + Play Music
function startSurprise() {
    // Show all hidden sections
    showAllSections();

    // Scroll smoothly to the slideshow section
    const slideshowSection = document.getElementById('slideshow-section');
    if (slideshowSection) {
        slideshowSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // Start background music
    playMusic();

    // Start the slideshow
    showSlides();
}

// Play Background Music
function playMusic() {
    const audio = document.getElementById("bgMusic");
    if (!audio) return;

    audio.play().then(() => {
        console.log("🎵 Music started successfully!");
    }).catch(() => {
        console.log("Music will play after user interaction.");
    });
}