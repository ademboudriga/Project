import 'bootstrap/dist/css/bootstrap.min.css';
import '../style1.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (username.trim() !== '' && password.trim() !== '') {
      // Perform login action if credentials are valid
      alert('Successfully logged in!');
      // Navigate to the Home page
      // Replace '/Home' with the correct path if needed
      window.location.href = '/Home';
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
        <Link to='/Home' onClick={handleLogin}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </Link>
        <Link to="/Signup">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sign up
        </Link>
      </form>
    </div>
  );
}

export default Login;
