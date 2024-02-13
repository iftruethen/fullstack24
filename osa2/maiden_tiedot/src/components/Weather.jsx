const Weather = ({weather}) => {
    return (
        <>
            <p>temperature {weather.main.temp-273.15} Celcius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <p>wind {weather.wind.speed} m/s</p>
        </>
    )
}

export default Weather