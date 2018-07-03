import {
    CREATE_TWIG,
    FETCHING_ERROR,
    FETCHED_TWIGS
} from '../constants'
import api from '../api'
import setAuthorization from '../utils/setAuthorizationHeader'

export const createTwig = () => ({
    type: CREATE_TWIG
})

export const addTwig = data => dispatch =>{
    if(!!localStorage.twigJWT){
        let token = localStorage.twigJWT
        setAuthorization(token)
    }
    api.twig.create(data).then(data => {
        console.log("data in addTwig", data)
        dispatch(createTwig())
    })
}


//_-------------------------------------
export const fetchedTwigs = payload => ({
    type: FETCHED_TWIGS,
    payload
})
export const fetchingError = payload => ({
    type: FETCHING_ERROR,
    payload

})

export const fetchTwigs = () => dispatch => {
    if(!!localStorage.twigJWT){
        let token = localStorage.twigJWT
        setAuthorization(token)

        api.twig.fetchAll()
            .then(data => {
                dispatch(fetchedTwigs(data))
            })
            .catch(err => {
                dispatch(fetchingError(err.response.data))
            })

    }
}