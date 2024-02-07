import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios only once

function FetchData() {
    const [quote, setQuote] = useState('');
    const [factLength, setFactLength] = useState(0);

    useEffect(() => {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => {
                console.log(res.data);
                const data = res.data;
                setQuote(data.fact);
                setFactLength(data.length);
            })
            .catch(err => {
                console.log(err);
            });
    }, []); // Empty dependency array to run only once when component mounts

    return (
        <div>
            {quote && (
                <div>
                    <div>
                        <p>Fact: {quote}</p>
                    </div>
                    <div>
                        <p>Length: {factLength}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FetchData;


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


