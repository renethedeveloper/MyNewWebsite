import React, { useState } from 'react';
import axios from 'axios';
import "./index.css"

const CustomSourcing = () => {
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
      const response = await axios.post("https://backenddreampop.onrender.com/submitForm", sourcingData);
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
    <div className="mainSourceFormDiv">
      <h1 className="sourcingTitle">
        Looking for anything in particular? Tell us, and we can custom source for you!
      </h1>
      <div className="customSourcing">
        <div className="sourceForm">
          <form onSubmit={handleSubmit}>
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
        {/* <div>
          <img
            className="flamingos"
            src="/Images/images/Flamingos.jpeg"
            alt="flamingos"
          />
        </div> */}
      </div>
    </div>
  );
};

export default CustomSourcing;
