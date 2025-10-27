import { visualSwiper } from './swiper.js';

const visualSwiperBanner = document.querySelector('.visual-banner');
const visualSwiperIndexLive = visualSwiperBanner.querySelector('.swiper-live');
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
    visualSwiperIndexLive.setAttribute('aria-live', 'off');
  } else {
    visualSwiper.autoplay.stop();
    visualSwiperPlayImg.classList.add('is-active');
    visualSwiperPauseImg.classList.remove('is-active');
    visualSwiperIndexLive.setAttribute('aria-live', 'polite');
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

// ✅ 포커스 이동 시 현재 위치 기반으로 자연스럽게 이동하도록 수정
