import React, { useContext, useState, useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './index.css';
import { MyContext } from '../../Context';

const SearchBar = ({ productsArray }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { setSelectedImage, setMainImage, setSelectedProduct } = useContext(MyContext);
  const navigate=useNavigate();
 
 

  useEffect(() => {
    // Use useEffect to perform side effects, such as updating the search results
    const results = productsArray.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, productsArray]);

  const handleImage = (url, product) => {
    setSelectedImage(url);
    setMainImage(url); // Update the local main image state
    setSelectedProduct(product);
    navigate(`/products/${product.type}/${product.id || ''}`);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />

      {searchTerm && (
        <div className="results-container">
          {searchResults.map((result, index) => (
            <Link
              key={index}
              to={`/products/${result.type}/${result.id || ''}`}
              className="result-item"
              onClick={() => handleImage(result.image, result)}
            >
              <img
                id="thumbnails"
                src={result.image}
                alt={result.title}
                style={{ width: '60px', height: '60px', marginRight: '10px' }}
               
               
              />
               <p>{result.title} ${result.price}</p>
              
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
