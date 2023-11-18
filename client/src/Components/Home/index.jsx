import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {
  const [sourcingData, setSourcingData] = useState({
    name: "",
    email: "",
    priceRange: 0,
    lookedForItem: "",
  });

  const { name, email, priceRange, lookedForItem } = sourcingData;

  const handleNameChange = (event) => {
    setSourcingData({ ...sourcingData, name: event.target.value });
  };

  const handleEmailChange = (event) => {
    setSourcingData({ ...sourcingData, email: event.target.value });
  };

  const handlePriceChange = (event) => {
    setSourcingData({ ...sourcingData, priceRange: event.target.value });
  };

  const handleLookedForItemChange = (event) => {
    setSourcingData({ ...sourcingData, lookedForItem: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(sourcingData);
  
    try {
      const response =  axios.post("/server/submitForm", sourcingData);
      console.log(response.data, "Got this far");
      alert(`Thank you ${sourcingData.name}! We have received your information.`);
  
      setSourcingData({
        name: "",
        email: "",
        priceRange: 0,
        lookedForItem: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Oops! Something went wrong. Please try again later.");
    }
  };
  
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


      <div className="mainSourceFormDiv">
        <h1 className="sourcingTitle">
          Looking for anything in particular? Tell us and we can custom source
          for you!
        </h1>
        <div className="customSourcing">
          <div className="sourceForm">
            <form
              action="http://localhost:3000/submitForm"
              method="post"
              onSubmit={handleSubmit}
            >
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => handleNameChange(e)}
              />
              <br />

              <label htmlFor="email">Email</label>
              <br />
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => handleEmailChange(e)}
              />
              <br />

              <label htmlFor="priceRange">Price Range</label>
              <br />
              <input
                className="priceSlide"
                type="range"
                id="priceRange"
                name="priceRange"
                min="0"
                max="1000"
                step="10"
                value={priceRange}
                onChange={(e) => handlePriceChange(e)}
              />
              <span id="priceValue">${priceRange}</span>
              <br />

              <label htmlFor="lookedForItem">
                Describe the desired item. The more detail, the better.
              </label>
              <br />
              <textarea
                className="desiredItem"
                id="lookedForItem"
                name="lookedForItem"
                value={lookedForItem}
                onChange={(e) => handleLookedForItemChange(e)}
              ></textarea>

              <button
                type="submit"
                style={{
                  backgroundColor: "#4caf50",
                  color: "white",
                  padding: "10px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </form>
          </div>
          <div>
            <img
              className="flamingos"
              src="/Images/images/Flamingos.jpeg"
              alt="flamingos"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
