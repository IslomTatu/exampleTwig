import {
    CREATE_TWIG,
    FETCHED_TWIGS,
    FETCHING_ERROR,
    FETCHED_USER_TWIGS,
    FETCHING_USER_ERROR
} from "../constants"

const initialState = {
    twigs: [],
    allTwigs: [],
    errors: []
}

const twigs = (state = initialState, action) => {
    const { type } = action
    switch(type){
        case CREATE_TWIG:
            return state
        case FETCHED_USER_TWIGS:
            return {
                ...this.state,
                twigs: action.payload
            }
        case FETCHING_USER_ERROR:
            return {
                ...this.state,
                errors: action.payload
            }
        case FETCHED_TWIGS:
            return {
                ...this.state,
                allTwigs: action.payload
            }
        case FETCHING_ERROR:
            return {
                ...this.state,
                errors: action.payload
            }

        default:
            return state
    }
}


export default twigs