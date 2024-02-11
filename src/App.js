// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Contact from './pages/Contact'
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
import Count from './pages/Count';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         {/* <Route index element={<FetchData />} />  */}
           <Route index element={<Authentification />}/>
         <Route path='/Login2' element={<Login2 />} /> 
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contact" element={<Contact />} />
           <Route path="/Home" element={<Home />} /> 
         <Route path="/PDetails" element={<ProductDetails />} /> 
           <Route path="/SeedStock" element={<SeedStock />} /> 
          <Route path="/Cuttings" element={<Cuttings />} />
          <Route path="/Merch" element={<Merch />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Count" element={<Count />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
