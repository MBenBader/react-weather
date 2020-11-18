import { useDispatch } from 'react-redux';
function CityFinder () {
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
                <input className="input is-primary" type="text" placeholder="Search" onChange={findCity}/>
                <span className="icon is-left">
                    <i className="fas fa-search" aria-hidden="true"></i>
                </span>
                </p>
            </div>
        
        </article>

        
    )
}

export default CityFinder;