import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'; // Imported faHeart as well
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import adem2 from './adem2.jpg';
import '../PD.css'; 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../style3.css';
export default function ProductDetails() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const [checkedCircle, setCheckedCircle] = useState('');
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    const toggleCheck = (circleId) => {
      setCheckedCircle(circleId === checkedCircle ? '' : circleId);
    };
  

    return (
        <div>
            <Navbar /> 
            <hr className="ligne" /><br/>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td rowSpan={4} className='image'><img src={adem2} alt="Adem's image" /></td>
                            <div className='marg'>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='B'>
                                                    <h1>Beanie</h1>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='a'>
                                                    <h6>$19.99</h6>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <td><div className='e1'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
                                <td><div className='e2'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
                                <td><div className='e3'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
                                <td><div className='e4'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
                                <td><div className='e5'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
                                <hr className="ligne2" />
                                <p>creative united peaple as a community </p>
                                <p className='p2'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,</p>
                                <p className='p2'>consecteteur,adipisci velit</p>
                                <hr className="ligne2" />
                                <h6>Pick a color</h6>
                                <table>
                                    <tbody>
                                        <tr>
                                        <td>
              <div className={`circle1 ${checkedCircle === 'circle1' ? 'checked' : ''}`} onClick={() => toggleCheck('circle1')}>
                {checkedCircle === 'circle1' && <span className="checkmark">✔</span>}
              </div>
            </td>
            <td>
              <div className={`circle2 ${checkedCircle === 'circle2' ? 'checked' : ''}`} onClick={() => toggleCheck('circle2')}>
                {checkedCircle === 'circle2' && <span className="checkmark">✔</span>}
              </div>
            </td>
            <td>
              <div className={`circle3 ${checkedCircle === 'circle3' ? 'checked' : ''}`} onClick={() => toggleCheck('circle3')}>
                {checkedCircle === 'circle3' && <span className="checkmark">✔</span>}
              </div>
            </td>
            <td>
              <div className={`circle4 ${checkedCircle === 'circle4' ? 'checked' : ''}`} onClick={() => toggleCheck('circle4')}>
                {checkedCircle === 'circle4' && <span className="checkmark">✔</span>}
              </div>
            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br/>
                                <td>
                                  <table><tbody><tr><td>
                                    <div className="rectangle">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><button onClick={decreaseQuantity}>-</button></td>
                                                    <td><h5>{quantity}</h5></td>
                                                    <td><button onClick={increaseQuantity}>+</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div></td>
                                    <td><div className='st'><h6>In Stock!</h6></div></td>
                                    <td><div className='st2'><h6>Out of Stock</h6></div></td>
                                    
                                    </tr></tbody></table>
                                </td><br></br>
                                <table>
                                  <tbody>
                                    <tr>
                                      <td><div className='Bou1'><button><small><h7>Add to cart </h7></small></button></div></td>
                                      <td><div className='Bou2'><button><small><h7>Add to cart </h7></small></button></div></td>
                                    </tr>
                                  </tbody>
                                </table>
                            </div>
                        </tr>
                    </tbody>
                </table>
                
                <table>
                    <tbody>
                        <tr>
                            <td><div className='im1'><img src={adem2} alt="Adem's image" /></div></td>
                            <div className='im2'><td><img src={adem2} alt="Adem's image" /></td>
                            <td><img src={adem2} alt="Adem's image" /></td>
                            <td><img src={adem2} alt="Adem's image" /></td></div>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <div className='ad'><h3>Products For you!</h3></div>
                <hr className="ligne" />
                <Carousel responsive={responsive}>
                  <div className='Produit2'>
                  
 
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


    </div>
    <div className='Produit3'>
                  
 
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
                 
                 
                     </div>
                     <div className='Produit3'>
                  
 
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
                 
                 
                     </div>
                     <div className='Produit3'>
                  
 
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
                 
                 
                     </div>
                <div>Item 4</div>
                </Carousel>;
            </div>
            <br></br><br></br><br></br>
            <table><tbody><tr>
            <td><div className='ad'><h3>Seed Stock</h3></div></td>
            <td><div className='e11'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e2'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e3'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e4'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e5'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td>(20)</td>
            </tr></tbody></table>
            <hr className="ligne" /><br/>
            <table>
              <tbody>
                <tr>
                  <td><div class="circl"></div></td>
                  <td><div className='nom'><h6>Jessica Brawn</h6>
                  <div className='comm'>Great Product! </div>
                  </div></td>
                </tr><br></br>
                <tr>
                <td><div class="carre"></div></td>
                </tr><br></br>
                <tr>
                  <td><div className='sm'><small className="text-body-secondary"> Posted 1 minute ago</small></div></td>
                  <td><div className='e10'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e2'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e3'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e4'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e5'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
                </tr>
              </tbody>
            </table>
            <hr className="ligne5" /><br/>
            <table>
              <tbody>
                <tr>
                  <td><div class="circl"></div></td>
                  <td><div className='nom'><h6>Jessica Brawn</h6>
                  <div className='comm'>Great Product! </div>
                  </div></td>
                </tr><br></br>
                <tr>
                <td><div class="carre"></div></td>
                </tr><br></br>
                <tr>
                  <td><div className='sm'><small className="text-body-secondary"> Posted 1 minute ago</small></div></td>
                  <td><div className='e10'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e2'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e3'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e4'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
              <td><div className='e5'><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></div></td>
                </tr>
              </tbody>
            </table>
            <hr className="ligne5" /><br/>
            <br></br><br></br>
            <Footer /> 
        </div>
    );
}
