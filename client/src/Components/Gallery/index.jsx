import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { MyContext } from "../../Context";
import Carousel from "../Carousel"
import "./index.css"

const Gallery = ({ productType }) => {
  const { selectedImage, setSelectedImage, productsArray } = useContext(MyContext);

  const [mainImage, setMainImage] = useState(""); // State to store the main image

  useEffect(() => {
    // Find the first product of the specified productType
    const firstProduct = productsArray.find((product) => product.type === productType);

    // Set the main image to the image of the first product, if it exists
    if (firstProduct) {
      setMainImage(firstProduct.image);
    } else {
      setMainImage(""); // No product found for the productType
    }
  }, [productsArray, productType]);

  return (
    <div>
      <div className='mainProductDiv'>
        <div className='Title'>{productType}</div>

        <div className='mainPic'>
          <img className='image' src={mainImage} alt="mainImage" />
        </div>

        <div className='specs'>
          {productsArray
            .filter((product) => product.type === productType)
            .map((product) => (
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
        {<Carousel />}
      </div>
    </div>
  );
};

export default Gallery;
