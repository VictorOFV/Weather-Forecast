import "./styles/index.css"
import { createH1, createImg, createP } from "./assets/createElements";
import { apiKey, units } from "./assets/config";

const input = document.getElementById("search");

function renderWeatherInfo({ weather, main, sys, name, visibility, wind }) {
  createImg(`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`, "imageWeather")
  createP(`${weather[0].description.toUpperCase()}`)
  createH1(`${name}, ${sys.country}, ${parseInt(main.temp)}°C`);
  createP(`Temp-Min: ${parseInt(main.temp_min)}°C | Temp-Max: ${parseInt(main.temp_max)}°C`)
  createP(`Visibilidade: ${visibility / 1000} Km | Vento: ${wind.speed} Km/h`)
  createP(`Umidade: ${main.humidity}% | Sensação Térmica: ${parseInt(main.feels_like)}°C`)
}

function cleanDisplay() {
  const section = document.getElementById("result");
  section.innerHTML = ""
}

function execute() {
  const city = input.value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}&lang=pt_br`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      cleanDisplay()
      renderWeatherInfo(data);
    })
}

document.getElementById("buttonSearch").addEventListener("click", execute)