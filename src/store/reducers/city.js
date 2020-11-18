const initial_states = {
    cities : [],
    cityToFind : ""
}

const cityReducer = (state = initial_states, action) => {
    switch (action.type) {
        case "SET_CITY_TO_FIND" :
            return {
                ...state,
                cityToFind : action.payload
            }
        default : return state
    }
}
export default cityReducer;