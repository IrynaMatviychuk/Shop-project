// Add counter
let productsCountEl = document.querySelector(".order");
let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
}

// Add likes
let likeBtns = document.querySelectorAll(".like");

likeBtns.forEach((item) =>
  item.addEventListener("click", function () {
    item.classList.toggle("like-active-btn");
  })
);

// Add and open modal-block
let modal = document.querySelector(".modal");
let moreDetailsBtns = document.querySelectorAll(".btn-more-details");

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));
function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

// Close modal-block (click on btn-close (X))
let close = document.querySelector(".btn-close");

close.addEventListener("click", closeModal);
function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

// Close modal (click on modal-block)
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

//  Show modal-block while scrolling
function showModalByScroll() {
  if (window.scrollY >= document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}
window.addEventListener("scroll", showModalByScroll);

// Slider
$(".slider").slick({
    autoplay: true,
    dots: true,
});