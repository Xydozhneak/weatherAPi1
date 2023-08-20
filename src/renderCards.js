
  // Function to render the weather card
  
  export function renderWeatherCard(data) {
    let degreeType = '';
    if (!degree.checked) {
      degreeType = 'C';
      degreeSystem.innerText = "Degree's system C";
    } else {
      degreeType = 'F';
      degreeSystem.innerText = "Degree's system F";
    }
  
    const currentCity = data.location.name;
    const temperature = data.current[`temp_${degreeType.toLowerCase()}`];
    const humidity = data.current.humidity;
    const windSpeed = data.current.wind_kph;
    const weatherIcon = data.current.condition.icon;
    const currentDate = data.location.localtime;
  
    const date = document.createElement("div");
    const city = document.createElement("div");
    const currentTemperature = document.createElement("div");
    const humidityElement = document.createElement("div");
    const windSpeedElement = document.createElement("div");
    const icon = document.createElement("img");
    const tittle = document.createElement("h2");
  
    tittle.innerText = `Weather in ${currentCity} today!`;
    date.innerText = `Date: ${currentDate} 📅`;
    city.innerText = `City: ${currentCity} 🏙️`;
    currentTemperature.innerText = `Temperature: ${temperature} ${degreeType}🌡️`;
    humidityElement.innerText = `Humidity: ${humidity}%💦`;
    windSpeedElement.innerText = `Wind speed: ${windSpeed} km/h 🍃`;
    icon.src = weatherIcon;
  
    const mainCard = document.createElement("div");
    mainCard.classList.add("mainCard");
  
    mainCard.append(date, city, currentTemperature, humidityElement, windSpeedElement, icon);
  
    return mainCard;
  }

  // Function to render the forecast card
 export function renderForecastCard(forecastData, i) {
    let degreeType = '';
    !degree.checked ? degreeType = 'C' : degreeType = 'F';
    const forecastDate = forecastData.forecast.forecastday[i].date;
    const currentCity = forecastData.location.name;
    const temperature = forecastData.forecast.forecastday[i].day[`avgtemp_${degreeType.toLowerCase()}`];
    const humidity = forecastData.forecast.forecastday[i].day.avghumidity;
    const windSpeed = forecastData.forecast.forecastday[i].day.maxwind_kph;
    const weatherIcon = forecastData.forecast.forecastday[i].day.condition.icon;
  
    const card = document.createElement("div");
    card.classList.add("conteiner");
  
    const forecastDateEl = document.createElement("p");
    forecastDateEl.textContent = `Forecast Date: ${forecastDate}`;
  
    const city = document.createElement("p");
    city.textContent = `City: ${currentCity}`;
  
    const forecastTemperature = document.createElement("p");
    forecastTemperature.textContent = `Temperature: ${temperature}${degreeType}`;
  
    const forecastWet = document.createElement("p");
    forecastWet.textContent = `Humidity: ${humidity}%`;
  
    const forecastWindSpeed = document.createElement("p");
    forecastWindSpeed.textContent = `Wind Speed: ${windSpeed} km/h`;
  
    const forecastIcon = document.createElement("img");
    forecastIcon.src = weatherIcon;
    card.append(forecastDateEl, city, forecastTemperature, forecastWet, forecastWindSpeed, forecastIcon);
    return card;
  }
  