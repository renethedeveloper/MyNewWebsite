import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

export const MyContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [productsArray, setProductsArray] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/products");
        console.log(response.data, "We got the goods!");
        setProductsArray(response.data);
        localStorage.setItem("products", JSON.stringify(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error (e.g., show a message to the user)
      }
    };

    // ...

    fetchData();
  }, []);

  useEffect(() => {
    // This effect will run when productsArray changes.
    localStorage.setItem("products", JSON.stringify(productsArray));
  }, [productsArray]);

  const contextValue = {
    productsArray,
    selectedImage,
    setSelectedImage,
    setSelectedProduct,
    setMainImage,
    selectedProduct,
    mainImage,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default ContextProvider;
