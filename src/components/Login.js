import 'bootstrap/dist/css/bootstrap.min.css';
import '../style1.css'; 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      alert('Successfully logged in!');
    } else {
      alert('Username and password are required.');
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
        </div>
        <a href="#" onClick={handleLogin}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login 
        </a>
        <Link to="/signup">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Signup
        </Link>
      </form>
    </div>
  );
}

export default Login;
