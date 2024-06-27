
// Initialize the Slick slider for mentors section when the document is ready
$(document).ready(function() {
    $('.mentors__content').slick({
        slidesToShow: 1,     // Show one slide at a time
        autoplay: true,      // Enable autoplay
        speed: 500,          // Transition speed in milliseconds
        autoplaySpeed: 10000,// Time between slide changes in milliseconds
        infinite: true,      // Enable infinite loop
        dots: true           // Show navigation dots
    });
});