'use strict';

let tabs = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll('.tab__content');

[...tabs].forEach((tab, index) => {
  tab.addEventListener('click', (event) => {
    event.target
      .closest('.tabs')
      .querySelector('.tab_active')
      .classList.toggle('tab_active');
    event.target
      .closest('.tabs')
      .querySelector('.tab__content_active')
      .classList.toggle('tab__content_active');
    event.target.classList.toggle('tab_active');
    tabContent[index].classList.toggle('tab__content_active');
  });
});
