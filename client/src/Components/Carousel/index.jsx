import React, { useContext } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./index.css";
import { MyContext } from "../../Context";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  768: { items: 3 },
  1024: { items: 4 },
};

const Carousel = ({ productsArray, selectedProduct, handleClickImage }) => {
  const { setSelectedImage } = useContext(MyContext);

  const handleImage = (url, product) => {
    setSelectedImage(url);
    if (handleClickImage) {
      handleClickImage(product);
    }
  };

  const productsJsx = productsArray.map((productObject) => (
    <div key={productObject.id}>
      <h3 className="carouselTitle">{productObject.name}</h3>
      <img
        className="carouselImage"
        onClick={() => handleImage(productObject.image, productObject)}
        src={productObject.image}
        alt={productObject.id}
      />
    </div>
  ));

  return (
    <div className="carousel">
      <AliceCarousel mouseTracking items={productsJsx} responsive={responsive} controlsStrategy="alternate" />
      {selectedProduct && (
        <div className="selectedProductDetails">
          <h4 className="productTitle">{selectedProduct.title}</h4>
          <h3 className="productDescription">{selectedProduct.description}</h3>
          <p className="price">Price: {selectedProduct.price}</p>
        </div>
      )}
    </div>
  );
};

export default Carousel;
