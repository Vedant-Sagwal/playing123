const axios = require('axios');

module.exports = async (location) => {
    try {
        const response = await axios.get(`https://wttr.in/${location}?format=j1`);
        const weatherData = response.data.weather.slice(0, 10).map(day => {
            return `${day.date}: ${day.hourly[4].weatherDesc[0].value}, Avg Temp: ${day.avgtempC}°C`; 
        }).join("\n");
        return weatherData;
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        return "Could not fetch weather data.";
    }
};

