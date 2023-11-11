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
        

        <div>
      <div className='mainSourceFormDiv' >
      <div className='sourceForm'>

        <h1>Looking for anything in particular? Tell us and we can custom source for you!</h1>
          
            <form action="/action_page.php"></form>
        <form action="">
        <label htmlFor="name">Name</label><br />
<input type="text" id="name" name="name" /><br />

<label htmlFor="email">Email</label><br />
<input type="text" id="email" name="email" /><br />

<label htmlFor="priceRange">Price Range</label><br />
<input type="range" id="priceRange" name="priceRange" min="0" max="1000" step="10" /><br />
 

<label htmlFor="lookedForItem">Looked For Item</label><br />
<input type="text" id="lookedForItem" name="lookedForItem" /><br />

         
        </form>
       
      </div>
      <img className="Flamingos" src="/public/Images/images/Flamingos.jpeg" alt="flamingos" />

      </div>
      
    </div>
      
    </div>
  )
}

export default Home;
