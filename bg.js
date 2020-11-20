const body = document.querySelector("body");

const IMG_NUMBER = 3;

function genRadom(){
  const number = Math.ceil(Math.random()*IMG_NUMBER);
  return number;
}

function init(){
  const randomNumber = genRadom();
}

init();