import React, { useEffect, useState } from "react";
import axios from "axios";

export const MyContext = React.createContext();

const ContextProvider = ( {children} ) => {
  const [productsArray, setProductsArray] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [eventData, setEventData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://backenddreampop.onrender.com/products");
        setProductsArray(response.data);
        console.log(response.data, "hello!")
        setEventData(response.data); // Add setEventData to the dependency array
       
        localStorage.setItem("products", JSON.stringify(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);





  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://backenddreampop.onrender.com/events");
        console.log(response.data, "Event data fetched!");
        setEventData(response.data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    // This effect will run when productsArray changes.
    localStorage.setItem("products", JSON.stringify(productsArray));
  }, [productsArray]);

  const contextValue = {
    productsArray,
    selectedImage,
    eventData,
    setEventData,
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
