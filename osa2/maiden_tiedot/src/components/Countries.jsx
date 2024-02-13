import Weather from "./Weather"

const Countries = (props) => {
    const countries = props.countryList
    const oneCountry = props.oneCountry
    const clickHandler = props.clickHandler
    const weather = props.weather
    const flagStyle = {
        width: 200,
    }

    if (oneCountry !== null) {
        return (
            <>
                <h1>{oneCountry.name.common}</h1>
                <>capital {oneCountry.capital[0]} <br /></>
                <>area {oneCountry.area} <br /></>
                <h4>languages:</h4>
                <ul>
                    {Object.values(oneCountry.languages).map(language => {
                        return <li key={language}>{language}</li>
                    })}
                </ul>
                <img style={flagStyle} src={oneCountry.flags.svg} />
                <h2>Weather in {oneCountry.capital[0]}</h2>
                {weather === null ? <></> : <Weather weather={weather} />}
            </>
        )
    }

    if (countries.length > 10) {
        return <>Too many matches, give more specific search word</>
    } else if (countries.length === 0) {
        return <>No results with given search word, try something else</>
    } else if (countries.length > 1) {
        return (
            <>
                {countries.map(country => {
                return (
                    <div key={country}>{country} <button onClick={() => clickHandler(country)}>show</button></div>
                )
            })}
            </>
        )
    } 
}

export default Countries