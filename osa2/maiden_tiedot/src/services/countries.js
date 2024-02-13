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

export default {
    getCountryNames: getCountryNames,
    getOneCountry: getOneCountry
}