const counterEl = document.querySelector(".counter");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");
const counterTitleEl = document.querySelector(".counter__title");

let allowKeydown = true;

resetButtonEl.addEventListener("click", function () {
  // update counter element with 0
  counterValueEl.textContent = 0;

  counterEl.classList.remove("counter--limit");

  counterTitleEl.textContent = "FANCY COUNTER";

  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;

  allowKeydown = true;

  // unfocus (blur) reset button
  resetButtonEl.blur();
});

const counter = (method) => {
  const currentValue = counterValueEl.textContent;

  // convert string to number type
  const currentValueAsNumber = +currentValue;

  // increment by 1
  if (currentValueAsNumber < 15 && method === "plus") {
    let newValue = currentValueAsNumber + 1;

    // update counter element with new value
    counterValueEl.textContent = newValue;
  }
  if (currentValueAsNumber > 0 && method === "minus") {
    let newValue = currentValueAsNumber - 1;

    // update counter element with new value
    counterValueEl.textContent = newValue;
  }
  if (counterValueEl.textContent === "15") {

    counterEl.classList.add("counter--limit");
    counterTitleEl.innerHTML = "Limit! Buy <b>Pro</b>";
    allowKeydown = false;
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;

  } else if (counterValueEl.textContent === "0") {
    counterEl.classList.add("counter--limit");
    allowKeydown = true;

  } else {
    counterEl.classList.remove("counter--limit");
    counterTitleEl.textContent = "FANCY COUNTER";
    allowKeydown = true;
  }
}

decreaseButtonEl.addEventListener("click", function () {
  counter("minus");
});

increaseButtonEl.addEventListener("click", function () {
  counter("plus");
});

document.addEventListener("keydown", function (event) {
  if (!allowKeydown) return;
  if (event.key === "ArrowUp") {
    counter("plus");
  } else if (event.key === "ArrowDown") {
    counter("minus");
  }
});
