'use strict';
const rotators = Array.from(document.querySelectorAll('.rotator'));
const start = (rotator) => {
  const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
  let i = 0;

  cases[i].classList.add('rotator__case_active');
  rotator.style.color = cases[i].dataset.color;

  setInterval(() => {
    cases[i].classList.remove('rotator__case_active');
    i++;
    if (i > cases.length - 1) {
      i = 0;
    }
    cases[i].classList.add('rotator__case_active');
    rotator.style.color = cases[i].dataset.color;
  }, 1000);
};

rotators.forEach((rotator) => {
  start(rotator);
});
