import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import obiWanMeme from "../obi-wan-meme.jpeg"

const Planets = (props) => {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/`)
            .then(response => {
                console.log(response.data)
                setPlanet(response.data)
            })
        // removing this line to so that the "These aren't the droids you're looking for" would display
        // .catch(error => console.log(error))
    }, [id])

    return (
        <div className="d-flex justify-content-center pb-5">
            {
                planet ?
                    <div>
                        <h4>{planet.name}</h4>
                        <p>Climate: {planet.climate}</p>
                        <p>Terrain: {planet.terrain}</p>
                        <p>Surface Water: {planet.surface_water}</p>
                        <p>Population: {planet.population}</p>
                    </div> :
                    <div>
                        <img src={obiWanMeme} alt="Obi Wan Kenobi Meme"></img>
                    </div>
            }
        </div>
    )
}

export default Planets;