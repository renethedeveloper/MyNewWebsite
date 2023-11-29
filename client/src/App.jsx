import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Changed "Router" to "Route"
import InputProducts from './Components/InputForm';
import Gallery from './Components/Gallery';
import NavBar from './Components/Navbar';
import CustomSourcing from './Components/CustomSourcing';
import Contact from './Components/Contact';
import Home from './Components/Home';
import EventPage from './Components/EventsPage';
import About from './Components/About';
import SearchBar from './Components/SearchBar';
import FAQ from './Components/FAQ';




function App() {
  return (
    <>
      <NavBar />
     
      
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<CustomSourcing />} />
       
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/input" element={<InputProducts />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/products/:productType/:productId" component={Gallery} />
        <Route path="/products/kitchen" element={<Gallery productType="Kitchen" />} />
        <Route path="/products/lighting" element={<Gallery productType="Lighting" />} />
        <Route path="/products/decor" element={<Gallery productType="Decor" />} />
        <Route path="/products/furniture" element={<Gallery productType="Furniture" />} />
        <Route path="/products/customSourcing" element={<CustomSourcing/>} />
      </Routes> 
    </>
  );
}

export default App;
