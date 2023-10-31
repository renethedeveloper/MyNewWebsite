import React, {  useEffect } from 'react';
import { useContext } from 'react';
import "./index.css";
import Carousel from '../Carousel';
import { MyContext } from '../../Context';

const Gallery = ({productType}) => {
  const { defaultImage, selectedImage, setSelectedImage, productsArray } = useContext(MyContext);

  useEffect(() => {
    if (selectedImage === undefined) {
      setSelectedImage(defaultImage);
    }
  }, [selectedImage, setSelectedImage, defaultImage]);

  const filteredProducts = productsArray.filter(product => product.type === productType);
  console.log(productsArray+"Hello there!")

  return (
    <div>
      <div className='mainProductDiv'>
        <div className='Title'>{productType}</div>

        <div className='mainPic'>
          <img className='image' src={defaultImage[product?.image]} alt="mainImage" />
        </div>

        <div className='specs'>
          {filteredProducts.map(product => (
            <div key={product._id}>
              <h4 className='productTitle'>{product.title}</h4>
              <h3 className='productDescription'>{product.description}</h3>
              <br /><br /><br /><br />
              <p className='price'>Price: {product.price}</p>
            </div>
          ))}
        </div>

        <div className='paymentOptions'>Payments options</div>
      </div>

      <div className='carousel'>
        {<Carousel/>}
      </div>
    </div>
  );
}

export default Gallery;
