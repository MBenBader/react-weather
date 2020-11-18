import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Axios from "axios";

function Weather() {
    const city = useSelector(state => state.cityReducer.city);
    const [weather, setWeather] = React.useState({});

    const parseDate = (unix_timestamp) => {
        var date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        var formattedTime = hours + 'h' + minutes.substr(-2) + 'min' + seconds.substr(-2) + 'sec';
        return formattedTime;

    }

    useEffect(() => {
        if (city) {
            Axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + city
                + "&appid=781a97845dae01eb40e0931eec9a998f&units=metric").then(response => {
                    setWeather({
                        temperature: response.data.main.temp,
                        description: response.data.weather[0].description,
                        icon: response.data.weather[0].icon,
                        sunset: parseDate(response.data.sys.sunset),
                        sunrise: parseDate(response.data.sys.sunrise)
                    })
                })
        }
    }, [city]);

    return (
        <div>
            <div className="modal-content">
                <div className="box">
                    <header className="modal-card-head">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                {weather.icon && <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="Image1" />}
                            </figure>
                        </div>
                        <p className="modal-card-title">{city} - {weather.temperature} °C</p>
                    </header>
                    <article className="media">

                        <div className="media-content">
                            <div className="content">
                                <div>
                                    <strong>Description : </strong> {weather.description}
                                </div>
                                <div>
                                    <figure className="image is-64x64">
                                        <img src="https://img.icons8.com/wired/64/000000/sunrise.png" alt="Image2" />
                                    </figure>
                                    <strong>Lever du soleil : </strong> {weather.sunrise}
                                </div>
                                <div>
                                    <figure className="image is-64x64">
                                        <img src="https://img.icons8.com/wired/2x/sunset.png" alt="Image3" />
                                    </figure>
                                    <strong> Coucher du soleil : </strong> {weather.sunset}
                                </div>
                            </div>

                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default Weather;