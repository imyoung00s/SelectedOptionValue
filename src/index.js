// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const select = document.querySelector("select");
const COUNTRY_LS = "country";

function saveCountry(text) {
  localStorage.setItem(COUNTRY_LS, text);
}

function handleSubmit() {
  const currentValue = select.options[select.selectedIndex].value;
  //paintCountry(currentValue);
  saveCountry(currentValue);
}

function askCountry() {
  select.addEventListener("change", handleSubmit );
}

function paintCountry(event){
  select.value = event;
}

function loadCountry() {
  const loadedCountry = localStorage.getItem(COUNTRY_LS);
  if (loadedCountry == null) {
    askCountry();
  } else {
    paintCountry(loadedCountry);
  }
}

function init() {
  loadCountry();
}

init();
