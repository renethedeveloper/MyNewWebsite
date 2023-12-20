import { Routes, Route } from "react-router-dom";
import InputProducts from "./Components/InputForm";
import ProductCard from "./Components/ProductCard";
import NavBar from "./Components/Navbar";
import CustomSourcing from "./Components/CustomSourcing";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import EventPage from "./Components/EventsPage";
import About from "./Components/About";
import FAQ from "./Components/FAQ";
import Galleries from "./Components/Galleries";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/galleries/:type" element={<Galleries/>} />
        <Route path="/product/:id" element={<ProductCard/>} />
        
        <Route path="/customSourcing" element={<CustomSourcing />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/input" element={<InputProducts />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/galleries" element={<Galleries />} />
        <Route path="/Galleries/decor" element={<Galleries type="decor" />} />
        <Route
          path="/Galleries/lighting"
          element={<Galleries type="lighting" />}
        />
        <Route
          path="/Galleries/furniture"
          element={<Galleries type="furniture" />}
        />
        <Route
          path="/Galleries/kitchen"
          element={<Galleries type="kitchen" />}
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/products/:productType/:productId"
          component={ProductCard}
        />
        <Route
          path="/products/kitchen"
          element={<ProductCard productType="Kitchen" />}
        />
        <Route
          path="/products/lighting"
          element={<ProductCard productType="Lighting" />}
        />
        <Route
          path="/products/decor"
          element={<ProductCard productType="Decor" />}
        />
        <Route
          path="/products/furniture"
          element={<ProductCard productType="Furniture" />}
        />
        <Route path="/products/customSourcing" element={<CustomSourcing />} />
      </Routes>
    </>
  );
}

export default App;
