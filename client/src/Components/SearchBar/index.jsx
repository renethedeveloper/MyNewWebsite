import React, { useContext, useState } from 'react';
import "./index.css"
import { Link } from 'react-router-dom';

const SearchBar = ({ productsArray }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

    if (productsArray) {
      const results = productsArray.filter((item) =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setSearchResults(results);
    }
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
        <div className='results-container'>
          {searchResults.map((result, index) => (
            <Link key={index} to={`/products/${result.type}`} className='result-item'>
              <img
                id='thumbnails'
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
