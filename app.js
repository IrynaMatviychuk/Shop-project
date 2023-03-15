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

//  Product-quantity

// Знайдемо всі .decrement-btn та .increment-btn, але витягнемо лише нульові. Знайдемо input в .product-quantity
let decrementBtns = document.querySelectorAll(".decrement-btn");
let incrementBtns = document.querySelectorAll(".increment-btn");
let productsCount = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, inputField) {
  // ми могли б написати this.incrementBtn = incrementBtn; АЛЕ напишемо:
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };

  // Дізнатися який зараз count та встановити min та max значення
  this.toggleButtonState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };

  // Викликаємо Ф
  this.toggleButtonState();

  // робимо, щоб число збільшувалося та зменшувалося: дізнаємось яке значення в input та додаємо до нього 1
  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    // викликаємо toggleButtonState(), коли клікаємо на кнопку increment
    this.toggleButtonState();
  };

  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    // викликаємо toggleButtonState(), коли клікаємо на кнопку decrement
    this.toggleButtonState();
  };

  // Викликаємо збільшення / зменшення при кліку на + / -
  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );
  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
}

// Оголошуємо змінну, створюємо об'єкт за допомогою Ф-конструктора (лише для одної категорії товару)
// const counter1 = new Counter(incrementBtns, decrementBtns, productsCount);
// console.log(counter1);

// Те ж саме для всіх категорій товарів. Створюємо counters:
let counters = [];
// Пройдемось по полях
productsCount.forEach(
  (item, i) =>
    (counters[i] = new Counter(incrementBtns[i], decrementBtns[i], item))
);
