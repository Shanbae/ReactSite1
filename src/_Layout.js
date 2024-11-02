import React from "react";
import './Header.css';
import './Components/Carousel.js'
import Carousel from "./Components/Carousel.js";




function Layout(){


    
return(
<div>
    <header className="header">
        
    <h1>Shan's</h1>
    
    <nav className="nav-links">
        <li><a href="#Home">Home</a></li>
        <li><a href="#Details">Details</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#AwardsandRecognization">Awards and Recognization</a></li>
        <li><a href="#Carrier">Carrier</a></li>
    </nav>
    <div className="carousel-background">
          <Carousel />
    </div>
    </header>

</div>




);



}
export default Layout;