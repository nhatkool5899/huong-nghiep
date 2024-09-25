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

var swiper = new Swiper('.schedule-swiper', {
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.schedule-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.schedule-button-next',
        prevEl: '.schedule-button-prev',
    }
});


// Menu mobile click

$('.btn_show-menu').click(function(){
    $('.nav_mobile-menu').addClass('active');
    $('.nav_mobile-list').addClass('active');
})
  
$('.nav_mobile-menu').click(function(e){
    if(e.target === e.currentTarget){
    $('.nav_mobile-list').removeClass('active');
    $(this).removeClass('active');
    }
})

$('.btn-close-nav').click(function(){
    $('.nav_mobile-menu').removeClass('active');
    $('.nav_mobile-list').removeClass('active');
})
    
$('.slide-drop').click(function(){


    var submenu = $(this).find('.submobile');
    
    if (submenu.is(':visible')) {
    $(this).find('.nav_mobile-item').removeClass('active');
    submenu.stop().slideUp();
    } else {
    $(this).find('.nav_mobile-item').addClass('active');
    $('.submobile').stop().slideUp();
    submenu.stop().slideDown();
    }
});
  
$('.submobile').click(function(event){
    event.stopPropagation();
});


$('.slide-child').click(function(){

    var submenu = $(this).find('.submobile-child');
    
    if (submenu.is(':visible')) {
    submenu.stop().slideUp();
    } else {
    $('.submobile-child').stop().slideUp();

    submenu.stop().slideDown();
    }
});

$('.submobile-child').click(function(event){
    event.stopPropagation();
});