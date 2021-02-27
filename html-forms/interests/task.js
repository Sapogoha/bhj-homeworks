'use strict';

const checkboxes = Array.from(document.querySelectorAll('.interest__check'));

checkboxes.forEach((checkbox) => {
  const parent = checkbox.closest('.interest');
  if (parent.querySelector('.interests')) {
    checkbox.addEventListener('change', () => {
      const children = Array.from(
        parent.querySelectorAll('.interests .interest__check')
      );
      if (checkbox.checked) {
        children.forEach((item) => (item.checked = true));
      } else {
        children.forEach((item) => (item.checked = false));
      }
    });
  }
});
