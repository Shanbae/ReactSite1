import React from 'react'

const Footer = () => {
  return (
    <div className='footer'
    style={{
      'backgroundColor':'black',
      'color':'white',

    }}>
    <div>
      <h1>Shan's</h1>
      <p>A place where great food, ambiance, and service meet to create unforgettable dining experiences.</p>
    </div>   
    <div className='operation'>
      <p>🕒 Hours of Operation
          Monday - Thursday: 11:00 AM - 10:00 PM
          Friday - Saturday: 11:00 AM - 11:00 PM
          Sunday: 12:00 PM - 9:00 PM
          </p>
     </div>
     <div className='operation'>
      <p>📞 Contact Us
        Phone: 0431-4573345739457
        Email: asfsdfasd@gmail.com
          </p>
     </div>
     <div className='operation'>
      <p>Copyright © 2014 Shan's  All rights reserved.
          </p>
     </div>
  </div>
  )
}

export default Footer
