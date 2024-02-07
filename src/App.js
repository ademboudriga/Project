import logo from './logo.svg';
import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Authontification from './pages/Authontification';
import Login from './components/Login';
import Signup from './components/Singup';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<div>"home" <Outlet/></div>} >
            <Route path='/login' element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}