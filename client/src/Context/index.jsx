import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

const MyContext = createContext();

const ContextProvider = () => {
  const [productsArray, setProductsArray] = useState([]);
  const [selectedImage, setSelectedImage] = useState();
 



  useEffect(() => {

    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: '/server',
        params: {
          store: 'US',
          offset: '0',
          categoryId: '4209',
          limit: '48',
          country: 'US',
          sort: 'freshness',
          currency: 'USD',
          sizeSchema: 'US',
          lang: 'en-US'
        },
        headers: {
          'X-RapidAPI-Key': 'e3d6fa1ebcmshf7f980145487d74p1b202fjsn0eaea5ff1077',
          'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setProductsArray(response.data.products);
        localStorage.setItem("products",JSON.stringify(response.data.products))

      } catch (error) {
        console.error(error);
      }
    };

    let productsData = localStorage.getItem("products")
    productsData = JSON.parse(productsData)
    if(productsData){
      setProductsArray([...productsData]) 
    } else {
      fetchData();
    }

    

    
  }, []); 
 
  

  return (
    <MyContext.Provider
      value={{
        
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
