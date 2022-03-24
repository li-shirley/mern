import React, { useState } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'

const CreateAuthor = () => {
    const [name, setName] = useState("")
    const history = useHistory()
    const [errors, setErrors] = useState("")
    // const [error, setError] = useState("")

    const createAuthor = (author) => {
        axios.post("http://localhost:8000/api/authors", author)
            .then(res => history.push("/"))
            .catch(err => {
                const errResponse = err.response.data.errors
                console.log(errResponse)
                let errArr = []
                for (const key of Object.keys(errResponse)) {
                    errArr.push(errResponse[key].message)
                }
                setErrors(errArr)
                // setError(err.response.data.errors.name.message)
            })
        setName("")
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <div className="container w-50 shadow p-3 my-5 bg-body rounded">
                <h3>Add a new author:</h3>
                <AuthorForm onSubmitProp={createAuthor} initialName="" />
                {
                    errors &&
                    errors.map((error, i) => (
                        <p key={i} className="text-danger">{error}</p>
                    ))
                    // error &&
                    // <p className="text-danger">{error}</p>
                }
            </div>
        </div>
    )
}

export default CreateAuthor