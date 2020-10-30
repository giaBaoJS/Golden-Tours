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

//Slider Banner Home
var mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  effect: "fade",
  allowTouchMove: false,
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  navigation: {
    nextEl: ".slide-button-next",
    prevEl: ".slide-button-prev",
  },
  pagination: {
    el: ".slide-pagination-banner",
    clickable: true,
  },
});

//Slider Tour Home
var mySwiper2 = new Swiper(".swiper-container2", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetweenSlides: 15,
    },
    1200: {
      slidesPerView: 5,
      spaceBetweenSlides: 20,
    },
  },
});

//Slider News Home
var mySwiper3 = new Swiper(".swiper-container3", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
});

//Slider About us
var mySwiper4 = new Swiper(".swiper-container4", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination4",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.4,
    },
  },
});

//Slider Partner Page
var mySwiper5 = new Swiper(".swiper-container5", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  allowTouchMove: false,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      centeredSlides: true,
    },
  },
});

//Checkbox click
$('.two-ele .fcheckbox').click(function(){
  $(this).toggleClass('checkmark');
})
$('#diemden').focus(function(){
  $('.dropdown-place').addClass('active');
})

$('.dropdown-place li').click(function(){
var data = $(this).attr('data-value');
var texts = $(this).text();
  $('#diemden').attr("placeholder",texts);
})
$(document).on("click", function(e) {
  if ($(e.target).is("#diemden") === false) {
    $(".dropdown-place").removeClass("active");
  }
});