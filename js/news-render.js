import { keydownTab } from './keycode.js';

let newsData;
const boardList = document.querySelectorAll('.news .news-board-list');

function onShiftTabBoardItem() {
  boardList.forEach((list) => {
    const newsBoardListItems = list.querySelectorAll('.news-board-item');

    newsBoardListItems[0].addEventListener('keydown', function (e) {
      if (e.shiftKey && e.keyCode === keydownTab) {
        const activeNewBoardTabItem = document.querySelector(
          '.news .news-tab-item.is-active'
        );
        activeNewBoardTabItem.focus();
        e.preventDefault();
      }
    });
  });
}

function renderNews(category, categoryIndex) {
  const items = newsData[category];
  const board = boardList[categoryIndex];

  items.forEach((item) => {
    const [year, month, day] = item.date.split('.');
    const li = document.createElement('li');
    li.className = 'news-board-item';
    li.innerHTML = `
    <a href="${item.link}">
        <div class="item-inner">
        <div class="date-wrapper">
            <div class="date">
            <span class="yearmonth">${year}.${month}</span>
            <span class="day">${day}</span>
            </div>
        </div>
        <div class="text-wrapper">
            <p class="title">${item.title}</p>
            <p class="text">${item.text}</p>
        </div>
        </div>
    </a>`;
    board.appendChild(li);
  });
}

fetch('../data/news-data.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }
    return response.json();
  })
  .then((obj) => {
    newsData = obj;
    Object.keys(obj).forEach((key, idx) => renderNews(key, idx));

    onShiftTabBoardItem();
  })
  .catch((error) => {
    console.error('데이터 불러오기 실패:', error);
    document.querySelector('.news-board').innerHTML =
      '<p class="error">데이터를 불러오지 못했습니다.</p>';
  });
