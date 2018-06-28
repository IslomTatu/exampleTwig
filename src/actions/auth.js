import { USER_LOGGED_IN,
    USER_LOGGED_OUT,
    USER_ACTIVATE_CODE,
    USER_SIGNUP
} from '../constants'
import api from '../api'
import setAuthorizationHeader from "../utils/setAuthorizationHeader";

export const userLoggedIn = (status) => ({
    type: USER_LOGGED_IN,
    status
})

export const activateCode =  (response) => ({
    type: USER_ACTIVATE_CODE,
    response
})


export const login = credentials => dispatch =>
    api.user.login(credentials).then(response => {
        console.log("in auth action response", response)
        localStorage.twigJWT = response.data.auth_token
        setAuthorizationHeader(response.data.auth_token)
        dispatch(userLoggedIn(response.status))
    })

export const active = code => dispatch =>
    api.user.activate(code).then(response => {
        console.log("in auth action active code response", response)
        dispatch(activateCode(response))
    })

export const userSignup = user => ({
    type: USER_SIGNUP,
    user
})

export const confirmUser = token => dispatch =>
    api.user.confirm(token).then((res) => {
        console.log("this is in confirmUser ", res)
        window.location.assign("/")
    })

export const signup = user => dispatch =>
    api.user.signup(user).then(response => {
        console.log("token in signup", response.data.auth_token)
        dispatch(confirmUser(response.data.auth_token))
    })