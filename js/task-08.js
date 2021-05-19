// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
const boxesEl = document.querySelector("#boxes");
console.log(boxesEl);
const renderEl = document.querySelector('[data-action="render"]');
console.log(renderEl);
const destroyEl = document.querySelector('[data-action="destroy"]');
console.log(destroyEl);

renderEl.addEventListener("click", onCreateBoxes);
destroyEl.addEventListener("click", onDestroyBoxes);

function onCreateBoxes(amount) {
  console.log(amount.currentTarget.value);
  boxesEl.textContent = amount.currentTarget.value;
}
function onDestroyBoxes(amount) {
  console.log(amount.currentTarget.value);
  boxesEl.value = amount.currentTarget.value;
}
