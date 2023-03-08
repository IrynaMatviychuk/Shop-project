let productsCountEl = document.querySelector(".order");
let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

for(let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function() {
        productsCountEl.textContent = +productsCountEl.textContent + 1; 
    });
}

