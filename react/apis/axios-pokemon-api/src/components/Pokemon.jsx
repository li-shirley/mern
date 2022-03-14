import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Pokemon = () => {
    const [pokemons, setPokemons] = useState(null);

    const handleFetch = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response=>{setPokemons(response.data.results)})
    };

    return (
        <div>
            <button onClick={handleFetch} className="btn btn-secondary">See All the Pokemon!</button>
            {
                pokemons &&
                pokemons.map((pokemon, i) => {
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