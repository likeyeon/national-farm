const scrollTopButton = document.querySelector('.scroll-top');

scrollTopButton.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  console.log('click!');
});
