import React, { Component } from 'react'
import NavBar from '../Components/navbar.js'
import Title from '../Components/title-with-buttons.js'
import Carousel from '../Components/carousel.js'
import Album from '../Components/album.js'



class LandingPage extends Component {
	render(){
		return(
			<div style={{"background-color": '#ffffff'}}>

				<NavBar handleLogin={this.props.handleLogin} logged={this.props.logged} response={this.props.response} />	
				
				<Carousel/>
				<Album items={this.props.items}/>

			</div>
		)
	}
}

export default LandingPage;