const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function paintToDo(todo){
  const li = document.createElement("li"),
  span = document.createElement("span"),
  delBtn = document.createElement("button");
  delBtn.innerText = "x";

  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(delBtn);

  span.innerText = todo;

  const toDoObj = {
    text:todo,
    id: toDos.length + 1;
  };

  toDos.push(toDoObj);
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos(){
  const toDos = localStorage.getItem(TODOS_LS);
  if(toDos !== null){

  }
}
function init(){
  loadToDos();
  toDoForm.addEventListener("submit",handleSubmit);
}
init();