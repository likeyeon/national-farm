import { popupSwiper } from './swiper.js';

const popupContainer = document.querySelector('.popup');
const popupSwiperWrapper = popupSwiper.el.querySelector('.swiper-wrapper');
const popupSwiperPlayButton = popupContainer.querySelector(
  '.play-button-wrapper'
);
const popupSwiperPlayImg = popupSwiperPlayButton.querySelector(
  '.swiper-button-play'
);
const popupSwiperPauseImg = popupSwiperPlayButton.querySelector(
  '.swiper-button-pause'
);
let wasPlayingBeforePopupSwiperFocus = true;

function setpopupSwiperPlayingState(isPlaying) {
  if (isPlaying) {
    popupSwiper.autoplay.start();
    popupSwiperPlayImg.classList.remove('is-active');
    popupSwiperPauseImg.classList.add('is-active');
    popupSwiperWrapper.setAttribute('aria-live', 'off');
  } else {
    popupSwiper.autoplay.stop();
    popupSwiperPlayImg.classList.add('is-active');
    popupSwiperPauseImg.classList.remove('is-active');
    popupSwiperWrapper.setAttribute('aria-live', 'polite');
  }
}

function togglepopupSwiperPlay() {
  const isCurrentlyPlaying = popupSwiper.autoplay.running;
  setpopupSwiperPlayingState(!isCurrentlyPlaying);
}

function handlepopupSwiperFocusIn() {
  wasPlayingBeforePopupSwiperFocus = popupSwiper.autoplay.running;
  if (wasPlayingBeforePopupSwiperFocus) {
    setpopupSwiperPlayingState(false);
  }
}

function handlepopupSwiperFocusOut(e) {
  const isFocusLeavingSwiper = !popupSwiper.el.contains(e.relatedTarget);
  if (isFocusLeavingSwiper && wasPlayingBeforePopupSwiperFocus) {
    setpopupSwiperPlayingState(true);
  }
}

popupSwiperPlayButton.addEventListener('click', togglepopupSwiperPlay);
popupSwiper.el.addEventListener('focusin', handlepopupSwiperFocusIn);
popupSwiper.el.addEventListener('focusout', handlepopupSwiperFocusOut);
