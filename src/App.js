import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';


// import Components from "views/Components.js";
import LandingPage from "./views/LandingPage.js";
import ProfilePage from "./views/ProfilePage.js";

var hist = createBrowserHistory();

class App extends Component{

	state = {
		login: false,
		response: ''

	}

		login = (response)=>{
			this.setState({
				response: response
			})
		}


  //   login = (accesToken, id, name, email, picture) => {
  //     console.log(this)
  //     this.setState({
  //       logged: true,
  //       accesToken: accesToken,
  //       id: id,
		// name: name,
		// email: email,
		// picture: picture,

  //   })
  // }



	render(){
		return(
		  <Router history={hist}>
		    <Switch>
		      <Route path="/" render={(props)=> <LandingPage login={this.login}/>} />
		      <Route path="/profile" render={(props)=> <ProfilePage/>} />
		    </Switch>
		  </Router>
		)
	}
}

export default App;