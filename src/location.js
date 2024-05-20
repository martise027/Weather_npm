const axios = require('axios');

async function getLoc() {
    try {
        const response = await axios.get('https://ipapi.co/json/');
        //console.log('response.data ->',response.data);
        return response.data.city;
    } catch (error) {
        console.error('Error fetching location:', error.message);
        return null;
    }
}

module.exports = { getLoc };