import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch} from "react-router-dom";


// import Components from "views/Components.js";
import LandingPage from "./views/LandingPage.js";
import ProfilePage from "./views/ProfilePage.js";
import ShopPage from "./views/ShopPage.js";
import Checkout from './views/Checkout.js'
import NavBar from './Components/navbar.js';
import Footer from './Components/footer.js';

var hist = createBrowserHistory();

class App extends Component{

	state = {
		logged: false,
		tokens: 100,
		response: ''
	}

	handleLogin = (response)=>{
		this.setState({
			logged: true,
			response: response
		})
	}


	handleChange = (event) => {
       this.setState({
        [event.target.name]: event.target.value
      })
    }


	useToken = ()=>{
		this.setState({
			tokens: this.state.tokens -1
		})
	}


  handleNewUser = (event)=> {
	   fetch('http://localhost:8080/users/new/user', {
	    method: "POST",
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({
	      user_id: '',
	      username: '',
	      email: '',
	      password: '',
	    })
	  }
	).then(response => response.json())
}


  handleNewShipping = (event)=> {
	   fetch('http://localhost:8080/users/new/shipping', {
	    method: "POST",
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({
	      user_id: '',
	      first_name: '',
	      last_name: '',
	      address_one: '',
	      address_two: '',
	      city: '',
	      state: '',
	      zip: '',
	      country: ''
	    })
	  }
	).then(response => response.json())
}

  handleNewPayment = (event)=> {
	   fetch('http://localhost:8080/users/new/payment', {
	    method: "POST",
	    headers: {
	      'Accept': 'application/json',
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({
	      user_id: this.state.response.id,
	      card_name: this.state.response.name,
	      card_number: this.state.response.email,
	      exp_date: '',
	      cvv: ''
	    })
	  }
	).then(response => response.json())
}


	render(){
		return(
		  <Router history={hist}>
				<>
				    <Switch>
						  <NavBar handleLogin={this.handleLogin} handleNewUser={this.handleNewUser} logged={this.state.logged} response={this.state.response} tokens={this.state.tokens}>

						      <Route exact path="/home/" render={(props)=> <LandingPage handleLogin={this.handleLogin} handleNewUser={this.handleNewUser} items={this.state.items} logged={this.state.logged} response={this.state.response} useToken={this.useToken}/>} />
						      <Route path="/shop/" render={(props)=> <ShopPage logged={this.state.logged} response={this.state.response} />} />
						      <Route path="/checkout/" render={(props)=> <Checkout logged={this.state.logged} response={this.state.response} />} />
						      <Route path="/profile/" render={(props)=> <ProfilePage logged={this.state.logged} response={this.state.response} />} />
						  </NavBar>
				    </Switch>
				  <Footer />
				</>
		  </Router>
		)
	}
}

export default App;