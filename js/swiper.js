/* global Swiper */

const visualSwiper = new Swiper('.visual-swiper', {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.visual-banner .swiper-button-next',
    prevEl: '.visual-banner .swiper-button-prev',
  },

  pagination: {
    el: '.visual-banner .swiper-index',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return (
        '<b><span class="' +
        currentClass +
        '"></span></b>' +
        ' - ' +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },

  a11y: {
    prevSlideMessage: '이전 항목으로 이동',
    nextSlideMessage: '다음 항목으로 이동',
  },
});

const popupSwiper = new Swiper('.popup-swiper', {
  loop: true,
  speed: 300,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.popup .swiper-button-next',
    prevEl: '.popup .swiper-button-prev',
  },

  pagination: {
    el: '.popup .swiper-index',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return (
        '<b><span class="' +
        currentClass +
        '"></span></b>' +
        ' - ' +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },

  a11y: {
    prevSlideMessage: '이전 항목으로 이동',
    nextSlideMessage: '다음 항목으로 이동',
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
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.banner-collect .button-next',
    prevEl: '.banner-collect .button-prev',
  },

  a11y: {
    prevSlideMessage: '이전 항목으로 이동',
    nextSlideMessage: '다음 항목으로 이동',
  },
});

export { visualSwiper };
export { popupSwiper };
export { bannerSwiper };
