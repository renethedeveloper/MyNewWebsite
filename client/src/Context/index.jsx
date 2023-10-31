import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
export const MyContext = React.createContext();



const ContextProvider = ({ children }) => {
  const [productsArray, setProductsArray] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "/server/products",
      };

      try {
        const response = await axios.request(options);
       
        console.log(response.data +"We got the goods!");
        setProductsArray(response.data);
        localStorage.setItem("products", JSON.stringify(response.data));

       

        // Set default images for each product type
        const defaultImages = {};
        const uniqueTypes = [
          ...new Set(response.data.map((product) => product.type)),
        ];
        uniqueTypes.forEach((type) => {
          const typeProducts = response.data.filter(
            (product) => product.type === type
          );
          if (typeProducts.length > 0) {
            defaultImages[type] = typeProducts[0].image;
          } else {
            defaultImages[type] = "";
          }
        });

        

        setSelectedImage(defaultImages);
      } catch (error) {
        console.error(error);
        console.log("There was an error selecting the image.")
      }
    };

    let productsData = localStorage.getItem("products");
    productsData = JSON.parse(productsData);
    if (productsData) {
      setProductsArray([...productsData]);
    } else {
      fetchData();
    }
  }, []);

  // In the value object, you can provide the state and any functions you want to share.
  const contextValue = {
    productsArray,
    selectedImage,
    setSelectedImage, // If you want to share a function
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default ContextProvider;


