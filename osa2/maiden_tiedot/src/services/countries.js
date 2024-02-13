import axios from 'axios'

const getCountryNames = () => {
    const countryList = axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then(response => response.data)
    return countryList
}

const getOneCountry = (name) => {
    const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/name"
    const countryInfo = axios
        .get(`${baseUrl}/${name}`)
    return countryInfo
}

const getWeather = (citycoords,apikey,setWeatherData) => {
    const limit = 100
    let lat = citycoords[0]
    let lon = citycoords[1]
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`
    const weatherdata = axios.get(weatherUrl).then(response => setWeatherData(response.data))
    
    return weatherdata
}

export default {
    getCountryNames: getCountryNames,
    getOneCountry: getOneCountry,
    getWeather: getWeather
}