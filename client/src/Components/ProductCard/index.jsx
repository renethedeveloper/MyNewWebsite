import React, { useEffect, useContext } from "react";
import { MyContext } from "../../Context";
import Carousel from "../Carousel";
import "./index.css";

const ProductCard = ({ productType }) => {
  const {
    setSelectedImage,
    selectedImage,
    productsArray,
    selectedProduct,
    setSelectedProduct,
  } = useContext(MyContext);

  const handleClickImage = (product) => {
    setSelectedProduct([product]);
    setSelectedImage(product.images[0]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productType]); // Ensure this effect only runs when productType changes

  useEffect(() => {
    // Check if a product is selected from the SearchBar
    if (selectedProduct.length > 0 && selectedProduct[0].type === productType) {
      setSelectedImage(selectedProduct[0].images);
    } else {
      const firstProduct = productsArray.find((product) => product.type === productType);

      // Directly compare properties instead of using isEqualArrays
      if (firstProduct && firstProduct !== selectedProduct[0]) {
        setSelectedProduct([firstProduct]);
        setSelectedImage(firstProduct.images);
      } else if (!firstProduct && selectedProduct.length > 0) {
        setSelectedProduct([]);
        setSelectedImage("");
      }
    }
  }, [productsArray, productType, setSelectedProduct, setSelectedImage, selectedProduct]);

  const filteredProducts = productsArray.filter((product) => product.type === productType);

  return (
    <div>
      <div className="mainProductDiv">
        <div className="Title">{productType}</div>

        <div className="mainPic">
          <img className="image" src={selectedImage} alt="mainImage" />
        </div>

        {selectedProduct.length > 0 && (
          <div className="specs">
            <h4 className="productTitle">{selectedProduct[0].title}</h4>
            <h3 className="productDescription">{selectedProduct[0].description}</h3>
            <br />
            <br />
            <br />
            <p className="price">Price: $ {selectedProduct[0].price}</p>
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

export default ProductCard;
