import React from 'react';
import Signup from '../components/Singup';
import Login from '../components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Authontification() {
    return (
      <div>
        hello world
      </div>
        // <BrowserRouter>
        //   <div>
        //     <Routes>
        //        <Route index element={<Login/>}/>
        //        <Route index element={<Signup/>}/>
        //       <Route path="/" element={<Login />} />
        //       <Route path="/signup" element={<Signup />} />
        //     </Routes>
        //   </div>
        // </BrowserRouter>
      );
}
    
    