import { FETCH_POSTS,
    NEW_POST,
    DATA_POSTS,
    LIKE_POSTS,
    UNLIKE_POSTS,
    FETCH_MORE_DATA} from "../constants";
import posts from '../base/file.json'
import axios from 'axios'


export const  fetchPosts = () => dispatch  => {
    fetch('https://twig.uz/v1.0/api/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts.results
        }))

    // axios.get('https://twig.uz/v1.0/api/posts/')
    //     .then(response => dispatch({
    //         type: FETCH_POSTS,
    //         payload: response.data.results
    //     }))
        // .then(res => dispatch({
        //     type: FETCH_POSTS,
        //     payload: res.data.results
        // }))
}

export const dataPosts = () => ({
    type: DATA_POSTS,
    payload: posts
})

export const likePost = (id) => ({
    type: LIKE_POSTS,
    id
})

export const unlikePost = (id) => ({
    type: UNLIKE_POSTS,
    id
})

export const fetchMoreData = data  => ({

        type: FETCH_MORE_DATA,
        data


})