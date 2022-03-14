import React, { useState, useEffect } from 'react'

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);

    function handleFetch (e) {
        e.preventDefault();
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemons(response.results))
    };

    
    return (
        <div>
            <button onClick={handleFetch}>See All the Pokemon!</button>
            {pokemons.length > 0 && pokemons.map((pokemon, i) => {
                return (
                <div key={i}>
                    <ul>
                        <li>{pokemon.name}</li>
                    </ul>
                </div>)
            })}
        </div>
    );
}

export default Pokemon