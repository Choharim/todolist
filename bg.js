const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(number){
  const image = new Image();
  body.appendChild(image);
  image.src = `${number}.JPG`;
  image.classList.add("bgImage");
}

function genRadom(){
  const number = Math.ceil(Math.random()*IMG_NUMBER);
  return number;
}

function init(){
  const randomNumber = genRadom();
  paintImage(randomNumber);
}

init();