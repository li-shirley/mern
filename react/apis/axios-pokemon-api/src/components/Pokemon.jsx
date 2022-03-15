import axios from 'axios';
import React, { useState } from 'react'

const Pokemon = () => {
    const [pokemons, setPokemons] = useState(null);
    const [pokemon, setPokemon] = useState();
    const [pokemonName, setPokemonName] = useState("");

    const handleFetchAll = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => { setPokemons(response.data.results) })
            .catch(error => console.log(error))
    };

    const handleFetchOne = (e) => {
        e.preventDefault();
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => { 
                console.log(response.data)
                setPokemon(response.data) })
            .catch(error => console.log(error));
        setPokemonName("")
    }

    return (
        <div>
            <div>
                <form onSubmit={handleFetchOne}>
                    <label>
                        Fetch a Pokemon of your choice:
                    </label>
                    <input type="text" name="pokemonName" placeholder="Enter Pokemon name" onChange={(e) => setPokemonName(e.target.value)} value={pokemonName}>
                    </input>
                    <button>Submit</button>
                </form>
                <div>
                    {
                        pokemon &&
                        <div>
                            <p>{pokemon.name}</p>
                            <img src={pokemon.sprites.front_default}></img>
                        </div>
                    }
                </div>
            </div>
            <div>
                <button onClick={handleFetchAll} className="btn btn-secondary">See All the Pokemon!</button>
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
        </div>
    );
}

export default Pokemon