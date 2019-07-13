import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import *as firebase from 'firebase'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './component/Login/Login'
import SignUp from './component/SignUp/SignUp'
import DashBoard from './component/DashBoard/DashBoard'

const firebaseConfig = {
  apiKey: "AIzaSyDkhj6d393EA26NdpR1AGu8KiZRLZW6uAU",
  authDomain: "leducanh25061997-emjgfy.firebaseapp.com",
  databaseURL: "https://leducanh25061997-emjgfy.firebaseio.com",
  projectId: "leducanh25061997-emjgfy",
  storageBucket: "leducanh25061997-emjgfy.appspot.com",
  messagingSenderId: "521513458348",
  appId: "1:521513458348:web:fe45b4bf56175979"
};

firebase.initializeApp(firebaseConfig)

const routing = (
	<Router>
		<div id="routing-container">
			<Route path="/login" component={Login} />
			<Route path="/dashboard" component={DashBoard} />
			<Route path="/signup" component={SignUp} />
		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
