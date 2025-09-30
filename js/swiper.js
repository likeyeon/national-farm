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

export { visualSwiper };
