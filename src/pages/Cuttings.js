import React from 'react';
import { Link } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer'; // Import the Navbar component
import Navbar from '../components/Navbar'; // Import the Navbar component
import '../style3.css'; // Import your CSS file
import { faStar,faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ade from '../pages/ade.jpg';
import adem2 from'./adem2.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function Cuttings() {
    return (
        <div>
             <Navbar /> {/* Display the Navbar component */}<br></br>
             <div className='ad'><h3>Cuttings</h3></div><br></br>
             <hr className="ligne1" />
      <div className='Produit'>
        <table><tbody>
         <tr>
                <td>
 
    <div className="card" style={{ width: '14.5rem', height: '15rem' }}> 
    <Link to="/PDetails">
      <div className="image-container">
        <img src={adem2} alt="Adem's image" />
        <div className="heart-icon">
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
      </Link>
      <div className="card-body">
        <h5 className="card-title">Beanie</h5>
        <table>
          <tbody>
            <tr>
              <td><div className='e1'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e2'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e3'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e4'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e5'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='T'><p >$ 19.99</p></div> </td>
            </tr>
          </tbody>
        </table>
        <a href="#" className="btn btn-primary">Add to cart</a>
      </div>
    </div>
  
</td>
<td>
 
 <div className="card" style={{ width: '14.5rem', height: '15rem' }}> 
 <Link to="/PDetails">
   <div className="image-container">
     <img src={adem2} alt="Adem's image" />
     <div className="heart-icon">
       <FontAwesomeIcon icon={faHeart} />
     </div>
   </div>
   </Link>
   <div className="card-body">
     <h5 className="card-title">Beanie</h5>
     <table>
       <tbody>
         <tr>
           <td><div className='e1'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e2'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e3'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e4'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e5'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='T'><p >$ 19.99</p></div> </td>
         </tr>
       </tbody>
     </table>
     <a href="#" className="btn btn-primary">Add to cart</a>
   </div>
 </div>

</td>                                         <td>
 
 <div className="card" style={{ width: '14.5rem', height: '15rem' }}> 
 <Link to="/PDetails">
   <div className="image-container">
     <img src={adem2} alt="Adem's image" />
     <div className="heart-icon">
       <FontAwesomeIcon icon={faHeart} />
     </div>
   </div>
   </Link>
   <div className="card-body">
     <h5 className="card-title">Beanie</h5>
     <table>
       <tbody>
         <tr>
           <td><div className='e1'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e2'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e3'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e4'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e5'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='T'><p >$ 19.99</p></div> </td>
         </tr>
       </tbody>
     </table>
     <a href="#" className="btn btn-primary">Add to cart</a>
   </div>
 </div>

</td>               <td>
 
 <div className="card" style={{ width: '14.5rem', height: '15rem' }}> 
 <Link to="/PDetails">
   <div className="image-container">
     <img src={adem2} alt="Adem's image" />
     <div className="heart-icon">
       <FontAwesomeIcon icon={faHeart} />
     </div>
   </div>
   </Link>
   <div className="card-body">
     <h5 className="card-title">Beanie</h5>
     <table>
       <tbody>
         <tr>
           <td><div className='e1'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e2'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e3'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e4'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e5'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='T'><p >$ 19.99</p></div> </td>
         </tr>
       </tbody>
     </table>
     <a href="#" className="btn btn-primary">Add to cart</a>
   </div>
 </div>

</td>               <td>
 
 <div className="card" style={{ width: '14.5rem', height: '15rem' }}> 
 <Link to="/PDetails">
   <div className="image-container">
     <img src={adem2} alt="Adem's image" />
     <div className="heart-icon">
       <FontAwesomeIcon icon={faHeart} />
     </div>
   </div>
   </Link>
   <div className="card-body">
     <h5 className="card-title">Beanie</h5>
     <table>
       <tbody>
         <tr>
           <td><div className='e1'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e2'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e3'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e4'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e5'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='T'><p >$ 19.99</p></div> </td>
         </tr>
       </tbody>
     </table>
     <a href="#" className="btn btn-primary">Add to cart</a>
   </div>
 </div>

</td>
         </tr><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
         <tr>
                <td>
 
    <div className="card" style={{ width: '14.5rem', height: '15rem' }}> 
    <Link to="/PDetails">
      <div className="image-container">
        <img src={adem2} alt="Adem's image" />
        <div className="heart-icon">
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
      </Link>
      <div className="card-body">
        <h5 className="card-title">Beanie</h5>
        <table>
          <tbody>
            <tr>
              <td><div className='e1'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e2'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e3'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e4'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e5'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='T'><p >$ 19.99</p></div> </td>
            </tr>
          </tbody>
        </table>
        <a href="#" className="btn btn-primary">Add to cart</a>
      </div>
    </div>
  
</td>
<td>
 
 <div className="card" style={{ width: '14.5rem', height: '15rem' }}> 
 <Link to="/PDetails">
   <div className="image-container">
     <img src={adem2} alt="Adem's image" />
     <div className="heart-icon">
       <FontAwesomeIcon icon={faHeart} />
     </div>
   </div>
   </Link>
   <div className="card-body">
     <h5 className="card-title">Beanie</h5>
     <table>
       <tbody>
         <tr>
           <td><div className='e1'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e2'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e3'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e4'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e5'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='T'><p >$ 19.99</p></div> </td>
         </tr>
       </tbody>
     </table>
     <a href="#" className="btn btn-primary">Add to cart</a>
   </div>
 </div>

</td>                                         <td>
 
 <div className="card" style={{ width: '14.5rem', height: '15rem' }}> 
 <Link to="/PDetails">
   <div className="image-container">
     <img src={adem2} alt="Adem's image" />
     <div className="heart-icon">
       <FontAwesomeIcon icon={faHeart} />
     </div>
   </div>
   </Link>
   <div className="card-body">
     <h5 className="card-title">Beanie</h5>
     <table>
       <tbody>
         <tr>
           <td><div className='e1'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e2'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e3'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e4'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e5'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='T'><p >$ 19.99</p></div> </td>
         </tr>
       </tbody>
     </table>
     <a href="#" className="btn btn-primary">Add to cart</a>
   </div>
 </div>

</td>               <td>
 
 <div className="card" style={{ width: '14.5rem', height: '15rem' }}> 
 <Link to="/PDetails">
   <div className="image-container">
     <img src={adem2} alt="Adem's image" />
     <div className="heart-icon">
       <FontAwesomeIcon icon={faHeart} />
     </div>
   </div>
   </Link>
   <div className="card-body">
     <h5 className="card-title">Beanie</h5>
     <table>
       <tbody>
         <tr>
           <td><div className='e1'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e2'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e3'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e4'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e5'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='T'><p >$ 19.99</p></div> </td>
         </tr>
       </tbody>
     </table>
     <a href="#" className="btn btn-primary">Add to cart</a>
   </div>
 </div>

</td>               <td>
 
 <div className="card" style={{ width: '14.5rem', height: '15rem' }}> 
 <Link to="/PDetails">
   <div className="image-container">
     <img src={adem2} alt="Adem's image" />
     <div className="heart-icon">
       <FontAwesomeIcon icon={faHeart} />
     </div>
   </div>
   </Link>
   <div className="card-body">
     <h5 className="card-title">Beanie</h5>
     <table>
       <tbody>
         <tr>
           <td><div className='e1'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e2'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e3'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e4'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='e5'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
           <td><div className='T'><p >$ 19.99</p></div> </td>
         </tr>
       </tbody>
     </table>
     <a href="#" className="btn btn-primary">Add to cart</a>
   </div>
 </div>

</td>
         </tr>
        </tbody></table>
      </div>
      </div>
    );
  }
  