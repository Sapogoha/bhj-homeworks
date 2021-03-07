'use strict';
const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));

tooltips.forEach((item) => {
  item.insertAdjacentHTML(
    'beforeEnd',
    `<div class='tooltip'>${item.title}</div>`
  );
  const tooltip = item.querySelector('.tooltip');

  const coords = item.getBoundingClientRect();
  tooltip.style.left = coords.left + 'px';
  tooltip.style.top = coords.bottom + 5 + 'px';

  item.addEventListener('click', (item) => {
    item.preventDefault();

    document
      .querySelectorAll('.tooltip_active')
      .forEach((item) => item.classList.remove('tooltip_active'));

    tooltip.classList.add('tooltip_active');
  });
});
