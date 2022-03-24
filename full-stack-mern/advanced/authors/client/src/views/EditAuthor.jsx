import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useHistory, Link } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';

const EditAuthor = () => {
    const { id } = useParams();
    const [name, setName] = useState("")
    const history = useHistory();
    // const [errors, setErrors] = useState("")
    const [error, setError] = useState("")
    const [loaded, setLoaded] = useState(false)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setName(res.data.name);
                setLoaded(true)
            })
            .catch(err => {
                console.log(err)
                setNotFound(true)
            })
    }, []);

    const editAuthor = (author) => {
        axios.put(`http://localhost:8000/api/authors/${id}`, author)
            .then(res => {
                history.push(`/`)
            })
            .catch(err => {
                // const errResponse = err.response.data.errors
                // const errArray =[]
                // for (const key of Object.keys(errResponse)){
                //     errArray.push(errResponse[key].message)
                // }
                // setErrors(errArray)
                setError(err.response.data.errors.name.message)

            })
    }

    return (
        <div>
            <Link to="/">Home</Link>
            {
                notFound ?
                    <div className="container w-50 shadow p-3 my-5 bg-body rounded">
                        <h5>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h5> 
                        <Link to="/authors/new" className="btn btn-outline-primary mt-2">Add an author</Link>
                    </div>
                    :
                    <div className="container w-50 shadow p-3 my-5 bg-body rounded">
                        <h3>Edit author:</h3>
                        {
                            loaded && (
                                <AuthorForm onSubmitProp={editAuthor} initialName={name}/>
                            )
                        }
                        {
                            // errors &&
                            // errors.map((error, i) => (
                            //     <p key={i} className="text-danger">{error}</p>
                            // ))
                            error &&
                            <p className="text-danger">{error}</p>
                        }
                    </div>
            }

        </div>
    )
}

export default EditAuthor