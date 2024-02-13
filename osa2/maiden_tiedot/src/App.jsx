import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import countryService from './services/countries'

const App = () => {
  const [searchWord, setSearchWord] = useState('')
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [oneCountry, setOneCountry] = useState(null)

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

  useEffect(() => {
    countryService
      .getCountryNames()
      .then(response => {
        const countryList = response.map(country => country.name.common)
        setCountries(countryList)
      })
  },[])

  return (
    <>
      <Filter searchWord={searchWord} searchWordChange={searchWordChange} />
      <Countries countryList={countriesToShow} oneCountry={oneCountry} />
    </>
  )
}

export default App
