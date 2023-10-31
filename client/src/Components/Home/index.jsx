import React from 'react'
import "./index.css"

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        
        <img className='mainImage' src="public/Images/images/showRoomMain.png" alt="showroom" />

        <img className='map' src="/public/Images/images/mapToShop.png" alt="map" />
        <p className='directions'>Under Drip Tea Market!!</p>
        
        
       
        <div className='gallery'>
        <img id='galleryImage' src="/public/Images/images/flamingoMirror.jpeg" alt="flamingoMirror" />
        <img id='galleryImage' src="/public/Images/images/tulipLampsGold.jpeg" alt="tulipLamp" />
        <img id='galleryImage' src="/public/Images/images/leatherChair.jpeg" alt="leatherChair" />
        </div>
        
      
    </div>
  )
}

export default Home;
