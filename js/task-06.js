// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector("#validation-input");
console.log(inputEl);
let inputLengthEl = inputEl.dataset.length;
console.log(inputLengthEl);

inputEl.addEventListener("focus", onInputElFocus);

function onInputElFocus(event) {
  console.log(event);
  const text = event.target.value;
  if (text.length === +inputLengthEl) {
    inputEl.className = "valid";
  } else {
    inputEl.className = "invalid";
  }
}
