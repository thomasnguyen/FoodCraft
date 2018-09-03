import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import About from './About';
import registerServiceWorker from './registerServiceWorker';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/about" component={About} />
		</Switch>
	</BrowserRouter>
);
ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
