import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import adem2 from './adem2.jpg';
import '../StyleCart.css';

export default function Count() {
    const [userData, setUserData] = useState(null);
    const url = "http://135.125.203.248:8000/authentication/login/";
    useEffect(() => {
        const storedAccessToken = localStorage.getItem('accessToken');
        if (storedAccessToken) {
            console.log(storedAccessToken);
            const parsedToken = JSON.parse(storedAccessToken); // Parse the JSON string
            setUserData(parsedToken);
        }
    }, []);

    return (
        <div>
            <Navbar /> 
            <br/><br/>
            <h4>User Data:</h4>
            {userData && (
                <div>
                    <p>Phone Number: {userData.phone_number}</p>
                    <p>Profile Owner: {userData.profile_owner}</p>
                    <p>Profile Image:</p>
                    <img src={`http://135.125.203.248:8000${userData.profile_image}`} alt="Profile" />


                    <p>Profile Address: {userData.profile_address}</p>
                    <p>Username: {userData.username}</p>
                    <p>First Name: {userData.first_name}</p>
                    <p>Last Name: {userData.last_name}</p>
                    <p>Email: {userData.email}</p>
                </div>
            )}
            <br/><br/><br/><br/>
            <Footer />
        </div>
    );
}
