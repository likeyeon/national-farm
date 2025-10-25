import { visualSwiper } from './swiper.js';

const visualSwiperBanner = document.querySelector('.visual-banner');
const visualSwiperWrapper = visualSwiperBanner.querySelector('.swiper-wrapper');
const visualSwiperPlayButton = visualSwiperBanner.querySelector(
  '.play-button-wrapper'
);
const visualSwiperPlayImg = visualSwiperPlayButton.querySelector(
  '.swiper-button-play'
);
const visualSwiperPauseImg = visualSwiperPlayButton.querySelector(
  '.swiper-button-pause'
);
let wasPlayingBeforeVisualSwiperFocus = true;

function setVisualSwiperPlayingState(isPlaying) {
  if (isPlaying) {
    visualSwiper.autoplay.start();
    visualSwiperPlayImg.classList.remove('is-active');
    visualSwiperPauseImg.classList.add('is-active');
    visualSwiperWrapper.setAttribute('aria-live', 'off');
  } else {
    visualSwiper.autoplay.stop();
    visualSwiperPlayImg.classList.add('is-active');
    visualSwiperPauseImg.classList.remove('is-active');
    visualSwiperWrapper.setAttribute('aria-live', 'polite');
  }
}

function toggleVisualSwiperPlay() {
  const isCurrentlyPlaying = visualSwiper.autoplay.running;
  setVisualSwiperPlayingState(!isCurrentlyPlaying);
}

function handleVisualSwiperFocusIn() {
  wasPlayingBeforeVisualSwiperFocus = visualSwiper.autoplay.running;
  if (wasPlayingBeforeVisualSwiperFocus) {
    setVisualSwiperPlayingState(false);
  }
}

function handleVisualSwiperFocusOut(e) {
  const isFocusLeavingSwiper = !visualSwiper.el.contains(e.relatedTarget);
  if (isFocusLeavingSwiper && wasPlayingBeforeVisualSwiperFocus) {
    setVisualSwiperPlayingState(true);
  }
}

visualSwiperPlayButton.addEventListener('click', toggleVisualSwiperPlay);
visualSwiper.el.addEventListener('focusin', handleVisualSwiperFocusIn);
visualSwiper.el.addEventListener('focusout', handleVisualSwiperFocusOut);
