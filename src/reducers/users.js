import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../constants"

export default user = (state = {}, action = {}) => {
    switch (action.type){
        case USER_LOGGED_IN:
            console.log(action.user)
        case USER_LOGGED_OUT:
            return {}
        default:
            return state
    }
}