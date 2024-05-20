const axios  = require("axios");
const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;


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