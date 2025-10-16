// NOTE: drawer 열리고 닫히는 기능

const drawer = document.querySelector('.drawer');
const drawerOverlay = document.querySelector('.overlay');
const drawerCloseButton = drawer.querySelector('.close');
const drawerMenuButton = document.querySelector(
  '.header-main .drawer-button > button'
);
const drawerHomeButton = drawer.querySelector('.home > a');

// 3. drawer 이외의 바깥 영역 클릭 시 닫힘
function closeDrawerOnClickingOutside(e) {
  if (!drawer.contains(e.target) && !drawerMenuButton.contains(e.target)) {
    drawer.classList.remove('is-active');
    drawerOverlay.classList.remove('is-active');
    window.removeEventListener('click', closeDrawerOnClickingOutside);

    drawer.setAttribute('inert', '');
    drawerMenuButton.focus();
  }
}

// 1. drawer-menu 버튼 클릭 시 열림
function openDrawer() {
  drawer.classList.add('is-active');
  drawerOverlay.classList.add('is-active');
  window.addEventListener('click', closeDrawerOnClickingOutside);

  drawer.removeAttribute('inert');
  drawerHomeButton.focus();
}

// 2. close 버튼 클릭 시 닫힘
function closeDrawer() {
  drawer.classList.remove('is-active');
  drawerOverlay.classList.remove('is-active');

  drawer.setAttribute('inert', '');
  drawerMenuButton.focus();
}

drawerMenuButton.addEventListener('click', openDrawer);
drawerCloseButton.addEventListener('click', closeDrawer);
