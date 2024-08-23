// src/App.jsx
import {  Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";  // Importing the Product component
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { useState } from 'react';

const App = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="px-4 sm:px-[5vwh] md:px-[7vwh] lg:px-[9vwh]">
      <Navbar setShowSearch={setShowSearch} />
      <SearchBar showSearch={showSearch} setShowSearch={setShowSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} /> {/* Product Route */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeorder" element={<PlaceOrder />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;

