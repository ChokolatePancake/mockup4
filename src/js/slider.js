$(document).ready(function(){
    $('.development__content').slick({
        slidesToShow: 3,
        arrows: false,
        infinite: true,
        autoplay: false,
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
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    slidesToScroll: 1
                }
            }
        ]
    });
});