import React, { Component } from 'react'
import NavBar from '../Components/navbar.js'
import Title from '../Components/title-with-buttons.js'
import Carousel from '../Components/carousel.js'
import Album from '../Components/album.js'



class LandingPage extends Component {
	render(){
		return(
			<div>

				<NavBar login={this.props.login}/>	
				
				<Carousel/>
				<Album/>

			</div>
		)
	}
}

export default LandingPage;