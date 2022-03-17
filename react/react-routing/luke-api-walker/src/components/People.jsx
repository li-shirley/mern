import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import obiWanMeme from '../obi-wan-meme.jpeg'

const People = (props) => {
    const { id } = useParams();
    const [people, setPeople] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/`)
            .then(response => {
                console.log(response.data)
                setPeople(response.data)
            })
            // removing this line to so that the "These aren't the droids you're looking for" would display
            // .catch(error => console.log(error)) 
    }, [id])

    return (
        <div className="d-flex justify-content-center pb-5">
            {
                people ?
                    <div>
                        <h4>{people.name}</h4>
                        <p>Height: {people.height}</p>
                        <p>Mass: {people.mass}</p>
                        <p>Hair Color: {people.hair_color}</p>
                        <p>Skin Color: {people.skin_color}</p>
                    </div> :
                    <div>
                        <img src={obiWanMeme} alt="Obi Wan Kenobi Meme"></img>
                    </div>
            }
        </div>
    )
}

export default People;
