import React from 'react'
import "./index.css"
import CustomSourcing from '../CustomSourcing'


const Contact = () => {
  return (
    <div className='contactContainer'>
      <div className='contactAndEmail'>
     <h1>Contact</h1>
     <h3 className='email'>DreamPop@gmail.com</h3>
     </div>
     <img src="Images/Nagel.Palm.Springs.jpg" alt="" />
     <h3 className='phoneNumber'>206.555.1212</h3>
     {/* <h3 className='customSourcingAd'>Don't forget to ask about custom sourcing. If there is a particular item you want us to keep an eye out for, let us know and we will put our feelers out!</
     h3> */}
    <div className='sourcing'>
    < CustomSourcing />
    </div>
     </div>
     
    
    
  )
}

export default Contact;
