// script.js (optional)
const carouselContainer = document.querySelector('.corousel-container');
const slides = document.querySelectorAll('.corousel-slide');
const circles = document.querySelectorAll('.corousel-button');
const links = document.querySelectorAll('.nav-link');

// Hero Section

let currentIndex = 0;

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
    circles[currentIndex].style.backgroundColor = "#fff";
}

function nextSlide() {
    if (currentIndex < slides.length - 1) {
        goToSlide(currentIndex + 1);
        circles[currentIndex - 1].style.backgroundColor = "#201e1e"
    } else {
        goToSlide(0); // Loop back to the first slide
        circles[slides.length - 1].style.backgroundColor = "#201e1e"
    }
}   
circles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
        circles[currentIndex].style.backgroundColor = "#201e1e"
        goToSlide(index)
    });
})


// Automatically advance the carousel every 3 seconds (adjust as needed)
setInterval(nextSlide, 5000);

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




