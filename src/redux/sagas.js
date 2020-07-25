import {put, takeEvery, call} from "redux-saga/effects";
import {ADD_POST, GET_POSTS, setPosts} from "./postsReducer";
import {hideAlert, showAlert} from "./appReducer";

function* getPostsWorker() {
	try {
		const posts = yield getPosts()
		yield put(setPosts(posts))
	} catch (e) {
		yield put(showAlert("Some error"))
		yield delay(3000)
		yield put(hideAlert())
	}
}

function* addPostWorker({post}) {
	try {
		yield call(addPost, post)
		yield put(showAlert("Your post added"))
		yield put({type: GET_POSTS})
		yield delay(3000)
		yield	put(hideAlert())
	} catch (e) {
		yield put(showAlert("Some error"))
		yield delay(3000)
		yield put(hideAlert())
	}
}

function delay(ms) {
	return new Promise((res) => setTimeout(res, ms))
}

async function getPosts() {
	const data = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
	return await data.json()
}

async function addPost(post) {
	await fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify(post),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}
	)
}

export default function* rootSaga() {
	yield takeEvery(GET_POSTS, getPostsWorker)
	yield takeEvery(ADD_POST, addPostWorker)
}
