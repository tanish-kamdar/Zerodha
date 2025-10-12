// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Navbar from './landing-page/Navbar';
import HomePage from './landing-page/home/HomePage';
import SignUpPage from './landing-page/signup/SignUpPage';
import AboutPage from './landing-page/about/AboutPage';
import ProductPage from './landing-page/products/ProductPage';
import PricingPage from './landing-page/pricing/PricingPage';
import SupportPage from './landing-page/support/SupportPage';
import PageNotFound from './landing-page/PageNotFound';
import Footer from './landing-page/Footer';
createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

  </>
);
