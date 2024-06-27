$(document).ready(function(){
    $('.development__content').slick({
        slidesToShow: 3,     // Show 3 slides at a time on larger screens
        arrows: false,       // Hide navigation arrows
        infinite: true,      // Enable infinite loop
        autoplay: false,     // Disable autoplay
        responsive: [
            {
                breakpoint: 850,  // When screen width is 850px or less
                settings: {
                    slidesToShow: 2,    // Show 2 slides
                    dots: true,         // Show navigation dots
                    slidesToScroll: 1   // Scroll 1 slide at a time
                }
            },
            {
                breakpoint: 601,  // When screen width is 601px or less
                settings: {
                    slidesToShow: 1,    // Show 1 slide
                    dots: true,         // Show navigation dots
                    slidesToScroll: 1   // Scroll 1 slide at a time
                }
            }
        ]
    });
});