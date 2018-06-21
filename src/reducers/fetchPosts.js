import {DATA_POSTS, FETCH_POSTS, NEW_POST, LIKE_POSTS, UNLIKE_POSTS, FETCH_MORE_DATA, GET_POST_ID} from "../constants";

const initialState = {
    items: [],
    item: {}
}

const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
            break
        case DATA_POSTS:
            return {
                ...state,
                items: action.payload
            }
            break
        case GET_POST_ID:
            return {
                ...state,
                item: action.payload
            }
        case LIKE_POSTS:

            return {
                ...state,
                items: state.items.map(item => (item.id == action.id)
                    ? {...item, like: item.like + 1}
                    : item
                )
            }
            break
        case UNLIKE_POSTS:

            return {
                ...state,
                items: state.items.map(item => (item.id == action.id)
                    ? {...item, unlike: item.unlike - 1}
                    : item
                )
            }
            break

        default:
            return state
    }
}
export default postReducer
