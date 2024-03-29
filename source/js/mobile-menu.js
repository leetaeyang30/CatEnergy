let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--opened');
  navToggle.classList.toggle('main-nav__toggle--opened');

  navMain.classList.toggle('main-nav--closed');
  navToggle.classList.toggle('main-nav__toggle--closed');
});
