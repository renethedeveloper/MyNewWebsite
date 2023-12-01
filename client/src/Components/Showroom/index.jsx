import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const Showroom = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items based on the category
    axios.get(`/server/products/${category}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }, [category]);

  return (
    <div className='showGrid'>
      {items.map((item) => (
        <img key={item._id} className='showRoomImage' src={item.image} alt={item.title} />
      ))}
    </div>
  );
};

export default Showroom;
