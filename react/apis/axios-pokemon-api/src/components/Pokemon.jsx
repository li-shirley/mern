import axios from 'axios';
import React, { useState } from 'react'

const Pokemon = () => {
    const [pokemons, setPokemons] = useState(null);
    const [pokemon, setPokemon] = useState();
    const [pokemonName, setPokemonName] = useState("");

    const handleFetchAll = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => { 
                console.log(response)
                setPokemons(response.data.results) })
            .catch(error => console.log(error))
    };

    const handleFetchOne = (e) => {
        e.preventDefault();
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
            .then(response => { 
                console.log(response.data)
                setPokemon(response.data) })
            .catch(error => console.log(error));
        setPokemonName("")
    }

    return (
        <div>
            <div className="container w-50 shadow p-3 mb-5 bg-body rounded">
                <form onSubmit={handleFetchOne}>
                    <h3>Fetch a Pokemon of your choice</h3>
                    <input className="form-control" type="text" name="pokemonName" placeholder="Enter Pokemon name" onChange={(e) => setPokemonName(e.target.value)} value={pokemonName}>
                    </input>
                    <button className="btn btn-success my-2">Submit</button>
                </form>
                <div>
                    {
                        pokemon &&
                        <div>
                            <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
                            <img src={pokemon.sprites.front_default}></img>
                        </div>
                    }
                </div>
            </div>
            <div className="container w-50 shadow p-3 mb-5 bg-body rounded">
                <h3>Get a list of all the Pokemon</h3>
                <button onClick={handleFetchAll} className="btn btn-secondary">Gotta catch 'em all!</button>
                {
                    pokemons &&
                    pokemons.map((pokemon, i) => {
                        return (
                            <div key={i}>
                                <ul>
                                    <li>
                                        <span>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} </span>
                                    </li>
                                </ul>
                            </div>)
                    })}
            </div>
        </div>
    );
}

export default Pokemon