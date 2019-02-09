import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import reducers from '../reducers';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

const middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const store = createStore(
	reducers, 
		compose(
			applyMiddleware(...middlewares),
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

// if (module && module.hot) {
//   // Enable Webpack hot module replacement for reducers
//   module.hot.accept('../reducers', () => {
//     // eslint-disable-next-line global-require
//     const nextRootReducer = require('../reducers/index').default;
//     store.replaceReducer(nextRootReducer);
//   });
//   module.hot.accept();
// }

export default store;