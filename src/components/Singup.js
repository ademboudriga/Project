import 'bootstrap/dist/css/bootstrap.min.css';
import '../style1.css'; 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Signup = () => {
    const [userDetails, setUserDetails] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  
    const handleSignup = () => {
      const { username, email, password, confirmPassword } = userDetails;
  
      if (
        username.trim() !== '' &&
        password.trim() !== '' &&
        email.trim() !== '' &&
        password === confirmPassword
      ) {
        alert('Successfully signed up!');
      } else {
        alert('Please fill in all fields and ensure passwords match.');
      }
    };
  
    const handleChange = (e) => {
      setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };
  
    return (
      <div className="login-box">
        <h2>Signup</h2>
        <form>
          <div className="user-box">
            <input
              type="email"
              name="email"
              required
              value={userDetails.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="username"
              required
              value={userDetails.username}
              onChange={handleChange}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              required
              value={userDetails.password}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="confirmPassword"
              required
              value={userDetails.confirmPassword}
              onChange={handleChange}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>
          <a href="#" onClick={handleSignup}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Signup
          </a>
        </form>
      </div>
    );
  };
  
  export default Signup;