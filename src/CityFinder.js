import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
import Weather from './Weather';

import {
    useRouteMatch
} from "react-router-dom";

function CityFinder() {

    let match = useRouteMatch();


    const cities = useSelector(state => state.cityReducer.cities);
    const [active, setActive] = React.useState(false);
    const dispatch = useDispatch()

    const findCity = (e) => {
        if (match.path === "/region" && e.target.value.length >= 2) {
            dispatch({ type: "SET_REGION", payload: e.target.value })
        }
        else if (match.path === "/cityname" && e.target.value.length >= 3) {
            dispatch({ type: "SET_CITY_TO_FIND", payload: e.target.value })
        }
    }

    const handleClick = (city) => {
        setActive(!active)
        dispatch({ type: "SET_CITY", payload: city })
    }

    const handleClose = () => {
        setActive(false)
    }

    return (
        <div>
            <article className="panel is-primary">
                <p className="panel-heading">
                    {match.path === "/region" ? "Find city by zipcode" : "Find city by name"}
                </p>
                <div className="panel-block">
                    <p className="control has-icons-left">
                        <input className="input is-primary" type="text" placeholder="Search" onChange={findCity} />
                        <span className="icon is-left">
                            <i className="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>

                </div>
                {cities.map(city => {
                    return (
                        <div key={city.name + city.zipcode} className="panel-block is-active" onClick={() => { handleClick(city.name) }}>
                            <span className="panel-icon">
                                <i className="fas fa-book" aria-hidden="true"></i>
                            </span>
                            {city.name} - {city.zipcode}
                        </div>
                    )
                })}


            </article>
            <div className={`modal ${active && "is-active"}`}  >
                <div className="modal-background"></div>
                <div className="modal-content">
                    <Weather />
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
            </div>
        </div>

    )
}

export default CityFinder;