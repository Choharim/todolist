const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greetings = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
SHOWING_CN = "showing";


function saveName(name){
  localStorage.setItem(USER_LS,name);
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue)
}

function askName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit",handleSubmit);
}

function paintGreeting(name){
  form.classList.remove(SHOWING_CN);
  greetings.classList.add(SHOWING_CN);
  greetings.innerText = `Hellow ${name}`;
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);

  if(currentUser === null){
    askName();
  }else{
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}
init();