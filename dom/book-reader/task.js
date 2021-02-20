'use strict';

const fontSizes = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

fontSizes.forEach((el) => {
  el.addEventListener('click', (event) => {
    event.preventDefault();
    let fontSize = el.dataset.size;
    removeFontSize();
    el.classList.add('font-size_active');
    if (fontSize) {
      book.classList.add(`book_fs-${fontSize}`);
    }
  });
});

function removeFontSize() {
  if (book.classList.contains('book_fs-big')) {
    book.classList.remove('book_fs-big');
  }
  if (book.classList.contains('book_fs-small')) {
    book.classList.remove('book_fs-small');
  }
  document
    .querySelector('.font-size_active')
    .classList.remove('font-size_active');
}
