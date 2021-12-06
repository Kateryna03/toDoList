const newTodoRef = document.querySelector(".message");
const addToDoBtnRef = document.querySelector(".add");
const deleteToDo = document.querySelector(".deleteButton");
const toDoListRef = document.querySelector(".todo");
console.log(newTodoRef, addToDoBtnRef, deleteToDo);

//codewars task
// function spinWords(string) {
//   let output = "";
//   let a;
//   let b = [];
//   let c;
//   a = string.split(" ").map((el) => el.split(""));
//   //.reverse().join(""));
//   console.log(a);
//   for (let i = 0; i < a.length; i += 1) {
//     if (a[i].length > 4) {
//       b = a[i].reverse();
//       console.log("b", b);
//     }
//   }
//   output = a.map((el) => el.join(""));
//   c = output.join(" ");
//   console.log("output", c);
//   return c;
// }

// spinWords("Hello World the topi");

let toDoList = [];

!localStorage.todo
  ? (toDoList = [])
  : (toDoList = JSON.parse(localStorage.getItem("todo")));

if (localStorage.getItem("todo")) {
  toDoList = JSON.parse(localStorage.getItem("todo"));
  addTaskToDisplay();
}

addToDoBtnRef.addEventListener("click", onAddNewToDo);

function onAddNewToDo() {
  let newTask = {
    todo: newTodoRef.value,
    checked: false,
    important: false,
  };
  //console.log(newTask);
  toDoList.push(newTask);
  addTaskToDisplay();
  localStorage.setItem("todo", JSON.stringify(toDoList));
  newTodoRef.value = "";
}
console.log(toDoList);

function addTaskToDisplay() {
  let displayTask = "";
  toDoList.forEach(function (item, idx) {
    displayTask += `
        <li>
        <input type= 'checkbox' id='item_${idx}' ${
      item.checked ? "checked" : ""
    }>
        <label for='item_${idx}' class="${
      item.important ? "important" : ""
    } ">${item.todo}</label>
    <button onclick="deleteTask(${idx})" class="deleteButton"> Delete</button>
        </li>
      `;

    toDoListRef.innerHTML = displayTask;
  });
}

// function onToDoChange(e) {
//   let idInput = e.target.getAttribute("id");
//   let forLabel = toDoListRef.querySelector("[for = " + idInput + "]");
//   let valueInLabel = forLabel.innerHTML;
//   console.log(e.target);
//   console.log(forLabel);
//   console.log(valueInLabel);

//   toDoList.forEach(function (item) {
//     if (item.todo === valueInLabel) {
//       item.checked = !item.checked;
//       console.log(item.checked);
//       localStorage.setItem("todo", JSON.stringify(toDoList));
//     }
//   });
// }
toDoListRef.addEventListener("change", function onToDoChange(e) {
  //let idInput = e.target.getAttribute("id");
  let forLabel = toDoListRef.querySelector(
    "[for = " + e.target.getAttribute("id") + "]"
  );
  let valueInLabel = forLabel.innerHTML;
  //   console.log(e.target);
  //   console.log(forLabel);
  console.log(valueInLabel);

  toDoList.forEach(function (item) {
    if (item.todo === valueInLabel) {
      item.checked = !item.checked;
      console.log(item.checked);
      localStorage.setItem("todo", JSON.stringify(toDoList));
    }
  });
});
////////////////////////////////////
// toDoListRef.addEventListener("change", function (e) {
//   //e.preventDefault();

//   toDoList.forEach(function (item) {
//     if (item.todo === e.target.innerHTML) {
//       item.important = !item.important;
//       console.log(item.important);
//       addTaskToDisplay();
//       localStorage.setItem("todo", JSON.stringify(toDoList));
//     }
//   });
// });

const deleteTask = (index) => {
  console.log(index);
};
