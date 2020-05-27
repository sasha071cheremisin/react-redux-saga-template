import { CREATE_POST } from './types'
import { showAlert } from './actions'

const forbidden = [
	'php',
	'fuck',
	'spam'
]

export function forbiddenWordsMiddleWare( { dispatch } ) {
	return function ( next ) {
		return function ( action ) {
			if ( action.type === CREATE_POST ) {
				const found = forbidden.filter( w => action.payload.title.includes( w ) )
				if ( found.length ) {
					return dispatch( showAlert( 'Запрещенные слова' ) )
				}
			}
			return next( action )
		}
	}
}