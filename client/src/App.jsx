
import { Routes, Route } from 'react-router-dom';
import InputProducts from './Components/InputForm';
import Gallery from './Components/Gallery';
import NavBar from './Components/Navbar';
import CustomSourcing from './Components/CustomSourcing';
import Contact from './Components/Contact';
import Home from './Components/Home';
import EventPage from './Components/EventsPage';
import About from './Components/About';
import FAQ from './Components/FAQ';
import Showroom from './Components/Showroom';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/customSourcing" element={<CustomSourcing />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/input" element={<InputProducts />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path="/showroom/decor" element={<Showroom type="decor" />} />
        <Route path="/showroom/lighting" element={<Showroom type="lighting" />} />
        <Route path="/showroom/furniture" element={<Showroom type="furniture" />} />
        <Route path="/showroom/kitchen" element={<Showroom type="kitchen" />} />
        <Route path="/" element={<Home />} />
        <Route path="/products/:productType/:productId" component={Gallery} />
        <Route path="/products/kitchen" element={<Gallery productType="Kitchen" />} />
        <Route path="/products/lighting" element={<Gallery productType="Lighting" />} />
        <Route path="/products/decor" element={<Gallery productType="Decor" />} />
        <Route path="/products/furniture" element={<Gallery productType="Furniture" />} />
        <Route path="/products/customSourcing" element={<CustomSourcing />} />
      </Routes>
    </>
  );
}

export default App;
