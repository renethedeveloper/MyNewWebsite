import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./index.css";
import SearchBar from '../SearchBar';
import { MyContext } from '../../Context';

const NavBar = () => {
  const { productsArray } = useContext(MyContext);

  return (
    <div className='navbar'>
      <Link to='/' className='link'>Home</Link>
      <Link to='/about' className='link'>About</Link>
      <div className='dropdown'>
        <button className='dropdown'>Products &#9660;</button>  
        <div className='dropdown-content'>
          <Link className='dropDownMenuItem' to='/products/decor'>Decor</Link>
          <Link className='dropDownMenuItem' to='/products/lighting'>Lighting</Link>
          <Link className='dropDownMenuItem' to='/products/kitchen'>Kitchen</Link>
          <Link className='dropDownMenuItem' to='/products/furniture'>Furniture</Link>
        
        </div>
      </div>
      <Link to='/contact' className="contact link">Contact</Link>
      <Link to="/">
        <img className='logo' src="Images/OldLogo.png" alt="dreampoplogo" />
      </Link>
      <div className='search-bar-container'>

        <SearchBar className="searchBar" productsArray={productsArray} />
        
      </div>
      <Link className="faq links" to='/faq'>FAQ</Link>
      <Link to='/events' className='link'>Events</Link>
      
    </div>
  );
};

export default NavBar;
