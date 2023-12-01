import React, { useEffect, useContext, useState } from "react";
import { MyContext } from "../../Context";
import Carousel from "../Carousel";
import "./index.css";


const Gallery = ({ productType }) => {
  
  const { setSelectedImages, selectedImages, productsArray, selectedProduct, setSelectedProduct } = useContext(MyContext);

  const handleClickImage = (product) => {
    setSelectedProduct(product);
    setSelectedImages(product.images);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  
    // Check if a product is selected from the SearchBar
    if (selectedProduct && selectedProduct.type === productType) {
      setSelectedImages(selectedProduct.images);
    } else {
      // Find the first product of the specified productType
      const firstProduct = productsArray.find((product) => product.type === productType);
  
      // Set the selected product to the first product, if it exists
      if (firstProduct) {
        setSelectedProduct(firstProduct);
        setSelectedImages(firstProduct.images);
      } else {
        setSelectedProduct(null);
        setSelectedImages(""); // No product found for the productType
      }
    }
  }, [productsArray, productType, setSelectedProduct, setSelectedImages, selectedProduct]);
  
  

  const filteredProducts = productsArray.filter((product) => product.type === productType);

  return (
    <div>
      <div className="mainProductDiv">
        <div className="Title">{productType}</div>

        <div className="mainPic">
          <img className="image" src={selectedImages} alt="mainImage" />
        </div>

        {selectedProduct && (
          <div className="specs">
            <h4 className="productTitle">{selectedProduct.title}</h4>
            <h3 className="productDescription">{selectedProduct.description}</h3>
            <br />
            <br />
            <br />
            <p className="price">Price: $ {selectedProduct.price}</p>
          </div>
        )}

        <div className="paymentOptions">Payments options</div>
      </div>

      <div className="carousel">
        {<Carousel productsArray={filteredProducts} selectedProduct={selectedProduct} handleClickImage={handleClickImage} />}
      </div>
    </div>
  );
};

export default Gallery;
