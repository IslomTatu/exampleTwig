import { USER_LOGGED_IN,
    USER_LOGGED_OUT,
    USER_ACTIVATE_CODE
} from '../constants'
import api from '../api'

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
        dispatch(userLoggedIn(response.status))
    })

export const active = code => dispatch =>
    api.user.activate(code).then(response => {
        console.log("in auth action active code response", response)
        dispatch(activateCode(response))
    })