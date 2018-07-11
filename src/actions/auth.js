import { USER_LOGGED_IN,
    USER_LOGGED_OUT,
    USER_ACTIVATE_CODE,
    USER_SIGN_UP
} from '../constants'
import api from '../api'
import setAuthorizationHeader from "../utils/setAuthorizationHeader";


//****************************************
export const userSignUp = () => ({
    type: USER_SIGN_UP
})

export const signup = credentials => dispatch =>
    api.user.singup(credentials).then(token => {
        localStorage.twigJWT = token
        dispatch(userSignUp())
    })
//**************************************************


//*************************************************
export const activateCode =  (payload) => ({
    type: USER_ACTIVATE_CODE,
    payload
})

export const active = code => dispatch =>
    api.user.activate(code).then(user => {
        dispatch(activateCode(user))
    })
//************************************************


//************************************************
export const userLogIn = payload => ({
    type: USER_LOGGED_IN,
    payload
})

export const confirmUser = token => dispatch => {
    if (!!localStorage.twigJWT) {
        delete localStorage.twigJWT
    }
    localStorage.twigJWT = token
    setAuthorizationHeader(token)
    api.user.confirm().then((user) => {
        dispatch(userLogIn(user))

    })
}

export const login = user => dispatch =>
    api.user.login(user).then(token => {
        dispatch(confirmUser(token))
    })

//*********************************************


//*******************************************
export const userLogOut = () => ({
    type: USER_LOGGED_OUT
})

export const logout = () => dispatch => {
    delete localStorage.twigJWT
    setAuthorizationHeader()
    dispatch(userLogOut())
}
//**************************************************


//****************************************************
export const fetchUser = () => dispatch => {
    if(!!localStorage.twigJWT){
        let token = localStorage.twigJWT
        setAuthorizationHeader(token)
        dispatch(confirmUser(token))
    }
    else{
        console.log("PLEASE LOGIN or SIGN UP! :)")
    }
}

