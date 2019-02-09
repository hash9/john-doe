import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App'
import store from './core/configureStore';
import { HashRouter } from 'react-router-dom'

const MOUNT_NODE = document.querySelector('#root');

// ReactDOM.render(
// 	<Provider store={store}>
// 		<HashRouter>
// 			<App />
// 		</HashRouter>
// 	</Provider>,
// 	MOUNT_NODE
// );

ReactDOM.render(<App />,MOUNT_NODE);
