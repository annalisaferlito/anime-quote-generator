import React, { useState } from 'react';
import './Interface.css'

interface Quote {
    anime: string;
    character: string;
    quote: string;
}

const Interface: React.FC = () => {
    // Definisci uno stato per memorizzare la citazione
    const [quote, setQuote] = useState<string>('');

    // Funzione per generare la citazione
    const generator = () => {
        fetch('https://animechan.xyz/api/random')
            .then(response => response.json())
            .then((data: Quote) => {
                // Imposta la citazione nel nuovo stato
                setQuote(data.quote);
            })
            .catch(error => console.error('Errore durante il recupero della citazione:', error));
    };

    return (
        <div>
            <h1>Anime Quotes Generator</h1>
            <p>Quote: {quote}</p>
            <button className='generator' onClick={generator}>Generate</button>
        </div>
    );
};

export default Interface;
