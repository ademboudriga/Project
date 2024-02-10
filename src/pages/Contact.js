import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import adem2 from './adem2.jpg';
import '../StyleContact.css';

export default function Contact() {
    return (
        <div>
            <Navbar />
            <br />
            <hr className="ligne1" />
            <div className="reccont">
                <h3><strong>Contact us ?</strong></h3>
            <div className='contactus'><br></br>
              <table>
                <tbody>
                  <tr>
                    <div className='a1'>
                    <td>
                      <input type='text'placeholder='Name'/>
                    </td>
                    <td><div className='a2'>
                      <input type='email'placeholder='Email'/></div>
                    </td></div><br></br>
                  </tr>
                  <tr><div className='a3'>
                    <input type='text' placeholder='message'/>
                  </div>
                    
                  </tr><br></br>
                  <div className='a4'>
                    <button>Submit</button>
                  </div>
                </tbody>
              </table>
              <br></br><br></br>
            </div>
            </div><br/><br/><br/>
            <Footer />
        </div>
    );
}
