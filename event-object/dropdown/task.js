'use strict';

let dropdowns = document.querySelectorAll('.dropdown');
[...dropdowns].forEach((dropdown) =>
  dropdown.addEventListener('click', (event) => {
    event.preventDefault();
    dropdown
      .querySelector('.dropdown__list')
      .classList.toggle('dropdown__list_active');
    dropdown.querySelector('.dropdown__value').textContent =
      event.target.textContent;
  })
);
