import { bannerSwiper } from './swiper.js';

const bannerCollect = document.querySelector('.banner-collect');
const bannerSwiperMiddleButtonList = bannerCollect.querySelectorAll(
  '.button-middle-wrapper button'
);
const bannerSwiperPauseButtonList =
  bannerCollect.querySelectorAll('.button-pause');
const bannerSwiperPlayButtonList =
  bannerCollect.querySelectorAll('.button-play');

// 슬라이드 중지
function stopbannerSwiper() {
  bannerSwiperMiddleButtonList.forEach((button) => {
    button.classList.remove('is-active');
    button.setAttribute('aria-hidden', '');
  });
  bannerSwiperPlayButtonList.forEach((button) => {
    button.classList.add('is-active');
  });
  bannerSwiperPlayButtonList.forEach((button) => {
    button.removeAttribute('aria-hidden');
    bannerSwiper.autoplay.stop();
  });
}

// 슬라이드 재생
function playbannerSwiper() {
  bannerSwiperMiddleButtonList.forEach((button) => {
    button.classList.remove('is-active');
    button.setAttribute('aria-hidden', '');
  });
  bannerSwiperPauseButtonList.forEach((button) => {
    button.classList.add('is-active');
  });
  bannerSwiperPauseButtonList.forEach((button) => {
    button.removeAttribute('aria-hidden');
  });
  bannerSwiper.autoplay.start();
}

// bannerSwiperPauseButton.addEventListener('click', stopbannerSwiper);
// bannerSwiperPlayButton.addEventListener('click', playbannerSwiper);

bannerSwiperPauseButtonList.forEach((button) => {
  button.addEventListener('click', stopbannerSwiper);
});

bannerSwiperPlayButtonList.forEach((button) => {
  button.addEventListener('click', playbannerSwiper);
});
