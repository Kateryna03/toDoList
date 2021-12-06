const newTodoRef = document.querySelector(".message");
const addToDoBtnRef = document.querySelector(".add");
const toDoListRef = document.querySelector(".todo");

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
    }> </li> 
        <label for='item_${idx}' class="${
      item.important ? "important" : ""
    } ">${item.todo}</label>
    
    <button onclick='editTask(${idx})' class='deleteButton'>Edit</button>

    <button onclick='deleteTask(${idx})' class="deleteButton"> Delete</button>
      
      `;
  });
  toDoListRef.innerHTML = displayTask;
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

function deleteTask(index) {
  let todo = localStorage.getItem("todo");
  toDoList = JSON.parse("todo");
  toDoList.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(toDoList));
  addTaskToDisplay();
}
//задача на подсчет повторяюшихся эл в массиве
// function likes(names) {
//   // TODOfunction likes(names) {
//   if (!names.length) {
//     return "no one likes this";
//   } else {
//     for (item of names) {
//       if (names.length === 1) {
//         return `${names[0]} likes this`;
//       }
//       if (names.length === 2) {
//         return `${names[0]} and ${names[1]} like this`;
//       }
//       if (names.length === 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//       }
//       if (names.length > 3) {
//         rest = names.length - 2;
//         return `${names[0]}, ${names[1]} and ${rest} others like this`;
//       }
//     }
//   }

//   //   let count = 0;
//   //   names.forEach(name => count++);

//   //   if(count === 1) {
//   //     const firstName = names[0];
//   //     return `${firstName} likes this`
//   //   } else if (count == 2) {
//   //     const firstName = names[0]
//   //     const secondName = names[1]
//   //     return `${firstName} and ${secondName} like this`
//   //   }
//   //   else if (count === 3) {
//   //     const firstName = names[0]
//   //     const secondName = names[1]
//   //     const thirdName = names[2]
//   //     return `${firstName}, ${secondName} and ${thirdName} like this`
//   //   } else {
//   //     const remainder = count - 2;
//   //     const firstName = names[0]
//   //     const secondName = names[1]
//   //     return `${firstName}, ${secondName} and ${remainder} others like this`
//   //   }
// }

// likes([]);
// likes(["Peter"]);
// likes(["Jacob", "Alex"]);
// likes(["Max", "John", "Mark"]);
// likes(["Alex", "Jacob", "Mark", "Max"]);
