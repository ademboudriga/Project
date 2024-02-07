import React, { useState } from 'react'; // Import useState from React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import adem2 from './adem2.jpg';
import '../StyleCart.css'; // Import your CSS file

export default function Cart() {
    const [quantities, setQuantities] = useState({
        product1: 1,
        product2: 1,
        product3: 1
    });
    const pricePerUnit = 19; // Prix par unité

    const increaseQuantity = (product) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [product]: prevQuantities[product] + 1
        }));
    };

    const decreaseQuantity = (product) => {
        if (quantities[product] > 1) {
            setQuantities((prevQuantities) => ({
                ...prevQuantities,
                [product]: prevQuantities[product] - 1
            }));
        }
    };

    const calculateTotal = (product) => {
        return pricePerUnit * quantities[product];
    };
    const totalAllProducts = () => {
        // Calculer la somme des prix totaux de chaque produit
        const totalProduct1 = calculateTotal('product1');
        const totalProduct2 = calculateTotal('product2');
        const totalProduct3 = calculateTotal('product3');
        return totalProduct1 + totalProduct2 + totalProduct3;
    };

    const removeProduct = (product) => {
        // Supprimer le produit en réinitialisant la quantité à 0
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [product]: 0
        }));
    };
    return (
        <div>
            <Navbar /> {/* Display the Navbar component */}
            <br />
            <hr className="ligne1" />
            <br />
            <br />
            <div className='cart'>
                <FontAwesomeIcon icon={faCartShopping} style={{ color: "green" }} /> Cart (3)<br /><br />
                <table>
                    <tbody>
                        <tr>
                            <td><img src={adem2} alt="Adem's image" /></td>
                            <td>
                                <div className='A'>
                                    <h4>Beanie</h4>
                                    <h6>In Stock</h6>
                                </div>
                            </td>
                            <td>
                                <div className="rectangle2">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><button onClick={() => decreaseQuantity('product1')}>-</button></td>
                                                <td><h5>{quantities['product1']}</h5></td>
                                                <td><button onClick={() => increaseQuantity('product1')}>+</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                            <td>
                                <div className='tot'><h6>Total : {calculateTotal('product1')} $</h6></div>
                            </td>
                            <td><div className='Bout'><button onClick={() => removeProduct('product1')}><h6>Remove</h6></button></div></td>
                            <td>
                                <div className='carro2'><br />
                                    <h6>Cart Summary</h6>
                                    <p>Free Shipping</p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><p className='p2'>Subtotal</p></td>
                                                <td><p className='p3'>{totalAllProducts()} $ </p></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button className='Pay'>Payment</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br /><hr className="ligne12" />
            </div>
            <div className='cart'>
                <table>
                    <tbody>
                        <tr>
                            <td><img src={adem2} alt="Adem's image" /></td>
                            <td>
                                <div className='A'>
                                    <h4>Beanie</h4>
                                    <h6>In Stock</h6>
                                </div>
                            </td>
                            <td>
                                <div className="rectangle2">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><button onClick={() => decreaseQuantity('product2')}>-</button></td>
                                                <td><h5>{quantities['product2']}</h5></td>
                                                <td><button onClick={() => increaseQuantity('product2')}>+</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                            <td>
                                <div className='tot'><h6>Total : {calculateTotal('product2')} $</h6></div>
                            </td>
                            <td><div className='Bout'><button><h6>Remove</h6></button></div></td>
                        </tr>
                    </tbody>
                </table>
                <br /><hr className="ligne12" />
            </div>
            <div className='cart'>
                <table>
                    <tbody>
                        <tr>
                            <td><img src={adem2} alt="Adem's image" /></td>
                            <td>
                                <div className='A'>
                                    <h4>Beanie</h4>
                                    <h6>In Stock</h6>
                                </div>
                            </td>
                            <td>
                                <div className="rectangle2">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><button onClick={() => decreaseQuantity('product3')}>-</button></td>
                                                <td><h5>{quantities['product3']}</h5></td>
                                                <td><button onClick={() => increaseQuantity('product3')}>+</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                            <td>
                                <div className='tot'><h6>Total : {calculateTotal('product3')} $</h6></div>
                            </td>
                            <td><div className='Bout'><button><h6>Remove</h6></button></div></td>
                        </tr>
                    </tbody>
                </table>
                <br /><hr className="ligne12" />
            </div>
            <br /><br /><br />
            <Footer />
        </div>
    );
}
