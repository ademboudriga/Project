import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../F.css';

function FetchData() {
    const [authData, setAuthData] = useState(null);

    useEffect(() => {
        axios.get('http://135.125.203.248:8000/authentication/usersList/')
            .then(response => {
                setAuthData(response.data);
            })
            .catch(error => {
                console.error('Error fetching Auth data:', error);
            });
    }, []);

    return (
        <div>
            <h2>Authentication</h2>
            {authData && (
                <div>
                    <p><strong>Count:</strong> {authData.count}</p>
                    <p><strong>Next:</strong> <a href='/FD2'>{authData.next}</a></p>
                    <p><strong>Previous:</strong> {authData.previous}</p>
                    <h4>Results:</h4>
                    {authData.results && authData.results.map(user => (
                        <div key={user.id}>
                            <p><strong>ID:</strong> {user.id}</p>
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>First Name:</strong> {user.first_name}</p>
                            <p><strong>Last Name:</strong> {user.last_name}</p>
                            {user.profile && (
                                <div>
                                    <p><strong>Profile Image:</strong></p>
                                    <div className='sayyebz'><img src={`http://135.125.203.248:8000/${user.profile.profile_image}`} alt="Profile" /></div>
                                    <p><strong>Phone Number:</strong> {user.profile.phone_number}</p>
                                </div>
                            )}
                            <hr />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FetchData;


   /*{Object.keys(currencies).map((key) => (
                <h2 key={key}>
                    {key}: {currencies[key]}
                </h2>
            ))}*/

// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; // Import axios only once

// function FetchData() {
//     const [quote, setQuote] = useState('');
//     const [factLength, setFactLength] = useState(0);

//     const getQuote = () => {
//         axios.get('https://catfact.ninja/fact')
//             .then(res => {
//                 console.log(res.data);
//                 const data = res.data;
//                 setQuote(data.fact);
//                 setFactLength(data.length);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }

//     return (
//         <div>
//             <button onClick={getQuote}>Get Quote</button>
//             {quote && (
//                 <div>
//                     <div>
//                         <p>Fact: {quote}</p>
//                     </div>
//                     <div>
//                         <p>Length: {factLength}</p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default FetchData;


