import { bannerSwiper } from './swiper.js';

const bannerWrapper = document.querySelector('.banner-collect .banner-wrapper');
const bannerSwiperPlayButtonList = bannerWrapper.querySelectorAll(
  '.play-button-wrapper button'
);
const bannerSwiperPlayImgList = bannerWrapper.querySelectorAll(
  '.play-button-wrapper .button-play'
);
const bannerSwiperPauseImgList = bannerWrapper.querySelectorAll(
  '.play-button-wrapper .button-pause'
);
const bannerSwiperWrapper = bannerWrapper.querySelector('.swiper-wrapper');
let wasPlayingBeforeBannerSwiperFocus = true;

function setBannerSwiperPlayingState(isPlaying) {
  if (isPlaying) {
    bannerSwiper.autoplay.start();
    bannerSwiperPlayImgList.forEach((img) => img.classList.remove('is-active'));
    bannerSwiperPauseImgList.forEach((img) => img.classList.add('is-active'));
    bannerSwiperWrapper.setAttribute('aria-live', 'off');
  } else {
    bannerSwiper.autoplay.stop();
    bannerSwiperPlayImgList.forEach((img) => img.classList.add('is-active'));
    bannerSwiperPauseImgList.forEach((img) =>
      img.classList.remove('is-active')
    );
    bannerSwiperWrapper.setAttribute('aria-live', 'polite');
  }
}

function toggleBannerSwiperPlay() {
  const isCurrentlyPlaying = bannerSwiper.autoplay.running;
  setBannerSwiperPlayingState(!isCurrentlyPlaying);
}

function handleBannerSwiperFocusIn(e) {
  const wasFoucsOutsideSwiper = !bannerSwiper.el.contains(e.relatedTarget);
  if (wasFoucsOutsideSwiper) {
    wasPlayingBeforeBannerSwiperFocus = bannerSwiper.autoplay.running;
    if (wasPlayingBeforeBannerSwiperFocus) {
      setBannerSwiperPlayingState(false);
    }
  }
}

function handleBannerSwiperFocusOut(e) {
  const isFocusLeavingSwiper = !bannerSwiper.el.contains(e.relatedTarget);
  if (isFocusLeavingSwiper && wasPlayingBeforeBannerSwiperFocus) {
    setBannerSwiperPlayingState(true);
  }
}

bannerSwiperPlayButtonList.forEach((button) => {
  button.addEventListener('click', toggleBannerSwiperPlay);
});

bannerSwiper.el.addEventListener('focusin', handleBannerSwiperFocusIn);
bannerSwiper.el.addEventListener('focusout', handleBannerSwiperFocusOut);
