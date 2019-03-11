import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import pic1 from '../assets/caribean-bungalow.jpg'
import pic2 from '../assets/computer-dev.jpg'
import pic3 from '../assets/apple-devices.jpg'
import pic4 from '../assets/hong-kong.jpg'
import pic5 from '../assets/aerial-boat.jpg'
import pic6 from '../assets/ad-bay.jpg'
 
class ResponsiveCarousel extends Component {
  render() {
    return (
      <Carousel 
        autoplay={true} 
        speed={1200} 
        swiping={true} 
        pauseOnHover={false}
        heightMode={'max'}
        >
        
        <img src={pic1}/>
        <img src={pic2}/>
        <img src={pic3}/>
        <img src={pic4}/>
        <img src={pic5}/>
        <img src={pic6}/>
      </Carousel>
    );
  }
}

export default ResponsiveCarousel;