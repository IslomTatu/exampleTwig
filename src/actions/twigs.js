import {
    CREATE_TWIG,
    FETCHING_ERROR,
    FETCHED_TWIGS,
    FETCHING_USER_ERROR,
    FETCHED_USER_TWIGS,
    FETCHED_TWIG_POSTS,
    FETCHED_TWIG_POSTS_ERROR,
    FETCHING_TWIG_POSTS
} from '../constants'
import api from '../api'
import setAuthorization from '../utils/setAuthorizationHeader'

export const createTwig = () => ({
    type: CREATE_TWIG
})

export const addTwig = data => dispatch =>
    api.twig.create(data).then(data => {
        console.log("data in addTwig", data)
        dispatch(createTwig())
    })



//_-------------------------------------
export const fetchedUserTwigs = payload => ({
    type: FETCHED_USER_TWIGS,
    payload
})
export const fetchingUserError = payload => ({
    type: FETCHING_USER_ERROR,
    payload

})

export const fetchUserTwigs = () => dispatch => {

        api.twig.fetchUserAll()
            .then(data => {
                dispatch(fetchedUserTwigs(data))
            })
            .catch(err => {
                dispatch(fetchingUserError(err.response.data))
            })

}

//*************************************************************

//***********************************************************

const fetchedTwigs = payload => ({
    type: FETCHED_TWIGS,
    payload
})

const fetchingTwigsError = payload => ({
    type: FETCHING_ERROR,
    payload
})

export const fetchTwigs = () => dispatch => {
    api.twig.fetchAll()
        .then(data => {
            dispatch(fetchedTwigs(data))
        })
        .catch(err => {
            dispatch(fetchingTwigsError(err.response.data))
        })
}

//***************************************************************

const fetchedTwigPosts = payload => ({
    type: FETCHED_TWIG_POSTS,
    payload
})
const fetchedTwigPostsError = payload => ({
    type: FETCHED_TWIG_POSTS_ERROR,
    payload
})

const fetchingTwigPosts = () => ({
    type: FETCHING_TWIG_POSTS
})

export const fetchTwigPosts = twigName => dispatch =>{
    dispatch(fetchingTwigPosts())
    api.twig.fetchPosts(twigName)
        .then(data => {
            dispatch(fetchedTwigPosts(data))
        })
        .catch(err => {
            dispatch(fetchedTwigPostsError(err.response.data))
        })
}