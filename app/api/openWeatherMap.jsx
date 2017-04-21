var axios = require('axios')

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=2d794e93eed9b16278474c0bb4fd5c38'
const OPEN_WEATHER_MAP_URL_START = 'http://api.openweathermap.org/data/2.5/find?'
const OPEN_WEATHER_MAP_URL_END = '&units=metric&appid=2d794e93eed9b16278474c0bb4fd5c38'

module.exports = {
    getTemp (location) {
        var encodedLocation = encodeURIComponent(location)
        var requestUrl = `${OPEN_WEATHER_MAP_URL_START}q=${encodedLocation}${OPEN_WEATHER_MAP_URL_END}`

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod !== "200" || res.data.list.length === 0) {
                throw new Error("City not found")
            } else {
                return res.data.list[0].main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message)
        })
    }
}

//2d794e93eed9b16278474c0bb4fd5c38