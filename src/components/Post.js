import React from 'react'

export default ( { post } ) => {
	return (
		<div className="card">
			<div className="card-body">
				<div className="card-title">
					<h5>{ post.title }</h5>
				</div>
			</div>
		</div>
	)
}