// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputEl = document.querySelector("#name-input");
console.log(inputEl);
let outputEl = document.querySelector("#name-output");
console.log(outputEl);

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  if (inputEl.value === "") {
    outputEl.textContent = "незнакомец";
  } else {
    outputEl.textContent = event.currentTarget.value;
  }
}
