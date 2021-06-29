$(document).ready(function(){
    new WOW({
        offset:100,
    }).init();
    $('.postSlider').slick({
        rtl:true,
        slidesToShow:3,
        slidesToScroll:1,
        centerMode: true,
        arrows:false,
        autoplay:true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
            breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });
});