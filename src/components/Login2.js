import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios'; // Import axios for making HTTP requests

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import adem from './adem.jpg'; // Import adem image
import '../styleLS.css'; // Import custom CSS
import { Button } from 'react-bootstrap';

function Login2() {
    const url = "http://135.125.203.248:8000/authentication/login/"; // URL for login endpoint
    const [data, setData] = useState({
        username: "",
        password: ""
    });

    // Function to handle changes in input fields
    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }

    function submite(e) {
        e.preventDefault();
        axios.post(url, { 
                username: data.username,
                password: data.password
            })
            .then(res => {
                console.log(res.data); 
                 window.location.href = '/Home';
            })
            .catch(error => {
                console.error('Error during login:', error);
                console.log('here is the error',error);
                alert('there is an error in the credentials');
                // div_error = 'fix the data'
                // Handle login error here, such as displaying an error message to the user
            });
    }
    const handlSignup = (e) => {
      e.preventDefault();
      
   
          window.location.href = '/Signup';
         
  
  };
    // Function to handle login button click
    const handleLogin = (e) => {
        e.preventDefault();
        if (data.username.trim() !== '' && data.password.trim() !== '') {
            alert('Successfully logged in!'); // Display alert for successful login
            window.location.href = '/Home';
            // Redirect to '/Home' or perform other actions upon successful login
        } else {
            alert('Username and password are required.'); // Display alert if username or password is empty
        }
    };

    return (
        <div>
            <Navbar /> {/* Render Navbar component */}
            <hr className="ligne" /> {/* Render horizontal line */}
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div className='welcome'><h3>Welcome to the Cannabis <br/>Community!</h3></div>
                        </td>
                        <td><div className='ca'>
                            <div className="login-box">
                                <h2>Login</h2>
                                <form >
                                    <div className="user-box">
                                        <input
                                            type="text"
                                            id='username'
                                            name='username'
                                            required
                                            value={data.username}
                                            onChange={(e) => handle(e)}
                                        />
                                        <label htmlFor="username">Username</label>
                                    </div>
                                    <div className="user-box">
                                        <input
                                            type="password"
                                            id='password'
                                            required
                                            value={data.password}
                                            onChange={(e) => handle(e)}
                                        />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <table><tbody><tr>
                                    <td><div className='Lo'><Button  type="submit"onSubmit={submite}>Login</Button></div></td>
                                    <td><div className='Lo'><Button  type="submit"onClick={ handlSignup}>Sign up</Button></div></td> </tr></tbody></table>
                                </form>
                            </div>
                        </div></td>
                    </tr>
                    <tr>
                        <td>
                            <div className='logim'><img src={adem} alt="Adem's image" /></div>
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

export default Login2;
