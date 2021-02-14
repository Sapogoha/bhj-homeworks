'use strict';

const slides = Array.from(document.querySelectorAll('.slider__item'));
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');

prev.addEventListener('click', clickLeft);
next.addEventListener('click', clickRight);

let counter = 0;

function clickLeft() {
  hideSlide(counter);
  counter--;
  showSlide(counter);
}

function clickRight() {
  hideSlide(counter);
  counter++;
  showSlide(counter);
}

function hideSlide(counter) {
  slides[counter].classList.remove('slider__item_active');
}

function showSlide(n) {
  if (n > slides.length - 1) {
    counter = 0;
  } else if (n < 0) {
    counter = slides.length - 1;
  }
  slides[counter].classList.add('slider__item_active');
}
