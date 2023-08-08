const swiperTop = new Swiper(".slider-top", {
  loop: true,

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

const swiperLanding = new Swiper(".slider-landing", {
  loop: true,

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

const professors = new Swiper(".professors", {
  loop: true,

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  slidesPerView: 1,
  spaceBetween: 40,

  breakpoints: {
    1175: {
      slidesPerView: 5,
    },

    881: {
      slidesPerView: 3,
    },

    601: {
      slidesPerView: 2,
    },
  },
});

const topRatings = new Swiper(".top-ratings", {
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    stopOnLastSlide: true,
  },

  initialSlide: 5,

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },

  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    1175: {
      slidesPerView: 4,
    },

    881: {
      slidesPerView: 3,
    },

    601: {
      slidesPerView: 2,
    },
  },
});
