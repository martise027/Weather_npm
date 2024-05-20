const axios  = require("axios");
const API_KEY = "94cb25c7ae3c4738863183005240505"
const API_URL = "http://api.weatherapi.com/v1"


async function getWeather(location){
    const city = location;
    const API_URL_UPDATE = API_URL +`/current.json?key=${API_KEY}&q=${city}&api=no`;
    try {
        const response = await axios.get(API_URL_UPDATE);
        return response.data.current;
    } catch (error) {
        console.error('Error:');
    }
}

module.exports = {getWeather};