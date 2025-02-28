const axios = require("axios");

module.exports = async function () {
    const result = await axios({
        method : 'get',
        url : "https://ipinfo.io/json"
    })
    const {city, region} = result.data;
    return `${city}, ${region}`
}
