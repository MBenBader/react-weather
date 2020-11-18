const initial_states = {
    cities: [],
    cityToFind: "",
    city: "",
    codeRegion: ""
}

const cityReducer = (state = initial_states, action) => {
    switch (action.type) {
        case "SET_CITY_TO_FIND":
            return {
                ...state,
                cityToFind: action.payload
            }
        case "SET_CITIES":
            return {
                ...state,
                cities: action.payload
            }
        case "SET_CITY":
            return {
                ...state,
                city: action.payload
            }
        case "SET_REGION":
            return {
                ...state,
                codeRegion: action.payload
            }
        default: return state
    }
}
export default cityReducer;