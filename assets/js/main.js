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
    $(".one-time-about").slick({
        centerMode: true,
        dots: true,
        centerPadding: '100px',
        slidesToShow: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }],
    });
});