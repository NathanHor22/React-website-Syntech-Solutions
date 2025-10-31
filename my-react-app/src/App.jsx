import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import WhatWeDo from './Whatwedo';
import OurStory from './OurStory';
import Contact from './Contact';
import Product from './Product';
import './App.css';

function MyLogo() {
  return   <img src="/SYNTHTECH_ICON.png" alt="Syntech Solutions Logo" className="logo" />
}

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <div className="nav-inner">
          <Link to="/"><MyLogo/></Link>
          <Link to="/OurStory">Our Story</Link>
          <Link to="/whatWeDo">What We Do</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/products">Products</Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/whatWeDo" element={<WhatWeDo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element ={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
