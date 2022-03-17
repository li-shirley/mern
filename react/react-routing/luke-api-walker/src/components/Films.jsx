import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import obiWanMeme from "../obi-wan-meme.jpeg"

const Films = (props) => {
    const { id } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/${id}/`)
            .then(response => {
                console.log(response.data)
                setFilm(response.data)
            })
        // removing this line to so that the "These aren't the droids you're looking for" would display
        // .catch(error => console.log(error))
    }, [id])

    return (
        <div className="d-flex justify-content-center pb-5">
            {
                film ?
                    <div>
                        <h4>{film.title}</h4>
                        <p>Release Date: {film.release_date}</p>
                        <p>Director: {film.director}</p>
                        <p>Producer: {film.producer}</p>
                        <p>Episode Id: {film.episode_id}</p>
                    </div> :
                    <div>
                        <img src={obiWanMeme} alt="Obi Wan Kenobi Meme"></img>
                    </div>
            }
        </div>
    )
}

export default Films;