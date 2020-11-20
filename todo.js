const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];


function deleteToDo(event){
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  
  const cleanToDos = toDos.filter(function(element){
    return element.id !== parseInt(li.id);
  });
  toDos = cleanToDos; //toDos을 let으로 한 이유
  saveToDos();
}

function saveToDos(){
  localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(todo){
  const li = document.createElement("li"),
  span = document.createElement("span"),
  delBtn = document.createElement("button");
  delBtn.innerText = "x";

  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(delBtn);

  li.id = toDos.length + 1;

  span.innerText = todo;

  const toDoObj = {
    text:todo,
    id: toDos.length + 1
  };

  toDos.push(toDoObj);
  saveToDos();
  delBtn.addEventListener("click",deleteToDo);
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(element => {
      paintToDo(element.text);
    });
  }
}
function init(){
  loadToDos();
  toDoForm.addEventListener("submit",handleSubmit);
}
init();