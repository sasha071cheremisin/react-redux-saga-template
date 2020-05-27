import React from 'react'
import Post from './Post'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useSelector } from 'react-redux'

export const PostList = () => {
	const syncPosts = useSelector( state => state.posts.posts )

	if ( !syncPosts.length ) {
		return <p>Постов нет</p>
	}

	const posts = syncPosts.map( post => (
		<CSSTransition
			key={ post.id }
			classNames="post"
			timeout={800}
		>
			<Post post={ post } />
		</CSSTransition>
	) )

	return (
		<TransitionGroup>
			{ posts }
		</TransitionGroup>
	)
}

