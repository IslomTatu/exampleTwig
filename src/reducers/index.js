import { combineReducers } from "redux"
import { routerReducer } from 'react-router-redux'
import postReducer from "./fetchPosts"
import sendData from './sendData'
import user from './users'


export default combineReducers({
    routing: routerReducer,
    news: postReducer,
    user: user

})