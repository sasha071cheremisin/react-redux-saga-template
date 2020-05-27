import { CREATE_POST, FETCH_POSTS, HIDE_ALERT, HIDE_LOADER, REQUEST_POSTS, SHOW_ALERT, SHOW_LOADER } from './types'

export function createPost( post ) {
	return {
		type: CREATE_POST,
		payload: post
	}
}

export function fetchPosts() {
	return {
		type: REQUEST_POSTS
	}
}
/*
асинхронный запрос с помощью redux-thunk

export function fetchPosts() {
	return async dispatch => {
		let response = await fetch('')
		let json = await response.json()
		dispatch({
			type: FETCH_POSTS,
			payload: json
		})
	}
}*/

export function showLoader() {
	return {
		type: SHOW_LOADER
	}
}

export function hideLoader() {
	return {
		type: HIDE_LOADER
	}
}

export function showAlert( text ) {
	return dispatch => {
		dispatch( {
			type: SHOW_ALERT,
			payload: text
		} )

		setTimeout( () => {
			dispatch( hideAlert() )
		}, 1500 )
	}
}

export function hideAlert() {
	return {
		type: HIDE_ALERT,
	}
}