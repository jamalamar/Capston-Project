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
        wrapAround={true}
        pauseOnHover={false}
        heightMode={'max'}
        style={{margin: 'auto',
                width: '65%',                
                padding: '10px'}}
        >
        
        <img src={pic1} alt="Ad"/>
        <img src={pic2} alt="Ad"/>
        <img src={pic3} alt="Ad"/>
        <img src={pic4} alt="Ad"/>
        <img src={pic5} alt="Ad"/>
        <img src={pic6} alt="Ad"/>
      </Carousel>
    );
  }
}

export default ResponsiveCarousel;