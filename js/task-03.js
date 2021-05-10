// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//const galleryEl = document.querySelector("ul");

// const makeGalleryListEl = ({ url, alt }) => {
//   const galleryListItemEl = document.createElement("li");
//   galleryListItemEl.classList.add("gallery_list_item");
//   const galleryImgEl = document.createElement("img");
//   galleryImgEl.classList.add("gallery_img");
//   galleryImgEl.url = url;
//   galleryImgEl.alt = alt;

//   galleryListItemEl.appendChild(galleryImgEl);

//   return galleryListItemEl;
// };
// console.log(makeGalleryListEl(images[1]));
// const elements = images.map(makeGalleryListEl);
// console.log(elements);
// galleryEl.append(...elements);
// console.log(galleryEl);

// galleryEL.insertAdjacentHTML(
//   "afterbegin",
//   `<li class = 'gallery_list'><img class = 'gallery_list_img' src='${image.url}' alt='${image.alt}'></li>`
// );

// console.log(galleryEL);
// function createGalleryList() {
//   for (let image of images) {
//     galleryEL.insertAdjacentHTML(
//       "afterbegin",
//       `<li><img src="${image.url}" alt="${image.alt}"></li>`
//     );
//   }
// }

// createGalleryList(images);
const galleryEL = document.querySelector("ul");
galleryEL.className = "gallery";
const makeGalleryListMarkup = (images) => {
  return `<li class = 'gallery_list'>
    <img class = 'gallery_list_img'src="${images.url}" alt="${images.alt}">
    </img>
  </li>`;
};
const makeGalleryImegesEL = images.map(makeGalleryListMarkup).join("");
galleryEL.insertAdjacentHTML("afterbegin", makeGalleryImegesEL);
