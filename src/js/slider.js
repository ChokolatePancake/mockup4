$(document).ready(function(){
    $('.development__content').slick({
        slidesToShow: 3,
        arrows: false,

        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    slidesToScroll: 1
                }
            }
        ]
    });
});