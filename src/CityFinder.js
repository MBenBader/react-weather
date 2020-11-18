import { useDispatch, useSelector } from 'react-redux';
function CityFinder() {

    const cities = useSelector(state => state.cityReducer.cities);

    const dispatch = useDispatch()

    const findCity = (e) => {
        if (e.target.value.length >= 3) {
            console.log("find =>", e.target.value)
            dispatch({ type: "SET_CITY_TO_FIND", payload: e.target.value })
        }

    }

    return (
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
                    <a class="panel-block is-active">
                        <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                        </span>
                        {city}
                    </a>
                )
            })}

        </article>


    )
}

export default CityFinder;