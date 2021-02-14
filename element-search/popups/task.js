'use strict';

const modal = document.getElementsByClassName('modal');
const modalMain = document.getElementById('modal_main');
const modalClose = document.getElementsByClassName('modal__close');
const showSuccess = document.getElementsByClassName('show-success')[0];
const modalSuccess = document.getElementById('modal_success');

modalMain.classList.add('modal_active');

[...modalClose].map((element) =>
  element.addEventListener('click', () =>
    [...modal].map((element) => element.classList.remove('modal_active'))
  )
);

showSuccess.addEventListener('click', () =>
  modalSuccess.classList.add('modal_active')
);
