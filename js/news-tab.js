import {
  keydownEnd,
  keydownHome,
  keydownLeft,
  keydownRight,
  keydownTab,
} from './keycode.js';

const newsTabItems = document.querySelectorAll('.news .news-tab-item');
const newsBoardList = document.querySelectorAll('.news .news-board-list');
const newsTabItemsLength = newsTabItems.length;
const newsTabMoreButton = document.querySelector('.news .news-tab-more a');

function updateNewsTab(item, idx) {
  newsTabItems.forEach((item) => {
    item.parentNode.classList.remove('is-active');
  });
  newsBoardList.forEach((list) => {
    list.classList.remove('is-active');
  });
  item.parentNode.classList.add('is-active');
  newsBoardList[idx].classList.add('is-active');
}

newsTabItems.forEach((item, idx) => {
  item.addEventListener('click', () => updateNewsTab(item, idx));

  item.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
      case keydownTab:
        if (e.shiftKey) {
          newsTabMoreButton.focus();
          e.preventDefault();
        } else {
          const activeNewsBoardItem = document.querySelector(
            '.news-board-list.is-active a'
          );
          activeNewsBoardItem.focus();
          e.preventDefault();
        }
        break;
      case keydownRight:
        if (idx < newsTabItemsLength - 1) {
          newsTabItems[idx + 1].focus();
        } else if (idx === newsTabItemsLength - 1) {
          newsTabItems[0].focus();
        }
        break;
      case keydownLeft:
        if (idx > 0) {
          newsTabItems[idx - 1].focus();
        } else if (idx === 0) {
          newsTabItems[newsTabItemsLength - 1].focus();
        }
        break;
      case keydownEnd:
        e.preventDefault();
        newsTabItems[newsTabItemsLength - 1].focus();
        break;
      case keydownHome:
        e.preventDefault();
        newsTabItems[0].focus();
        break;
    }
  });
});
