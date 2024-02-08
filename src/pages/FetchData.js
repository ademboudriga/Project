import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios only once
import { continents, currencies } from './Data'; // Assuming these are imported correctly

function FetchData() {
    const [bitcoinData, setBitcoinData] = useState(null); // Define bitcoinData state

    useEffect(() => {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => {
                setBitcoinData(response.data);
            })
            .catch(error => {
                console.error('Error fetching Bitcoin data:', error);
            });
    }, []);

    return (
        <div>
            <h2>Bitcoin Price</h2>
            {bitcoinData && (
                <div>
                    <h4>Time:</h4>
                    {Object.keys(bitcoinData.time).map(key => (
                        <h4 key={key}>
                            {key}: {bitcoinData.time[key]}
                        </h4>
                    ))}
                </div>
            )}
            <p><h4>disclaimer</h4>: {bitcoinData.disclaimer}</p>
                    <p><h4>chartName:</h4> {bitcoinData.chartName}</p>
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


