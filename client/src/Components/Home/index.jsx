import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import { Link } from 'react-router-dom';
import CustomSourcing from "../CustomSourcing";

const Home = () => {
  const [sourcingData, setSourcingData] = useState({
    name: "",
    email: "",
    priceRange: 0,
    lookedForItem: "",
  });

  
  return (
    <div>
      <img
        className="mainImage"
        src="Images/images/showRoomMain.png"
        alt="showroom"
      />
      <img className="map" src="Images/images/mapToShop.png" alt="map" />
      <p className="directions">Under Drip Tea Market!!</p>

      <div className="gallery-container">
        <div className="gallery-item">
          <Link to='/products/decor'>
            <img
              className="galleryImage"
              src="Images/images/flamingoMirror.jpeg"
              alt="flamingoMirror"
            />
            <h2 className="title">Decor</h2>
          </Link>
        </div>

        <div className="gallery-item">
          <Link to="/products/lighting">
            <img
              className="galleryImage"
              src="Images/images/PurpleLamp.webp"
              alt="tulipLamp"
            />
            <h2 className="title">Lighting</h2>
          </Link>
        </div>

        <div className="gallery-item">
          <Link to="/products/furniture">
            <img
              className="galleryImage"
              src="Images/images/leatherChair.jpeg"
              alt="leatherChair"
            />
            <h2 className="title">Furniture</h2>
          </Link>
        </div>

        <div className="gallery-item">
          <Link to="/products/kitchen">
            <img
              className="galleryImage"
              src="Images/images/memphisMug.jpeg"
              alt="mug"
            />
            <h2 className="title">Kitchen</h2>
          </Link>
        </div>
      </div>
      <CustomSourcing/> 
    </div>
  );
}

export default Home;