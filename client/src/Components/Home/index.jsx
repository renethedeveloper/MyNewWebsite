import React from 'react'
import "./index.css"

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        
        <img className='mainImage' src="Images/images/showRoomMain.png" alt="showroom" />

        <img className='map' src="Images/images/mapToShop.png" alt="map" />
        <p className='directions'>Under Drip Tea Market!!</p>
        
        
       
        <div className='gallery'>
        <img id='galleryImage' src="Images/images/flamingoMirror.jpeg" alt="flamingoMirror" />
        <img id='galleryImage' src="Images/images/tulipLampsGold.jpeg" alt="tulipLamp" />
        <img id='galleryImage' src="Images/images/leatherChair.jpeg" alt="leatherChair" />
        </div>
        
      
    </div>
  )
}

export default Home;
