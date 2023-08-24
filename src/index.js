

// Selecting HTML elements
const cityInput = document.querySelector("#city");
const showButton = document.querySelector("#showButton");
const infoDiv = document.querySelector("#infoDiv");
infoDiv.classList.add("d-none");
const degree = document.querySelector("#degree");
const forecast = document.querySelector("#showForecast");
const forecastDiv = document.querySelector("#forecastDiv");
forecastDiv.classList.add("d-none");
const days = document.querySelector("#days");
const degreeSystem = document.querySelector("#degreeSystem");
import {showWeather, showForecast} from './showWeather.js';
import { addBirds } from './animation/birdsAnimation.js';

// Event listeners for user interactions
days.addEventListener('change', showForecast);
showButton.href = "#infoDiv";
showButton.addEventListener('click', showWeather);
forecast.href = "#forecastDiv";
forecast.addEventListener('change', showForecast);
degree.addEventListener('change', showWeather);
degree.addEventListener('change', () => {
  showWeather();
  showForecast();
});

// Initialize birds animation for the form element
addBirds('#form');

// Listener for input blur event
cityInput.addEventListener('blur', () => {
  // Reset viewport settings to default on blur
  document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1');
});


