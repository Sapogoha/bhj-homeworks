'use strict';

const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

products.forEach((product) => {
  const productId = product.dataset.id;
  const productImg = product.querySelector('.product__image').src;
  const productAmount = product.querySelector('.product__quantity-value');
  const productPlus = product.querySelector('.product__quantity-control_inc');
  const productMinus = product.querySelector('.product__quantity-control_dec');
  const productAdd = product.querySelector('.product__add');

  productAmount.textContent = 1;

  productPlus.addEventListener('click', () => {
    Number(productAmount.textContent++);
  });

  productMinus.addEventListener('click', () => {
    Number(productAmount.textContent--);
    if (productAmount.textContent < 1) {
      productAmount.textContent = 1;
    }
  });

  productAdd.addEventListener('click', () => {
    addProductToCart(productId, productImg, productAmount.textContent);
  });
});

function addProductToCart(productId, productImg, productAmount) {
  if (checkProduct(productId) === false) {
    cartProducts.insertAdjacentHTML(
      'beforeEnd',
      `<div class='cart__product' data-id=${productId}>
    <img class='cart__product-image' src=${productImg}>
    <div class='cart__product-count'>${Number(productAmount)}</div>
</div>`
    );
  } else {
    let productMatchId = [
      ...cartProducts.querySelectorAll('.cart__product'),
    ].find((element) => element.dataset.id === productId);
    Number(
      (productMatchId.querySelector(
        '.cart__product-count'
      ).textContent += +Number(productAmount))
    );
  }
}

function checkProduct(productId) {
  return [...cartProducts.querySelectorAll('.cart__product')].some(
    (product) => product.dataset.id === productId
  );
}
