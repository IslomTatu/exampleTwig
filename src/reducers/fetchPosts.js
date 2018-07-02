import {
    LIKE_POSTS, UNLIKE_POSTS,
    POSTS_FETCHED, POST_FETCHED, COMMENTS_FETCHED
} from "../constants";

const initialState = {
    items: [],
    item: {},
    comments: []
}

const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case POSTS_FETCHED:
            return {
                ...state,
                items: action.data
            }

        case POST_FETCHED:
            return {
                ...state,
                item: action.data
            }

        case COMMENTS_FETCHED:
            return {
                ...state,
                comments: action.payload
            }
        case LIKE_POSTS:

            return {
                ...state,
                items: state.items.map(item => (item.id === action.id)
                    ? {...item, like: item.like + 1}
                    : item
                )
            }
        case UNLIKE_POSTS:

            return {
                ...state,
                items: state.items.map(item => (item.id === action.id)
                    ? {...item, unlike: item.unlike - 1}
                    : item
                )
            }

        default:
            return state
    }
}
export default postReducer
