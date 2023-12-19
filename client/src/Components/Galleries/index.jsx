import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import './index.css';
import { MyContext } from '../../Context';

const Galleries = ({ type }) => {
  const { productsArray, setSelectedProduct } = useContext(MyContext);
  const history = useHistory(); // Get the history object from react-router-dom

  const handleImageClick = (product) => {
    setSelectedProduct(product); // Set the selected product in the context
    history.push(`/product/${product.id}`); // Navigate to the product card page
  };

  // Filter products based on the type
  const items = productsArray.filter((product) => product.type.toLowerCase() === type);

  return (
    <div className='showGrid'>
      {items.map((item) => (
        <img
          key={item._id}
          className='showRoomImage'
          src={item.images[0]}
          alt={item.title}
          onClick={() => handleImageClick(item)} // Add onClick handler
        />
      ))}
    </div>
  );
};

export default Galleries;
