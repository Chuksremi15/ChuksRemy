const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const navlogo = document.querySelector('.navbar-logo');

menu.addEventListener('click', function () {
  navlogo.classList.toggle('actived');
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});
