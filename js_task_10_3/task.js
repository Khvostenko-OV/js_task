const cart = document.querySelector('.cart__products'),
      products = Array.from(document.querySelectorAll('.product'))

function addProduct(id, amount, img) {
    const cartProducts = Array.from(cart.querySelectorAll('.cart__product')),
          prod = cartProducts.find( elem => elem.getAttribute('data-id') == id);

    if (prod) {
        const count = prod.querySelector('.cart__product-count');
        count.textContent = +count.textContent + amount;
    } else {
        cart.innerHTML += `
            <div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${img}">
                <div class="cart__product-count">${amount}</div>
            </div>`;
    }

}

products.forEach( prod => {
    const minus = prod.querySelector('.product__quantity-control_dec'),
          plus = prod.querySelector('.product__quantity-control_inc'),
          value = prod.querySelector('.product__quantity-value'),
          img = prod.querySelector('.product__image'),
          addButton = prod.querySelector('.product__add');
    minus.onclick = () => { if (+value.textContent > 1) --value.textContent };
    plus.onclick = () =>  ++value.textContent;
    addButton.onclick = () => addProduct(prod.getAttribute('data-id'), +value.textContent, img.src)
})