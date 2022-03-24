import React, {useState} from 'react'
import {Link} from "react-router-dom"

const AuthorForm = (props) => {
    const {initialName, onSubmitProp} = props
    const [name, setName] = useState(initialName)

    const handleCreate = (e) => {
        e.preventDefault();
        onSubmitProp({name})
    }

    return (
        <div>
            <form onSubmit={handleCreate}>
                <div>
                    <label className="form-label">Name:</label>
                    <input className="form-control" type="text" name="name" onChange={(e) => setName(e.target.value)}  value = {name}/>
                </div>
                <Link to={`/`} className="btn btn-outline-primary me-2 mt-3">Cancel</Link>
                <button className="btn btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    )
}

export default AuthorForm