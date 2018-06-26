import {USER_ACTIVATE_CODE, USER_LOGGED_IN, USER_LOGGED_OUT} from "../constants"

const initialState = {
    status: 0,
    username: "",
    email: "",
    avatar: ""
}

const user = (state = initialState, action) => {
    switch (action.type){
        case USER_LOGGED_IN:
            console.log("in reducer action.status", action.status)

            return {
                ...state,
                status: action.status
            }
        case USER_LOGGED_OUT:
            return {}
        case USER_ACTIVATE_CODE:
            return {
                ...state,
                status: action.response.status,
                username: action.response.username,
                email: action.response.email,
                avatar: action.response.avatar
            }

        default:
            return state
    }
}


export default user