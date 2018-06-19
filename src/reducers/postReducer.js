import {DATA_POSTS, FETCH_POSTS, NEW_POST, LIKE_POSTS, UNLIKE_POSTS, FETCH_MORE_DATA} from "../constants";

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

        case FETCH_MORE_DATA:

            console.log("state in fetchMore", state)
            console.log("data in action data", action.data)

        default:
            return state
    }
}
export default postReducer
