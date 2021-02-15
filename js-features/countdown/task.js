'use strict';

const timer = document.getElementById('timer');

let initialVallue = timer.textContent;

function countdown() {
  initialVallue--;
  if (initialVallue >= 0) {
    timer.textContent = initialVallue;
  } else {
    clearInterval(countdown);
    alert('Вы победили в конкурсе');
  }
}

setInterval(countdown, 1000);
