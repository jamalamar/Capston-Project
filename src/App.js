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
		tokens: 0,
		response: '',
		items: []

	}


	handleLogin = (response)=>{
		this.setState({
			logged: true,
			response: response
		})
	}


  getItems = async () => {
  try{
    const items = await fetch('http://localhost:8080/inventory');
    const itemsJson = await items.json();
      this.setState({
        items: itemsJson,
      });
      return itemsJson;
  
  }catch (error) {
        console.log(error)
        return error
    }
  }

     componentDidMount(){
     this.getItems()
      .then((data) => console.log(data, ' ...from SQL databse'));
    }


	render(){
		return(
			  <Router history={hist}>
			<>
			    <Switch>
			  <NavBar handleLogin={this.handleLogin} logged={this.state.logged} response={this.state.response}>

			      <Route exact path="/home/" render={(props)=> <LandingPage handleLogin={this.handleLogin} items={this.state.items} logged={this.state.logged} response={this.state.response}/>} />
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