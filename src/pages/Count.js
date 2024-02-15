import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../StyleCart.css';

export default function Count() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedAccessToken = localStorage.getItem('accessToken');
        if (storedAccessToken) {
            try {
                const parsedToken = JSON.parse(storedAccessToken);
                setUserData(parsedToken);
            } catch (error) {
                console.error('Error parsing access token:', error);
                // Handle the error here, such as showing a message to the user
            }
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
                    {/* Check if profile_image exists before rendering */}
                    {userData.profile_image && (
                        <img src={`http://135.125.203.248:8000/${userData.profile_image}`} alt="Profile" />

                    )}
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
