const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".banner-swiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".banner-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".banner-button-next",
        prevEl: ".banner-button-prev"
    },
    // on: {
    //     autoplayTimeLeft(s, time, progress) {
    //         progressCircle.style.setProperty("--progress", 1 - progress);
    //         progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    //     }
    // }
});