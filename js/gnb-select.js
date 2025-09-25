const selectElement = document.querySelector('.gnb .agency-select');
const selectListBox = selectElement.querySelector('.agency-listbox');
const selectOptionItems = selectListBox.querySelectorAll('li');
const selectedSpan = selectElement.querySelector('.agency-selected');

function closeSelectOnClickOutside(e) {
  if (!selectElement.contains(e.target)) {
    selectListBox.classList.remove('is-open');
    window.removeEventListener('click', closeSelectOnClickOutside);
  }
}

function toggleSelectOption() {
  if (!selectListBox.classList.contains('is-open')) {
    window.addEventListener('click', closeSelectOnClickOutside);
  }
  selectListBox.classList.toggle('is-open');
}

selectedSpan.addEventListener('click', toggleSelectOption);

selectOptionItems.forEach((item) => {
  item.addEventListener('click', function () {
    selectedSpan.textContent = item.getAttribute('data-value');
    toggleSelectOption();
    if (item.dataset.href) {
      location.href = item.dataset.href;
    }
  });
});
