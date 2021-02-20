'use strict';

const reveals = document.querySelectorAll('.reveal');

[...reveals].forEach((element) => {
  document.addEventListener('scroll', () => {
    const elementPosition = element.getBoundingClientRect();
    if (
      elementPosition.top > window.innerHeight ||
      elementPosition.bottom < 0
    ) {
      element.classList.remove('reveal_active');
    } else {
      element.classList.add('reveal_active');
    }
  });
});
