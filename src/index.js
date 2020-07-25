import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./redux/rootReducer";
import {Provider} from "react-redux";
import thunkMiddleware from "redux-thunk"
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,
	compose(
		applyMiddleware(thunkMiddleware, sagaMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App/>
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
