import React, { useState } from 'react';
import "./index.css";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Access the values in the state (name, email, priceRange, lookedForItem)
    console.log({ name, email, priceRange, lookedForItem });
    alert(`Thank you ${name}! We have received your information.`);
  };

  return (
    <div>
  <img className='mainImage' src="Images/images/showRoomMain.png" alt="showroom" />
  <img className='map' src="Images/images/mapToShop.png" alt="map" />
  <p className='directions'>Under Drip Tea Market!!</p>

  <div className='gallery-container'>
    <div className='gallery-item'>
      <img className='galleryImage' src="Images/images/flamingoMirror.jpeg" alt="flamingoMirror" />
      <h2 className='title'>Decor</h2>
    </div>

    <div className='gallery-item'>
      <img className='galleryImage' src="Images/images/tulipLampsGold.jpeg" alt="tulipLamp" />
      <h2 className='title'>Lighting</h2>
    </div>

    <div className='gallery-item'>
      <img className='galleryImage' src="Images/images/leatherChair.jpeg" alt="leatherChair" />
      <h2 className='title'>Furniture</h2>
    </div>
  </div>
      <div className='mainSourceFormDiv'>
        <h1 className='sourcingTitle'>Looking for anything in particular? Tell us and we can custom source for you!</h1>
        <div className='customSourcing'>
          <div className='sourceForm'>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label><br />
              <input type="text" id="name" name="name" /><br />

              <label htmlFor="email">Email</label><br />
              <input type="text" id="email" name="email" /><br />

              <label htmlFor="priceRange">Price Range</label><br />
              <input className='priceSlide' type="range" id="priceRange" name="priceRange" min="0" max="1000" step="10" value={priceRange} onChange={handlePriceChange} />
              <span id="priceValue">${priceRange}</span><br />

              <label htmlFor="lookedForItem">Describe the desired item. The more detail, the better.</label><br />
              <textarea className="desiredItem" id="lookedForItem" name="lookedForItem"></textarea>

              <button type="submit" style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
            </form>
          </div>
          <div>
            <img className="flamingos" src="/public/Images/images/Flamingos.jpeg" alt="flamingos" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
