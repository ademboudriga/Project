import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleFooter.css';
import { Link } from 'react-router-dom';
import adem from './adem.jpg'; // Make sure to specify the correct relative path
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <div className="rectangle">
      <table>
        <tbody>
          <tr>
            <td className='adem' rowSpan={2}><img src={adem} alt="Adem's image" /></td>
            <td>
              <div className='a1'>
                <h6 className="card-title">Adresse </h6>
                <p className="card-text"><small className="text-body-secondary">552W48th Street, New York, NY10036</small></p>
              </div>
            </td>
            <td>
              <div className='a2'>
                <h6 className="card-title">Email </h6>
                <p className="card-text"><small className="text-body-secondary">boudrigaadem889@gmail.com</small></p>
              </div>
            </td>    
          </tr>
          <tr>
            <td>
              <div className='a1'>
                <h6 className="card-title">Call Us </h6>
                <p className="card-text"><small className="text-body-secondary">+216 23695366</small></p>
              </div>
            </td>
            <td>
              <div className='a2'>
              <FontAwesomeIcon icon={faInstagram} /> <FontAwesomeIcon icon={faFacebookF} />   
              </div>
            </td>  
          </tr>
        </tbody>
      </table>
      <hr className="ligne55" />
      <div className='az'><p> Copyright 20004 wickedsowa.com | Powered by wickedsowa.com</p></div>
    </div>
  );
}
