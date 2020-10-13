jQuery(document).ready(function($) {
    console.log("hihi");
    $(".one-time-partner").slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }],
    });
});