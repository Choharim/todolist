const COORDS = "coords";

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
}

function askForCoods(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadedCoords(){
  const loadedCoords = localStorage.getItem(COORDS);

  if(loadedCoords === null){
    askForCoods();
  }
}

function init(){
  loadedCoords();
}
init();