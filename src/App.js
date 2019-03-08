import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";


// import Components from "views/Components.js";
import LandingPage from "./views/LandingPage.js";
import ProfilePage from "./views/ProfilePage.js";

var hist = createBrowserHistory();

class App extends Component{

	state = {
		user: '',
		login: false
	}

	render(){
		return(
		  <Router history={hist}>
		    <Switch>
		      <Route path="/" component={LandingPage} />
		      <Route path="/profile" component={ProfilePage} />
		    </Switch>
		  </Router>
		)
	}
}

export default App;