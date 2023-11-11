import React, { useState } from 'react';

const YourFormComponent = () => {
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label><br />
      <input type="text" id="name" name="name" value={name} onChange={handleNameChange} /><br />

      <label htmlFor="email">Email</label><br />
      <input type="text" id="email" name="email" value={email} onChange={handleEmailChange} /><br />

      <label htmlFor="priceRange">Price Range</label><br />
      <input type="range" id="priceRange" name="priceRange" min="0" max="1000" step="10" value={priceRange} onChange={handlePriceChange} />
      <span id="priceValue">{priceRange}</span><br />

      <label htmlFor="lookedForItem">Looked For Item</label><br />
      <input type="text" id="lookedForItem" name="lookedForItem" value={lookedForItem} onChange={handleLookedForItemChange} /><br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default YourFormComponent;
