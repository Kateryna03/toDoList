// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterValue = document.querySelector("#value");
const decrementBtnEl = document.querySelector("[data-action='decrement']");
const incrementBtnEl = document.querySelector('[data-action="increment"]');

decrementBtnEl.addEventListener("click", onDecrementButtonClick);
incrementBtnEl.addEventListener("click", onIncrementButtonClick);

let value = 0;
function onDecrementButtonClick() {
  value -= 1;
  counterValue.textContent = value;
}
function onIncrementButtonClick() {
  value += 1;
  counterValue.textContent = value;
}
