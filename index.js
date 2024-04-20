// script.js (optional)
const heroContainer = document.querySelector('.hero-container');
const carouselContainer = document.querySelector('.corousel-container');
const slides = document.querySelectorAll('.corousel-slide');
const circles = document.querySelectorAll('.corousel-button');
const links = document.querySelectorAll('.nav-link');
const leftArrow = document.querySelector(".bx-chevron-left");
const rightArrow = document.querySelector(".bx-chevron-right");
const checkbox = document.getElementById('check');

// Hero Section

let currentIndex = 0;
let isDragging = false;
let isHovering = false; // Variable to track if mouse is hovering over the slide
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let slideTimer; // Variable to store setInterval reference


slides.forEach(
    (slide,index) => {
        slide.style.transform = `translateX(${index * 100}%)`
    }
)

function goToSlide(index) {
    currentIndex = index;
    const translateX = -currentIndex * 100 + '%';
    carouselContainer.style.transform = `translateX(${translateX})`;
    carouselContainer.style.transition = 'all .5s ease';
    circles[currentIndex].style.backgroundColor = "#5C715E";
}

function nextSlide() {
    if (currentIndex < slides.length - 1) {
        goToSlide(currentIndex + 1);
        circles[currentIndex - 1].style.backgroundColor = "transparent"
    } else {
        goToSlide(0); // Loop back to the first slide
        circles[slides.length - 1].style.backgroundColor = "transparent"
    }
}   

function prevSlide() {
    if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
        circles[currentIndex + 1].style.backgroundColor = "transparent"
    } else {
        goToSlide(slides.length - 1); // Loop back to the first slide
        circles[0].style.backgroundColor = "transparent"
    }
}

// Mouse event listeners for dragging
heroContainer.addEventListener('mousedown', onMouseDown);
heroContainer.addEventListener('touchstart', onTouchStart);
// document.addEventListener('touchend', onTouchEnd);


function onMouseDown(event) {
    isDragging = true;
    startPosition = event.clientX;
    console.log(startPosition);
    prevTranslate = currentTranslate;
    console.log(prevTranslate);
    heroContainer.addEventListener('mousemove', onMouseMove);
}

function onTouchStart(event) {
    isDragging = true;
    startPosition = event.touches[0].clientX;
    prevTranslate = currentTranslate;
    heroContainer.addEventListener('touchmove', onTouchMove);
}

function onMouseMove(event) {
    if (isDragging) {
        const currentPosition = event.clientX;
        console.log(currentPosition);
        currentTranslate = currentPosition - startPosition;
        console.log(currentTranslate);
        if (currentPosition < startPosition) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
    onMouseUp();
}

function onTouchMove(event) {
    if (isDragging) {
        const currentPosition = event.touches[0].clientX;
        currentTranslate = prevTranslate + currentPosition - startPosition;
        if (currentPosition < startPosition) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
    onTouchEnd();
}

function onMouseUp() {
    isDragging = false; 
}

function onTouchEnd() {
    isDragging = false;
    prevTranslate = 0;
}

leftArrow.addEventListener("click", () => {
    prevSlide();
});

rightArrow.addEventListener("click", () => {
    nextSlide();
});

circles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
        circles[currentIndex].style.backgroundColor = "transparent"
        goToSlide(index)
    });
});

// Slide hover event listeners
heroContainer.addEventListener('mouseenter', () => {
    isHovering = true;
    clearInterval(slideTimer); // Pause sliding
});
heroContainer.addEventListener('mouseleave', () => {
    isHovering = false;
    slideTimer = setInterval(nextSlide, 3000); // Resume sliding
});

// Touch event listeners
heroContainer.addEventListener('touchstart', () => {
    isTouching = true;
    clearInterval(slideTimer); // Pause sliding
});
heroContainer.addEventListener('touchend', () => {
    isTouching = false;
    slideTimer = setInterval(nextSlide, 3000); // Resume sliding
});

// Automatically advance the carousel every 10 seconds (adjust as needed)
slideTimer = setInterval(nextSlide, 3000);



// Automatically advance the carousel every 3 seconds (adjust as needed)
// setInterval(nextSlide, 5000);

function toggleCheckbox() {
    checkbox.checked = !checkbox.checked;
  }

// Initial slide
goToSlide(0);






