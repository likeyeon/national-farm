import {
  keydownEnd,
  keydownHome,
  keydownLeft,
  keydownRight,
} from './keycode.js';

const depth1Items = document.querySelectorAll('.gnb .depth1');
const depth1ItemsTitle = document.querySelectorAll('.gnb .depth1-title');
const depth1ItemsLength = depth1ItemsTitle.length;

depth1Items.forEach((item) => {
  item.addEventListener('mouseover', function () {
    item.classList.add('over');
  });

  item.addEventListener('mouseout', function () {
    item.classList.remove('over');
  });

  // 키보드 포커스가 들어왔을 때
  item.addEventListener('focusin', function () {
    item.classList.add('over');
  });

  // 키보드 포커스가 빠져나갔을 때
  item.addEventListener('focusout', function (e) {
    if (!item.contains(e.relatedTarget)) {
      item.classList.remove('over');
    }
  });
});

depth1ItemsTitle.forEach((item, idx) => {
  item.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
      case keydownRight:
        item.classList.remove('over');
        if (idx < depth1ItemsLength - 1) {
          depth1ItemsTitle[idx + 1].focus();
        } else if (idx === depth1ItemsLength - 1) {
          depth1ItemsTitle[0].focus();
        }
        break;
      case keydownLeft:
        item.classList.remove('over');
        if (idx > 0) {
          depth1ItemsTitle[idx - 1].focus();
        } else if (idx === 0) {
          depth1ItemsTitle[depth1ItemsLength - 1].focus();
        }
        break;
      case keydownEnd:
        e.preventDefault();
        item.classList.remove('over');
        depth1ItemsTitle[depth1ItemsLength - 1].focus();
        break;
      case keydownHome:
        e.preventDefault();
        item.classList.remove('over');
        depth1ItemsTitle[0].focus();
        break;
    }
  });
});
