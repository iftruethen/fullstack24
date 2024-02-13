import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import countryService from './services/countries'

const App = () => {
  const [searchWord, setSearchWord] = useState('')
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [oneCountry, setOneCountry] = useState(null)
  const [weather, setWeather] = useState(null)
  const api_key = import.meta.env.VITE_SOME_KEY

  const searchWordChange = (event) => {
    const searchTerm = event.target.value
    setSearchWord(searchTerm)
    setOneCountry(null)
    const filteredCountryList = countries
      .filter(countryName => countryName.toLowerCase().includes(searchTerm.toLowerCase()) )
    setCountriesToShow(filteredCountryList)
    if (filteredCountryList.length === 1) {
      countryService.getOneCountry(filteredCountryList[0]).then(response => setOneCountry(response.data))
    }
  }

  const clickHandler = (country) => {
    setSearchWord(country)
    countryService.getOneCountry(country).then(response => setOneCountry(response.data))
  }

  // get countries
  useEffect(() => {
    countryService
      .getCountryNames()
      .then(response => {
        const countryList = response.map(country => country.name.common)
        setCountries(countryList)
      })
  },[])

  // get weather data
  useEffect(() => {
    if (oneCountry !== null) {
    countryService.getWeather(oneCountry.capitalInfo.latlng,api_key,setWeather)
    }
  },[oneCountry]

  )

  return (
    <>
      <Filter searchWord={searchWord} searchWordChange={searchWordChange} />
      <Countries countryList={countriesToShow} oneCountry={oneCountry} clickHandler={clickHandler} 
        weather={weather} />
    </>
  )
}

export default App
