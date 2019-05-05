import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js';
import RegisterMain from './containers/RegisterMain.js';
import LoginMain from './containers/LoginMain.js';
import HomeMain from './containers/HomeMain.js';
import { Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
		<BrowserRouter>
			<div className="App">
				<Route exact path = "/"      component = { RegisterMain } />
				<Route       path = "/login" component = { LoginMain } />
				<Route       path = "/home"  component = { HomeMain } />
			</div>
		</BrowserRouter>
    </Provider>
  );
}

export default App;
