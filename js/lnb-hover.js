const depth1Items = document.querySelectorAll('.gnb .depth1');

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
