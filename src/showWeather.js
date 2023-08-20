import apiKey from "./config.js";
import { renderForecastCard, renderWeatherCard } from "./renderCards.js";
import { addBirds } from './animation/birdsAnimation.js';
const cityInput = document.querySelector("#city");
const forecast = document.querySelector("#showForecast");

// Function to display current weather
export function showWeather() {
    const cityNow = cityInput.value;
    // Check if a city name is provided
    if (!cityNow) {
      alert("Please enter a city name.");
      return;
    }
    return fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityNow}&aqi=no`)
      .then(response => {
        if (!response.ok) {
          if (response.status === 400) {
            alert("City not found. Please enter a valid city name.");
          } else {
            alert("An error occurred while fetching data.");
          }
          throw new Error('ERROR', error);
        }
        return response.json();
      })
      .then(data => {
        infoDiv.innerHTML = '';
        const card = renderWeatherCard(data);
        card.classList.add("animate__animated");
        card.classList.add("animate__backInLeft");
        infoDiv.append(card);
        const infoDivLocation = infoDiv.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: infoDivLocation,
          behavior: "smooth"
      });
        // Initialize birds animation for the infoDiv element
        addBirds('#infoDiv');
      })
      .catch(error => {
        console.error("ERROR", error);
      });
  }

// Function to display weather forecast
 export function showForecast() {
    const cityNow = cityInput.value;
    const forecastDays = parseInt(days.value);
    const lableForecast = document.querySelector("#onForecast");
  
    let degreeType = '';
    if (!degree.checked) {
      degreeType = 'C';
      degreeSystem.innerText = "Degree's system C";
    } else {
      degreeType = 'F';
      degreeSystem.innerText = "Degree's system F";
    }
  
    return fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityNow}&days=${forecastDays}&aqi=no&alerts=no`)
      .then(response => {
        if (!response.ok) {
          throw new Error('ERROR', error);
        }
        return response.json();
      })
      .then(forecastData => {
        if (forecast.checked) {
          lableForecast.classList.add("addBorder");
          forecastDiv.classList.remove("d-none");
          forecastDiv.innerHTML = "";
          for (let i = 0; i < forecastData.forecast.forecastday.length; i++) {
            const forecastCard = renderForecastCard(forecastData, i);
            forecastDiv.append(forecastCard);
            const forecastDivLocation = forecastDiv.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: forecastDivLocation,
              behavior: "smooth"
          });
          }
        } else {
          lableForecast.classList.remove("addBorder");
          forecastDiv.classList.add("d-none");
          forecastDiv.innerHTML = "";
        }
      })
      .catch(error => {
        console.error("ERROR", error);
      });
  }