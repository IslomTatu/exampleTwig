import {USER_ACTIVATE_CODE,
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    USER_SIGNUP } from "../constants"

const initialState = {
    status: 0,
    username: "",
    email: "",
    avatar: "",
    isAuth: false
}

const user = (state = initialState, action) => {
    switch (action.type){
        case USER_LOGGED_IN:
            console.log("in reducer action.status", action.status)
            return {
                status: action.status
            }
        case USER_LOGGED_OUT:
            return {}
        case USER_ACTIVATE_CODE:
            return {
                status: action.response.status,
                username: action.response.data.username,
                email: action.response.data.email,
                avatar: action.response.data.avatar
            }

        case USER_SIGNUP:
            return {
                username: action.user.username,
                email: action.user.email,
                avatar: action.user.avatar,
                isAuth: !!localStorage.twigJWT
            }

        default:
            return state
    }
}


export default user