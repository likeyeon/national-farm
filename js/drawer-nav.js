const depth1Elements = document.querySelectorAll('.drawer .depth1');
const depth2Items = document.querySelectorAll('.drawer .depth2-item');

// depth1 클릭 처리
function handleDepth1Click(clickedElem) {
  depth1Elements.forEach((el) => el.classList.remove('is-active'));
  clickedElem.classList.add('is-active');
}

// depth3 토글 처리
function toggleDepth3(elem) {
  const depth3Element = elem.querySelector('.depth3');
  const depth3List = depth3Element.querySelector('.depth3-list');
  const depth3Height = depth3List.scrollHeight;

  elem.classList.toggle('is-active');

  depth3Element.style.maxHeight = elem.classList.contains('is-active')
    ? depth3Height + 'px'
    : 0;
}

// depth1 이벤트 등록
depth1Elements.forEach((elem) => {
  const link = elem.querySelector('.depth1-title');
  link.addEventListener('click', function (e) {
    e.preventDefault();
  }); // href 링크 이동 막기

  elem.addEventListener('click', function () {
    handleDepth1Click(elem);
  });
});

// depth3 이벤트 등록
depth2Items.forEach((elem) => {
  const depth3Title = elem.querySelector('.depth3-title');
  depth3Title.addEventListener('click', function (e) {
    e.preventDefault();
  }); // href 링크 이동 막기

  depth3Title.addEventListener('click', function () {
    toggleDepth3(elem);
  });
});
