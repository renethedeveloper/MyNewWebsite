import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import CustomSourcing from '../CustomSourcing';

const Home = () => {
  
  return (
    <div>
      <img className="mainImage" src="Images/showRoomMain.png" alt="mainImage" />
      <img className="map" src="Images/mapToShop.png" alt="map" />
      <p className="directions">Under Drip Tea Market!!</p>

      <div className="productCard-container">
        <Link to="/galleries/decor" className="productCard-item">
          <img className="productCardImage" src="Images/flamingoMirror.jpeg" alt="flamingoMirror" />
          <h2 className="title">Decor</h2>
        </Link>

        <Link to="/galleries/lighting" className="productCard-item">
          <img className="productCardImage" src="Images/tulipLampsGold.jpeg" alt="tulipLamp" />
          <h2 className="title">Lighting</h2>
        </Link>

        <Link to="/galleries/furniture" className="productCard-item">
          <img className="productCardImage" src="Images/leatherChair.jpeg" alt="leatherChair" />
          <h2 className="title">Furniture</h2>
        </Link>

        <Link to="/galleries/kitchen" className="productCard-item">
          <img className="productCardImage" src="Images/glassTable.jpeg" alt="mug" />
          <h2 className="title">Kitchen</h2>
        </Link>
      </div>
      <CustomSourcing />
    </div>
  );
}

export default Home;
