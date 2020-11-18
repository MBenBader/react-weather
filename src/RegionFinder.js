import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
import Weather from './Weather';

function RegionFinder() {

    const cities = useSelector(state => state.cityReducer.cities);
    const [active, setActive] = React.useState(false);
    const dispatch = useDispatch()

    const findCity = (e) => {
        if (e.target.value.length >= 3) {
            console.log("find =>", e.target.value)
            dispatch({ type: "SET_CITY_TO_FIND", payload: e.target.value })
        }
    }

    const handleClick = (city) => {
        setActive(!active)
        dispatch({ type: "SET_CITY", payload: city })
    }

    return (
        <div>
            <article className="panel is-primary">
                <p className="panel-heading">
                    Find city
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
                        <a className="panel-block is-active" onClick={() => { handleClick(city) }}>
                            <span className="panel-icon">
                                <i className="fas fa-book" aria-hidden="true"></i>
                            </span>
                            {city}
                        </a>
                    )
                })}


            </article>
            <div className={`modal ${active && "is-active"}`}  >
                <div className="modal-background"></div>
                <div className="modal-content">
                    <Weather />
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={handleClick}></button>
            </div>
        </div>





    )
}

export default RegionFinder;