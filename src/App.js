import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { routeActions, syncHistoryWithStore } from 'react-router-redux';

import LoginPage from './containers/LoginPage';
import AdminPage from './containers/AdminPage';
import DriverPage from './containers/DriverPage';

import './assets/styles/app.css';

import store from './store/index';
window.store = store

export default class App extends Component {
	render() {
		return (
			<Provider key={module.hot ? Date.now() : store} store={store}>
				<BrowserRouter>
					<Switch>
						<Route path="/login" component={LoginPage} />
						<Route path="/admin" component={AdminPage} />
						<Route path="/:driverId" component={DriverPage} />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}

