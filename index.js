// script.js (optional)
const heroContainer = document.querySelector('.hero-container');
const carouselContainer = document.querySelector('.corousel-container');
const slides = document.querySelectorAll('.corousel-slide');
const circles = document.querySelectorAll('.corousel-button');
const links = document.querySelectorAll('.nav-link');
const leftArrow = document.querySelector(".bx-chevron-left");
const rightArrow = document.querySelector(".bx-chevron-right");

// Hero Section

let currentIndex = 0;
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;


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


function onMouseDown(event) {
    isDragging = true;
    startPosition = event.clientX;
    console.log(startPosition);
    prevTranslate = currentTranslate;
    console.log(prevTranslate);
    heroContainer.addEventListener('mousemove', onMouseMove);
}

function onMouseMove(event) {
    if (isDragging) {
        const currentPosition = event.clientX;
        console.log(currentPosition);
        currentTranslate = currentPosition - startPosition;
        console.log(currentTranslate);
        if (currentTranslate < 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
    onMouseUp();
}

function onMouseUp() {
    isDragging = false; 
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



// Automatically advance the carousel every 3 seconds (adjust as needed)
// setInterval(nextSlide, 5000);

// Initial slide
// goToSlide(0);

// adding event listeners



// Setting active link

// links.forEach((link,index) => {
//     link.addEventListener("click", () => {
//         var current = document.querySelector("a.active");
//         console.log(links[index])
//         console.log(current);
//         current.className.replace("active","");
//         link.classList.add("active");
//     });
// });




