export const SET_POSTS = "posts/SET_POSTS"
export const GET_POSTS = "posts/GET_POSTS"
export const ADD_POST = "posts/ADD_POST"

const initialState = {
	posts: null
}

export default function postsReducer(state = initialState, action) {
	switch (action.type) {
		case SET_POSTS:
			return {
				...state,
				posts: action.posts
			}
		default:
			return state
	}
}

export const setPosts = (posts) => ({type: SET_POSTS, posts})
export const getPosts = () => ({type: GET_POSTS})
export const addPost = (post) => ({type: ADD_POST, post})