import React, { useState } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'

const CreateAuthor = () => {
    const [name, setName] = useState("")
    const history = useHistory()
    // const [errors, setErrors] = useState("")
    const [error, setError] = useState("")

    const handleCreate = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors", { name })
            .then(res => history.push("/"))
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
            <div className="container w-50 shadow p-3 my-5 bg-body rounded">
                <h3>Add a new author:</h3>
                <form onSubmit={handleCreate}>
                    <div>
                        <label className="form-label">Name:</label>
                        <input className="form-control" type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <Link to={`/`} className="btn btn-outline-primary me-2 mt-3">Cancel</Link>
                    <button className="btn btn btn-primary mt-3">Submit</button>
                </form>
                {
                    // errors &&
                    // errors.map((error, i) => (
                    //     <p key={i} className="text-danger">{error}</p>
                    // ))
                    error &&
                    <p className="text-danger">{error}</p>
                }
            </div>
        </div>
    )
}

export default CreateAuthor