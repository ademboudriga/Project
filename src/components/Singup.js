import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { Button } from 'react-bootstrap';
import adem from './adem.jpg'; // Import your image file
import '../styleLS.css';

const Signup = () => {
  const url = "http://135.125.203.248:8000/authentication/register/"; // URL for signup endpoint
  const [data, setData] = useState({
    firstname:"",
    lastname:"",
    email: "",
    username: "",
    password: ""
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  function submit(e) {
    e.preventDefault();
    axios.post(url, {
      first_name:data.firstname,
      last_name:data.lastname,
      email: data.email,
      username: data.username,
      password: data.password
    })
    .then(res => {
      console.log(res.data);
      alert('Inscription réussie !'); // Successful signup message
      // Redirect to Home page or perform any other action upon successful signup
      window.location.href = '/Home';
    })
    .catch(error => {
      console.error('Error during signup:', error);
      // Handle signup error here, such as displaying an error message to the user
      alert('Erreur lors de l\'inscription. Veuillez réessayer.');
    });
  }

  return (
    <div>
      <Navbar />
      <hr className="ligne" /> {/* Add a line */}
      <table>
        <tbody>
          <tr>
            <td>
              <div className='welcome'>
                <h3>Welcome to the Cannabis <br/>Community!</h3>
              </div>
            </td>
            <td>
              <div className='ca2'>
                <div className="login-box">
                  <h2>Sign up</h2>
                  <form onSubmit={submit}>
                  <div className="user-box">
                      <input
                        type="text"
                        id='firstname'
                        name='firstname'
                        required
                        value={data.firstname}
                        onChange={(e) => handle(e)}
                      />
                      <label htmlFor="firstname">First Name</label>
                    </div>
                    <div className="user-box">
                      <input
                        type="text"
                        id='lastname'
                        name='lastname'
                        required
                        value={data.lastname}
                        onChange={(e) => handle(e)}
                      />
                      <label htmlFor="lastname">Last Name</label>
                    </div>
                    <div className="user-box">
                      <input
                        type="email"
                        id='email'
                        name='email'
                        required
                        value={data.email}
                        onChange={(e) => handle(e)}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="user-box">
                      <input
                        type="text"
                        id='username'
                        name='username'
                        required
                        value={data.username}
                        onChange={(e) => handle(e)}
                      />
                      <label htmlFor="username">Nom d'utilisateur</label>
                    </div>
                    <div className="user-box">
                      <input
                        type="password"
                        id='password'
                        name='password'
                        required
                        value={data.password}
                        onChange={(e) => handle(e)}
                      />
                      <label htmlFor="password">Mot de passe</label>
                    </div>
                    <div className='Lo'>
                      <div className='Lo'><Button  type="submit"onSubmit={submit}>Login</Button></div>
                    </div>
                  </form>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className='logim'>
                <img src={adem} alt="Adem's image" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className='world'>
        <table>
          <tbody>
            <tr>
              <td>
                <img src="https://th.bing.com/th/id/OIP.Ayze13hPAPpPV40No4evMgAAAA?w=184&h=122&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Logo" style={{ display: 'inline-block' }} />
              </td>
              <td>
                <h1>World Class Genetics Delivered</h1>
              </td>
              <td>
                <h5>Export Collection </h5>
              </td>
            </tr>
          </tbody>
        </table>
        <br/><br/>
      </div>
    </div>
  );
}

export default Signup;
