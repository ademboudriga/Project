// Authentication.js
import React from 'react';
import Login2 from '../components/Login2';
import Signup from '../components/Singup';

import { Routes, Route } from 'react-router-dom';

export default function Authentication() {
  return (
    <div>
      <Routes>
        <Route index element={<Login2 />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
