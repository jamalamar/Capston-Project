import React, { Component } from 'react';

import Carousel from '../Components/carousel.js';
import Album from '../Components/album.js';
import GridList from '../Components/grid-list.js';



//Style
const backgroundGradient = {background: '#ffffff'}
const header = {
				display: 'flex',
				margin: 0,
				'justify-content': 'center',
				// 'font-family': 'Sniglet, cursive',
				'font-size': '55px',
				color: '#ffffff',
				background: '#FF416C',  /* fallback for old browsers */
				background: '-webkit-linear-gradient(to right, #FF4B2B, #FF416C)',  /* Chrome 10-25, Safari 5.1-6 */
				background: 'linear-gradient(to right, #FF4B2B, #FF416C)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
				 /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
			}
const gridList = {
	
	display: 'flex',
	'justify-content': 'center',
}
						



class LandingPage extends Component {
	render(){
		return(
			<div style={backgroundGradient}>				

				<h1 style={header}>Auction Website</h1>
				
				<div style={gridList}>
					<GridList items={this.props.items}/>
				</div>
				
					<Album items={this.props.items} useToken={this.props.useToken}/>

				<Carousel/>

			</div>
		)
	}
}

export default LandingPage;