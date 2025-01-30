// FullPage.js Initialization
new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    scrollOverflow: true,  // Enables scrolling inside sections if content overflows
});

// AOS Initialization
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true, // Trigger animation only once
});

// Swiper.js for Testimonials
var swiper = new Swiper('.swiper-container', {
    pagination: { el: ".swiper-pagination", clickable: true },
    loop: true,
    autoplay: { delay: 3000 },
});

// Scroll Progress Bar
window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
};

document.addEventListener("DOMContentLoaded", function() {
    new fullpage('#fullpage', {
        autoScrolling: true,
        navigation: true,
        scrollOverflow: true,
    });
});

