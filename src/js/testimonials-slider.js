$(document).ready(function() {
    $('.testimonials__content').slick({
        slidesToShow: 1,     // Show 1 slide at a time
        autoplay: true,      // Enable autoplay
        speed: 500,          // Transition speed in milliseconds
        fade: true,          // Use fade transition effect
        autoplaySpeed: 10000,// Time between slide changes in milliseconds
        infinite: true,      // Enable infinite loop
        dots: true           // Show navigation dots
    });
});