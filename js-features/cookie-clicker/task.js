'use strict';

const image = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
let initialVallue = counter.textContent;

image.onmousedown = () => {
  image.style.width = '250px';
  initialVallue++;
  counter.textContent = initialVallue;
};

image.onmouseup = () => {
  image.style.width = '200px';
};
