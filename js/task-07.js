// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.querySelector("input#font-size-control");
console.log(inputEl);
const spanEl = document.querySelector("span#text");
console.log(spanEl);
inputEl.addEventListener("input", onInputElChange);

function onInputElChange(event) {
  console.log(event.currentTarget.value);
  spanEl.style.fontSize = event.currentTarget.value + "px";
}
