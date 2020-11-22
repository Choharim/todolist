const weather = document.querySelector(".js-weather");

const COORDS = "coords";
const API_KEY = "0447da692cbea035a1448e596d3213f5";

function getWeather(latitude,longitude){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`) //url호출하는 법, 데이터 요구, 새로고침 안해도 실시간 업데이트 됌, ``안에 https://하고 씀
  .then(function(response){
    return response.json();
  }) //then은 데이터가 완전히 들어온 다음 함수를 실행함
  .then(function(json){
    const temperature = json.main.temp;
    const place = json.name;

    weather.innerText = `${temperature}°C at ${place}`;
  });
}

function handleGeoError(){
  alert("can not access your location");
}

function saveLocation(locationObj){
  localStorage.setItem(COORDS,JSON.stringify(locationObj));
}

function handleGeoSucces(position){
  const longitude = position.coords.longitude;
  const latitude = position.coords.latitude;

  const locationObj = {
    longitude:longitude,
    latitude:latitude
  };
  saveLocation(locationObj);
  getWeather(latitude,longitude);
}

function askForCoods(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadedCoords(){
  const loadedCoords = localStorage.getItem(COORDS);

  if(loadedCoords === null){
    askForCoods();
  }
  else{
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude,parsedCoords.longitude);
  }
}

function init(){
  loadedCoords();
}
init();