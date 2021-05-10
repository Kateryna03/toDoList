// Посчитает и выведет в консоль количество категорий в ul#categories, //то есть элементов li.item. Получится 'В списке 3 категории.'.

const categoriesItemEl = document.querySelectorAll(".item");
console.log(`В списке ${categoriesItemEl.length} категории.`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li)

categoriesItemEl.forEach((el) =>
  console.log(
    `Категория: ${el.firstElementChild.textContent}\nКоличество элементов: ${el.lastElementChild.children.length};`
  )
);

// const numberCategoryEl = [...categoriesItemEl]
//   .map(
//     (categories) => `Категория: ${categories.children[0].textContent}
// Количество элементов: ${categories.children[1].children.length}`
//   )
//   .join("\n");
// console.log(numberCategoryEl);

// Категория: Животные
// Количество элементов: 4;
