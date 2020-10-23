jQuery(document).ready(function ($) {
  console.log("hihi");
  $(".one-time-partner").slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
//Scroll to top
$(window).scroll(function () {
  if ($(this).scrollTop() >= 500) {
    $("#return-to-top").fadeIn(300);
  } else {
    $("#return-to-top").fadeOut(300);
  }
});
$("#return-to-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
});
$(".hamburger-btn").click(function (e) {
  e.stopPropagation();
  $(this).addClass("active");
  $(".main-menu").addClass("active");
});
$("html").click(function () {
  $(".hamburger-btn").removeClass("active");
  $(".main-menu").removeClass("active");
});
