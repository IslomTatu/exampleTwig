import { normalize } from 'normalizr'
import { POSTS_FETCHED,
    LIKE_POSTS,
    UNLIKE_POSTS,
    POST_FETCHED,
    COMMENTS_FETCHED,
    COMMENTS_ERROR,
    COMMENT_READY,
    POSTS_FETCHING,
    POSTS_ERROR

} from "../constants";
import api from '../api'



const postsFetched = payload => ({
    type: POSTS_FETCHED,
    payload
})

const postFetched = payload => ({
    type: POST_FETCHED,
    payload
})


const postsFetching = () => ({
    type: POSTS_FETCHING
})

const postsError = () => ({
    type: POSTS_ERROR
})
export const  fetchPosts = () => dispatch  => {
    console.log("yannnnaaaaaaa")
    dispatch(postsFetching())
    api.post
        .fetchAll()
        .then(res => {

            return res.data.results
        })
        .then(posts => dispatch(postsFetched(posts)))
        .catch(err => {
            dispatch(postsError())
        })

}

export const getPostId = id => dispatch => {
    api.post
        .fetchOne(id)
        .then(post => dispatch(postFetched(post)))
}


//comments Action

export const commentsFetched = payload => ({
    type: COMMENTS_FETCHED,
    payload
})


export const commentError = err => ({
    type: COMMENTS_ERROR,
    err
})

export const getComments = id => dispatch => {
    api.post
        .fetchComments(id)
        .then(data => {
            dispatch(commentsFetched(data))
        })
        .catch(err => {
            dispatch(commentError(err))
        })
}

//********************************************
export const commentReady = payload => ({
    type: COMMENT_READY,
    payload
})

export const sendComment = (data) => dispatch =>
    api.post.comment(data).
        then(data => {
            dispatch(commentReady(data))
    })

//***********************************************

//********************************************
export const likePost = (id) => ({
    type: LIKE_POSTS,
    id
})

export const unlikePost = (id) => ({
    type: UNLIKE_POSTS,
    id
})
//********************************************