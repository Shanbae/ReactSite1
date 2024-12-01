import React from 'react'
import image1 from '../Images/pexels-elevate-1267320.jpg';
const Contents = () => {
  return (
    <div>
        <h2>Welcome to Shan's</h2>
      <div
      
      style={
        {
            'display':'flex',
            'justifyContent':'space-between',
            
           
        }
      }><p
      style={
        {
           'flex':'1',
           'text-align':'center',
           'margin-right':'20px',
           'fontSize':'22px',
           'fontFamily':'Papyrus',
           'padding-top':'100px',
        }
      }
      >
       Where Flavor Meets Elegance
       Indulge in a culinary experience like no other at Shan's. Nestled in the heart of Tricy, we pride ourselves on bringing you an exquisite selection of dishes crafted from the freshest, locally-sourced ingredients. Our skilled chefs blend traditional flavors with modern techniques to create dishes that not only satisfy but also celebrate the art of food.
      </p>
      <img
      src={image1}
      alt=""
      style={{

        'max-width':'50%',
        'border':'1px ',
        'padding':'10px',
        'border-radius':'100%',
      }}></img>
      </div>
    </div>
  )
}

export default Contents
