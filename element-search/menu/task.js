'use strict';

const menuLinks = Array.from(document.querySelectorAll('.menu__link'));
const menuSub = Array.from(document.querySelectorAll('.menu_sub'));

menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    if (link.nextElementSibling) {
      event.preventDefault();
      let activeMenu = link.nextElementSibling.classList.contains(
        'menu_active'
      );
      deleteMenuActive();
      if (!activeMenu) {
        link.nextElementSibling.classList.toggle('menu_active');
      }
    }
  });
});

function deleteMenuActive() {
  menuSub.forEach((el) => {
    if (el.classList.contains('menu_active')) {
      el.classList.remove('menu_active');
    }
  });
}
