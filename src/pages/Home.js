import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer'; // Import the Navbar component
import Navbar from '../components/Navbar'; // Import the Navbar component
import '../style3.css'; // Import your CSS file
import { faStar,faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ade from './ade.jpg';
import adem2 from'./adem2.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function Home() {
    return (
        <div>
            <Navbar /> {/* Display the Navbar component */}
            <hr className="ligne" /> {/* Add a line */}
            <div className='bynow'>
                <h1>Get Up to 50% Discount on <br/>
                    Select Products
                </h1>
                <br/><br/>
                <button>Buy Now</button>
            </div><br></br>
            <div className="Categories">
                <div className="a"><h2>Categories</h2></div><br/>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div className="Seed">
                                    <h2 className="cut"><span>Seed Stock</span></h2>
                                </div>
                            </td>
                            <td>
                                <div className="Cuttings">
                                    <h2 className="cut"><span>Cuttings</span></h2>
                                </div>
                            </td>
                            <td>
                                <div className="Merch">
                                    <h2 className="cut"><span>Merch</span></h2>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

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
            <table><tbody><tr>
            <td><div className='ad'><h3>Products For you!</h3></div></td>
            <td><a className='lien1'><h5>see more →</h5></a></td><br></br>
            </tr></tbody></table><hr className="ligne1" /> {/* Add a line */}
            <div className='Produit'>
              <table><tbody>
                <tr>
                <td>
 
    <div className="card" style={{ width: '14.5rem', height: '15rem' }}> 
    <Link to="/PDetails">
      <div className="image-container">
        <img src={ade} alt="Adem's image" />
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
                <br/><br/><br/><br/><br/><br/><br/><br></br>
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
                <br/><br/><br/><br/><br/><br/><br></br><br></br>
                
                </tbody></table>
            </div>
            <table><tbody><tr>
            <td><div className='ad'><h3>Seed Stock</h3></div></td>
            <td><a className='lien2'><h5>see more →</h5></a></td>
            </tr></tbody></table>
            <hr className="ligne1" /> {/* Add a line */}
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
                </tr>
                <br/><br/><br/><br/><br/><br/><br/><br></br>
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
                <br/><br/><br/><br/><br/><br/><br></br><br></br>
                
                </tbody></table>
            </div>
            <table><tbody><tr>
            <td><div className='ad'><h3>Cuttings</h3></div></td>
            <td><a className='lien3'><h5>see more →</h5></a></td>
            </tr></tbody></table>
            <hr className="ligne1" /> {/* Add a line */}
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
                </tr>
                <br/><br/><br/><br/><br/><br/><br/><br></br>
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
                <br/><br/><br/><br/><br/><br/><br></br><br></br>
                
                </tbody></table>
            </div>
            <table><tbody><tr>
            <td><div className='ad'><h3>Merch</h3></div></td>
            <td><a className='lien4'><h5>see more →</h5></a></td>
            </tr></tbody></table>
            <hr className="ligne1" /> {/* Add a line */}
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
                </tr>
                <br/><br/><br/><br/><br/><br/><br/><br></br>
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
                <br/><br/><br/><br/><br/><br/><br></br>
                
                </tbody></table>
            </div>
            <br/><br/>
            <div className='ad'><h3>Contact us </h3></div>
            <hr className="ligne" /> {/* Add a line */}
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
            <Footer /> {/* Display the Navbar component */}
            <br></br>
            <br></br>
        </div>
    );
}
