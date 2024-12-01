import React from 'react'

import image1 from '../Images/pexels-life-of-pix-67468.jpg';
const Content3 = () => {
    return (
        <div>
            
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
           <span style={{'fontSize':'30px','fontFamily':'Consolas',}}>Join Us Today</span><br />
Experience the flavors, enjoy the ambiance, and create unforgettable memories at [Your Restaurant Name]. Book your table now or simply walk in to enjoy a delightful meal that will leave you coming back for more.
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

export default Content3
