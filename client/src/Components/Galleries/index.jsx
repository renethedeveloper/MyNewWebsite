import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { MyContext } from '../../Context';

const Galleries = ({ type }) => {
  const { productsArray, setSelectedProduct } = useContext(MyContext);

  const handleImageClick = (product) => {
    setSelectedProduct(product); // Set the selected product in the context
  };

  // Filter products based on the type
  const items = productsArray.filter((product) => product.type.toLowerCase() === type);

  return (
    <div className='showGrid'>
      {items.map((item) => (
        <Link key={item._id} to={`/product/${item._id}`} className='showRoomImageLink'>

          <img
            className='showRoomImage'
            src={item.images[0]}
            alt={item.title}
            onClick={() => handleImageClick(item)} // Add onClick handler
          />
        </Link>
      ))}
    </div>
  );
};

export default Galleries;
