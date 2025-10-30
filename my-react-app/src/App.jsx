import { useState } from 'react'
import logo from './assets/SYNTHTECH_FULL.png'
import './App.css'
import Home from './Home'
import WhatWeDo from './WhatWeDo'
import OurStory from './OurStory'
import Contact from './Contact'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function MyLogo() {
  return <img src={logo} alt="Syntech Solutions Logo" className="logo"/>
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
        </div>
      </nav>
      <main>
      </main>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/whatWeDo" element={<WhatWeDo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
