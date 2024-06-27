import React from 'react'
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import Home from './PAGES/HomePage/Home';
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import About from './PAGES/Extra/About';
import Contact from './PAGES/Extra/Contact';

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<div>
          <h1>404 not found</h1></div> }/>
      </Routes>
   </BrowserRouter>
  )
}

export default App;
