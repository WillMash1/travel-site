import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import HeroSection from './components/HeroSection';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
    <Router>
    <Navbar/>
    {/* <Home /> */}
      <Routes>
          <Route  path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
