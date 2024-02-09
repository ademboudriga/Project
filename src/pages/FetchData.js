import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { continents, currencies } from './Data';
import '../F.css';
function FetchData() {
    // State pour stocker les données d'authentification récupérées
    const [authData, setAuthData] = useState(null);

    // Effet pour récupérer les données d'authentification lors du montage du composant
    useEffect(() => {
        // Requête GET pour récupérer les données d'authentification
        axios.get('http://135.125.203.248:8000/authentication/usersList/')
            .then(response => {
                // Met à jour le state avec les données récupérées
                setAuthData(response.data);
            })
            .catch(error => {
                // Gestion des erreurs de requête
                console.error('Error fetching Auth data:', error);
            });
    }, []);

    return (
        <div>
            <h2>Authentication</h2>
            {/* Vérifie si les données d'authentification existent */}
            {authData && (
                <div>
                    <p><strong>Count:</strong> {authData.count}</p>
                    <p><strong>Next:</strong> {authData.next}</p>
                    <p><strong>Previous:</strong> {authData.previous}</p>
                    <h4>Results:</h4>
                    {/* Vérifie si des résultats d'utilisateurs existent */}
                    {authData.results && authData.results.map(user => (
                        <div key={user.id}>
                            <p><strong>ID:</strong> {user.id}</p>
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>First Name:</strong> {user.first_name}</p>
                            <p><strong>Last Name:</strong> {user.last_name}</p>
                           
                            {/* Vérifie si des données de profil utilisateur existent */}
                            {user.profile && (
                                <div>
                                    <p><strong>Profile Image:</strong></p>
                                    {/* Affiche l'image du profil */}
                                    <div className='sayyebz'><img src={`http://135.125.203.248:8000/${user.profile.profile_image}`} alt="Image" /></div>

                                    
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


