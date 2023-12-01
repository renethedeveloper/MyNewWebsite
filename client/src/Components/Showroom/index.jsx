import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
import { MyContext } from '../../Context';

const Showroom = () => {
  const { category } = useParams();
  const { productsArray } = useContext(MyContext);

  // Filter products based on the category
  const items = productsArray.filter((product) => product.category === category);

  return (
    <div className='showGrid'>
      {items.map((item) => (
        <img key={item._id} className='showRoomImage' src={item.image} alt={item.title} />
      ))}
    </div>
  );
};

export default Showroom;
