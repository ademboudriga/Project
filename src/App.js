// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Signup from './components/Singup'; 
import SeedStock from './pages/SeedStock';
import { ReactDOM } from 'react';
import Merch from './pages/Merch';
import Cuttings from  './pages/Cuttings';
import Home from './pages/Home';
import ProductDetails from './components/ProductDetails';
import Authentification from './pages/Authentification'; // Corrected import path
import Cart from './pages/Cart'
import Login2 from './components/Login2';
import FetchData from './pages/FetchData';
import FD2 from './pages/FD2';
import FD3 from './pages/FD3';
import FD4 from './pages/FD4';
import FD5 from './pages/FD5';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Paths should match the component names and case sensitivity matters */}
          <Route index element={<FetchData />} /> 
          <Route path="/FD2" element={<FD2 />} /> 
          <Route path="/FD3" element={<FD3 />} /> 
          <Route path="/FD4" element={<FD4 />} /> 
          <Route path="/FD5" element={<FD5 />} /> 
           {/* <Route index element={<Authentification />}/> */}
         {/* <Route path='/Login2' element={<Login2 />} />  */}
          {/* <Route path="/Signup" element={<Signup />} /> */}
           {/* <Route path="/Home" element={<Home />} />  */}
         {/* <Route path="/PDetails" element={<ProductDetails />} />  */}
           {/* <Route path="/SeedStock" element={<SeedStock />} />  */}
          {/* <Route path="/Cuttings" element={<Cuttings />} /> */}
          {/* <Route path="/Merch" element={<Merch />} /> */}
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
