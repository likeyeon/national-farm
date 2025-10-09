/* global Swiper */

const visualSwiper = new Swiper('.visual-swiper', {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 7000,
  },

  navigation: {
    nextEl: '.visual-banner .swiper-button-next',
    prevEl: '.visual-banner .swiper-button-prev',
  },

  on: {
    slideChange: function () {
      const currentIdx = this.realIndex + 1;
      const visualSwiperCurrentIndex = document.querySelector(
        '.visual-banner .swiper-index-current'
      );
      visualSwiperCurrentIndex.innerText = currentIdx;
    },
  },
});

const popupSwiper = new Swiper('.popup-swiper', {
  loop: true,
  speed: 300,
  autoplay: {
    delay: 7000,
  },

  navigation: {
    nextEl: '.popup .swiper-button-next',
    prevEl: '.popup .swiper-button-prev',
  },

  on: {
    slideChange: function () {
      const currentIdx = this.realIndex + 1;
      const popupSwiperCurrentIndex = document.querySelector(
        '.popup .swiper-index-current'
      );
      popupSwiperCurrentIndex.innerText = currentIdx;
    },
  },
});

const bannerSwiper = new Swiper('.banner-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  speed: 300,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.banner-collect .button-next',
    prevEl: '.banner-collect .button-prev',
  },
});

export { visualSwiper };
export { popupSwiper };
export { bannerSwiper };
