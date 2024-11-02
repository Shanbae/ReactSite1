import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import images11 from '../Images/image-1366x400 (1).jpg';
import images31 from '../Images/image-1366x400 (3).jpg';
import images41 from '../Images/image-1366x400 (2).jpg';
import images51 from '../Images/image-1366x400 (4).jpg';
import images61 from '../Images/image-1366x400 (5).jpg';
import images71 from '../Images/image-1366x400 (6).jpg';
import images81 from '../Images/image-1366x400.jpg';





function Carousel()  {
    const images=[
        <img src={images11} className="sliderimg"></img>,        
        <img src={images31} className="sliderimg"></img>,
        <img src={images41} className="sliderimg"></img>,
        <img src={images51} className="sliderimg"></img>,
        <img src={images61} className="sliderimg"></img>,
        <img src={images71} className="sliderimg"></img>,
        <img src={images81} className="sliderimg"></img>
       
    ];
  return (
    <div>
        
      <AliceCarousel
        autoPlay
        autoPlayInterval={2000}
        infinite
        disableButtonsControls
        items={images}
        ></AliceCarousel>
    </div>
  )
}

export default Carousel





