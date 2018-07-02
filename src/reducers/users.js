import {USER_ACTIVATE_CODE,
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    USER_SIGN_UP } from "../constants"

const initialState = {
    username: "",
    email: "",
    avatar: ""
}

const user = (state = initialState, action) => {
    switch (action.type){
        case USER_SIGN_UP:
            return {}
        case USER_LOGGED_IN:
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                avatar: action.payload.avatar
            }
        case USER_LOGGED_OUT:
            return {}
        case USER_ACTIVATE_CODE:
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                avatar: action.payload.avatar
            }

        default:
            return state
    }
}


export default user