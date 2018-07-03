import {
    CREATE_TWIG,
    FETCHED_TWIGS,
    FETCHING_ERROR
} from "../constants"

const initialState = {
    twigs: [],
    errors: []
}

const twigs = (state = initialState, action) => {
    const { type } = action
    switch(type){
        case CREATE_TWIG:
            return {}
        case FETCHED_TWIGS:
            return {
                ...this.state,
                twigs: action.payload
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