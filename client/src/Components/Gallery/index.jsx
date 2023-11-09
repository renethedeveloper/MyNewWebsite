import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { MyContext } from "../../Context";
import Carousel from "../Carousel";
import "./index.css";

const Gallery = ({ productType }) => {
  const { selectedImage, setSelectedImage, productsArray } = useContext(MyContext);

  const [selectedProduct, setSelectedProduct] = useState(null); // State for the selected product

  const [mainImage, setMainImage] = useState(""); // State to store the main image

  const handleClickImage = (product) => {
    setSelectedProduct(product);
    setMainImage(product.image);
  };

  useEffect(() => {
    // Find the first product of the specified productType
    const firstProduct = productsArray.find((product) => product.type === productType);

    // Set the main image and selected product to the first product, if it exists
    if (firstProduct) {
      setSelectedProduct(firstProduct);
      setMainImage(firstProduct.image);
    } else {
      setSelectedProduct(null);
      setMainImage(""); // No product found for the productType
    }
  }, [productsArray, productType]);

  const filteredProducts = productsArray.filter((product) => product.type === productType);

  return (
    <div>
      <div className="mainProductDiv">
        <div className="Title">{productType}</div>

        <div className="mainPic">
          <img className="image" src={mainImage} alt="mainImage" />
        </div>

        {selectedProduct && (
          <div className="specs">
            <h4 className="productTitle">{selectedProduct.title}</h4>
            <h3 className="productDescription">{selectedProduct.description}</h3>
            <br />
            <br />
            <br />
            <p className="price">Price: {selectedProduct.price}</p>
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
