import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../constants'
import api from './api'

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
})


export const login = credentials => dispatch =>
    api.user.login(credentials).then(user => {
        dispatch(userLoggedIn(user))
    })