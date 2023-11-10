import React, { useContext, useState } from 'react';
import "./index.css"

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
            <div key={index} className='result-item'>
              <img  id='thumbnails'
                src={result.image}
                alt={result.title}
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
              />
              <p>{result.title} ${result.price}</p>
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
