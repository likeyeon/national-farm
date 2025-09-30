import { visualSwiper } from './swiper.js';

const visualSwiperBanner = document.querySelector('.visual-banner');
const visualSwiperPlayButtonList = visualSwiperBanner.querySelectorAll(
  '.play-button-wrapper button'
);
const visualSwiperPauseButton = visualSwiperBanner.querySelector(
  '.swiper-button-pause'
);
const visualSwiperPlayButton = visualSwiperBanner.querySelector(
  '.swiper-button-play'
);

// .swiper-index-last 숫자값 넣기
const visualSwiperLastIndex =
  visualSwiperBanner.querySelector('.swiper-index-last');
const visualSwiperSlideList =
  visualSwiperBanner.querySelectorAll('.swiper-slide').length;
visualSwiperLastIndex.textContent = visualSwiperSlideList;

// 슬라이드 중지
function stopVisualSwiper() {
  visualSwiperPlayButtonList.forEach((button) => {
    button.classList.remove('is-active');
    button.setAttribute('aria-hidden', '');
  });
  visualSwiperPlayButton.classList.add('is-active');
  visualSwiperPlayButton.removeAttribute('aria-hidden');
  visualSwiper.autoplay.stop();
}

// 슬라이드 재생
function playVisualSwiper() {
  visualSwiperPlayButtonList.forEach((button) => {
    button.classList.remove('is-active');
    button.setAttribute('aria-hidden', '');
  });
  visualSwiperPauseButton.classList.add('is-active');
  visualSwiperPauseButton.removeAttribute('aria-hidden');
  visualSwiper.autoplay.start();
}

visualSwiperPauseButton.addEventListener('click', stopVisualSwiper);
visualSwiperPlayButton.addEventListener('click', playVisualSwiper);
