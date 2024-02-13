const Countries = (props) => {
    const countries = props.countryList
    const oneCountry = props.oneCountry
    console.log(oneCountry)
    const imageStyle = {
        width: 200,
    }

    if (countries.length > 10) {
        return <>Too many matches, give more specific search word</>
    } else if (countries.length === 0) {
        return <>No results with given search word, try something else</>
    } else if (countries.length > 1) {
        return (
            <>
                {countries.map(country => <div key={country}>{country}</div>)}
            </>
        )
    } else if (oneCountry !== null) {
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
                <img style={imageStyle} src={oneCountry.flags.svg} />
            </>
        )
    }
}

export default Countries