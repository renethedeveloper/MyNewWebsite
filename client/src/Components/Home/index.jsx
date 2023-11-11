import React from 'react'
import "./index.css"
import { useState } from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [priceRange, setPriceRange] = useState(0);
  const [lookedForItem, setLookedForItem] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
  };

  const handleLookedForItemChange = (event) => {
    setLookedForItem(event.target.value);
  };

  const handleSubmit = (event) => {
    // Handle form submission
    event.preventDefault();
    // Access the values in the state (name, email, priceRange, lookedForItem)
    console.log({ name, email, priceRange, lookedForItem });
  };



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
        <form action="">
      <label htmlFor="name">Name</label><br />
      <input type="text" id="name" name="name" /><br />

      <label htmlFor="email">Email</label><br />
      <input type="text" id="email" name="email" /><br />

      <label htmlFor="priceRange">Price Range</label><br />
      <input className='priceSlide' type="range" id="priceRange" name="priceRange" min="0" max="1000" step="10" value={priceRange} onChange={handlePriceChange} />
      <span id="priceValue">${priceRange}</span><br />

      <label htmlFor="lookedForItem">Desired Item</label><br />
      <input type="text" id="lookedForItem" name="lookedForItem" /><br />

      <button type="submit">Submit</button>
    </form>


       
      </div>
      <img className="flamingos" src="/public/Images/images/Flamingos.jpeg" alt="flamingos" />

      </div>
      
    </div>
      
    </div>
  )
}

export default Home;
