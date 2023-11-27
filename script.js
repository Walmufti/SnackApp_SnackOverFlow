//script for sliding imges and title
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const progressBar = document.querySelector('.slide-progress-bar');
let currentIndex = 0;
let slideInterval;

// Add swipe navigation listeners
let startX, endX;
slideContainer.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});
slideContainer.addEventListener('touchend', e => {
  endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    showNextSlide();
  } else if (endX - startX > 50) {
    showPreviousSlide();
  }
});

// Show next slide
function showNextSlide() {
  slides[currentIndex].classList.remove('active-slide');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active-slide');
}

// Show previous slide
function showPreviousSlide() {
  slides[currentIndex].classList.remove('active-slide');
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].classList.add('active-slide');
}

// Initialize slider
slides[currentIndex].classList.add('active-slide');
startProgressBar();
