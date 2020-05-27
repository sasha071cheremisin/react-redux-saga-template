import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux'
import { rootReducer } from './redux/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createSagaMiddleWare from 'redux-saga'
import { forbiddenWordsMiddleWare } from './redux/middleWare'
import { sagaWatcher } from './redux/sagas'
import App from './App';

const saga = createSagaMiddleWare()

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, forbiddenWordsMiddleWare, saga),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

saga.run(sagaWatcher)

const app = (
	<Provider store={ store }>
		<App/>
	</Provider>
)

render(
	app,
	document.getElementById( 'root' )
);

