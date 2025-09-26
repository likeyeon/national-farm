const depth1Items = document.querySelectorAll('.gnb .depth1');

depth1Items.forEach((item) => {
  item.addEventListener('mouseover', function () {
    item.classList.add('over');
  });

  item.addEventListener('mouseout', function () {
    item.classList.remove('over');
  });
});
