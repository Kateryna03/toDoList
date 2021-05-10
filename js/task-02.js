// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
const ingredientsListEl = document.querySelector("ul");
console.log(ingredientsListEl);

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsEl = ingredients.map((element) => {
  const ItemEl = document.createElement("li");
  ItemEl.textContent = element;
  return ItemEl;
});

ingredientsListEl.append(...ingredientsEl);
