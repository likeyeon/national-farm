import 'wicg-inert';

/* global Swiper */
function updateSlideA11y(swiper) {
  const slides = swiper.slides;
  const looped = swiper.loopedSlides || 0;
  const total = slides.length - looped * 2;
  for (let i = 0; i < slides.length; i++) {
    slides[i].setAttribute('role', 'group');
    const realIndex =
      (slides[i].getAttribute('data-swiper-slide-index') || i % total) - 0;
    slides[i].setAttribute('aria-label', `${realIndex + 1} / ${total}`);
  }
}

function updateInertAttribute(swiper) {
  const slides = Array.from(swiper.slides);
  const total = slides.length;
  const visibleCount = swiper.slidesPerViewDynamic(); // 현재 보이는 슬라이드 개수
  const activeIndex = swiper.activeIndex;

  // 모든 슬라이드 inert 처리
  slides.forEach((slide) => slide.setAttribute('inert', ''));

  // 중심 기준 계산
  const half = Math.floor(visibleCount / 2);

  // 보이는 영역 내 슬라이드 inert 해제
  for (let i = -half; i <= half; i++) {
    const index = (activeIndex + i + total) % total; // loop일 때 음수 방지
    slides[index].removeAttribute('inert');
  }
}

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
  on: {
    init: function () {
      updateSlideA11y(this);
      updateInertAttribute(this);
    },
    slideChange: function () {
      updateSlideA11y(this);
      updateInertAttribute(this);
    },
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
  on: {
    init: function () {
      updateSlideA11y(this);
      updateInertAttribute(this);
    },
    slideChange: function () {
      updateSlideA11y(this);
      updateInertAttribute(this);
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
  on: {
    init: function () {
      updateSlideA11y(this);
      setTimeout(() => updateInertAttribute(this), 100);
    },
    slideChange: function () {
      updateSlideA11y(this);
      updateInertAttribute(this);
    },
    resize() {
      updateInertAttribute(this);
    },
  },
});

export { visualSwiper };
export { popupSwiper };
export { bannerSwiper };
