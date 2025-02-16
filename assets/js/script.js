document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".other-product-slide", {
    loop: true,
    spaceBetween: 35,
    slidesPerView: 1,

    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    speed: 800,
    centeredSlides: true,
    grabCursor: true,

    breakpoints: {
      375: { slidesPerView: 2 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
    },
  });
});

AOS.init();

AOS.init({
  offset: 120,
  delay: 0,
  duration: 700,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});
