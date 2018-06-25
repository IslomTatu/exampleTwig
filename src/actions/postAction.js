import { normalize } from 'normalizr'
import { POSTS_FETCHED,
    LIKE_POSTS,
    UNLIKE_POSTS,
    POST_FETCHED

} from "../constants";
import api from './api'

import axios from 'axios'

const postsFetched = data => ({
    type: POSTS_FETCHED,
    data
})

const postFetched = data => ({
    type: POST_FETCHED,
    data
})

export const  fetchPosts = () => dispatch  => {

    api.posts
        .fetchAll()
        .then(posts => dispatch(postsFetched(posts)))

}

export const getPostId = id => dispatch => {

    api.post
        .fetchOne(id)
        .then(post => dispatch(postFetched(post)))
}


export const likePost = (id) => ({
    type: LIKE_POSTS,
    id
})

export const unlikePost = (id) => ({
    type: UNLIKE_POSTS,
    id
})
