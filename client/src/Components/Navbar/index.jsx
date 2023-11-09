import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";
import SearchBar from '../SearchBar';


const NavBar = () => {
  return (
    <div>
    <div className='navbar'>
     
      <Link to='/' className='link'>Home</Link>
      <Link to='/about' className='link'>About</Link>
      <div to ="/products">
      <div className='dropdown'>
        <button className='dropdown'>Products &#9660;</button>  
        <div className='dropdown-content'>
          <Link className='dropDownMenuItem' to='/products/decor'>Decor</Link>
          <Link className='dropDownMenuItem' to='/products/lighting'>Lighting</Link>
          <Link className='dropDownMenuItem' to='/products/kitchen'>Kitchen</Link>
          <Link className='dropDownMenuItem' to='/products/furniture'>Furniture</Link>
          <Link className='dropDownMenuItem' to='/products/customSourcing'>Custom Sourcing</Link>
          {/* Click here to go to gallery, we need to set some state in the context so that the gallery knows what kind of product to show.  */}
        </div>
      </div>
      </div>
      <Link to='/contact'  className ="contact link">Contact</Link>
       <Link to="/"> <img className='logo' src="/images/OldLogo.png" alt="dreampoplogo"/></Link>
      
     
      
      <Link className="faq links" to='/faq'>FAQ</Link>
      <Link to='/events' className='link'>Events</Link>
      <div>
        <input id='searchBar' placeholder='Search for Anything' className="searchBar" type="text" />
        <SearchBar/>
      </div>
     
      </div>
     
      </div>
       
  );
};

export default NavBar;
