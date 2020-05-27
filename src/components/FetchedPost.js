import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions'
import Post from './Post'
import { Spinner } from './Spinner'

export default () => {
	const dispatch = useDispatch()
	const posts = useSelector( state => state.posts.fetchedPosts )
	const loading = useSelector( state => state.app.loading )

	if ( loading ) {
		return <Spinner/>
	}

	if ( !posts.length ) {
		return (
			<button
				className="btn btn-primary"
				onClick={ () => dispatch( fetchPosts() ) }
			>
				Загрузить
			</button>
		)
	}

	return posts.map( post => <Post post={ post } key={ post.id }/> )
}