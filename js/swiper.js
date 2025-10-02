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

export { visualSwiper };
export { popupSwiper };
