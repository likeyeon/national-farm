import { popupSwiper } from './swiper.js';

const popupSwiperBanner = document.querySelector('.popup');
const popupSwiperPlayButtonList = popupSwiperBanner.querySelectorAll(
  '.play-button-wrapper button'
);
const popupSwiperPauseButton = popupSwiperBanner.querySelector(
  '.swiper-button-pause'
);
const popupSwiperPlayButton = popupSwiperBanner.querySelector(
  '.swiper-button-play'
);

// 슬라이드 중지
function stoppopupSwiper() {
  popupSwiperPlayButtonList.forEach((button) => {
    button.classList.remove('is-active');
    button.setAttribute('aria-hidden', '');
  });
  popupSwiperPlayButton.classList.add('is-active');
  popupSwiperPlayButton.removeAttribute('aria-hidden');
  popupSwiper.autoplay.stop();
}

// 슬라이드 재생
function playpopupSwiper() {
  popupSwiperPlayButtonList.forEach((button) => {
    button.classList.remove('is-active');
    button.setAttribute('aria-hidden', '');
  });
  popupSwiperPauseButton.classList.add('is-active');
  popupSwiperPauseButton.removeAttribute('aria-hidden');
  popupSwiper.autoplay.start();
}

popupSwiperPauseButton.addEventListener('click', stoppopupSwiper);
popupSwiperPlayButton.addEventListener('click', playpopupSwiper);
