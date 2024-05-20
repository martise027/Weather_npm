// display.js
function displayWeather(weatherData) {
    console.log('Current weather:', weatherData.condition.text);
    console.log('Tempareture(c) :',weatherData.temp_c);
    console.log('Feels like',weatherData.feelslike_c);
    console.log('Humidity :',weatherData.humidity);
    console.log('Cloud :',weatherData.cloud);
    console.log('UV :',weatherData.uv);    
}
  
module.exports = { displayWeather };
  