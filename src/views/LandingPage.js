import React, { Component } from 'react'
import PrimarySearchAppBar from '../Components/navbar.js'
import Album from '../Components/album.js'


class LandingPage extends Component {
	render(){
		return(
			<div>
				<PrimarySearchAppBar />
				<Album/>

			</div>
		)
	}
}

export default LandingPage;