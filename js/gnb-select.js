const selectElement = document.querySelector('header .agency-select');
const selectListBox = selectElement.querySelector('.agency-listbox');
const selectOptionItems = selectListBox.querySelectorAll('li');
const selectOptionLinks = selectListBox.querySelectorAll('li > a');
const selectOptionLength = selectOptionLinks.length;
const selectedButton = selectElement.querySelector('.agency-selected');

function closeSelectOnClickOutside(e) {
  if (!selectElement.contains(e.target) || e.keyCode === 27) {
    selectListBox.classList.remove('is-open');
    window.removeEventListener('click', closeSelectOnClickOutside);
    window.removeEventListener('keyup', closeSelectOnClickOutside);
    selectListBox.setAttribute('inert', '');
  }
}

function toggleSelectOption() {
  if (!selectListBox.classList.contains('is-open')) {
    window.addEventListener('click', closeSelectOnClickOutside);
    // 탭을 눌러서 다음 타겟으로 포커스 이동 -> 탭을 떼면 함수 실행
    window.addEventListener('keyup', closeSelectOnClickOutside);
    selectListBox.removeAttribute('inert');
    selectOptionItems[0].firstElementChild.focus();
  } else {
    selectListBox.setAttribute('inert', '');
  }
  selectListBox.classList.toggle('is-open');
}

selectedButton.addEventListener('click', toggleSelectOption);

selectOptionItems.forEach((item) => {
  item.addEventListener('click', function () {
    selectedButton.textContent = item.getAttribute('data-value');
    toggleSelectOption();
    if (item.dataset.href) {
      location.href = item.dataset.href;
    }
  });
});

function handleKeydownSelectOption(e, idx) {
  const keyCode = e.code;
  if (keyCode === 'ArrowUp' && idx > 0) {
    e.preventDefault();
    selectOptionLinks[idx - 1].focus();
  } else if (keyCode === 'ArrowDown' && idx < selectOptionLength - 1) {
    e.preventDefault();
    selectOptionLinks[idx + 1].focus();
  }
}

selectOptionLinks.forEach((item, idx) => {
  item.addEventListener('keydown', function (e) {
    handleKeydownSelectOption(e, idx);
  });
});
