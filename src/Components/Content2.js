import React from 'react'

import image1 from '../Images/pexels-edwardeyer-687824.jpg';
const Content2 = () => {
    return (
        <div>
          
          <div
          
          style={
            {
                'display':'flex',
                'justifyContent':'space-between',                               
            }
          }>
              <img
          src={image1}
          alt=""
          style={{
    
            'max-width':'50%',
            'border':'1px ',
            'padding':'10px',
            'border-radius':'100%',
          }}></img>
        
          <p
          style={
            {
               'flex':'1',
               'text-align':'center',
               'margin-right':'20px',
               'fontSize':'22px',
               'fontFamily':'Papyrus',
               'padding-top':'150px',
            }
          }
          >
             <span style={{'fontSize':'30px','fontFamily':'Consolas',}}>Why Choose Us?</span><br />
          At Shan's, we believe dining is more than just a meal  it's an experience. From the warm ambiance and attentive service to the carefully curated menu, every detail is designed to make your visit memorable. Whether you're here for a quick lunch, a romantic dinner, or a special celebration, we ensure that every moment is filled with flavor and delight.
          </p>
         
          </div>
        </div>
      )
}

export default Content2
