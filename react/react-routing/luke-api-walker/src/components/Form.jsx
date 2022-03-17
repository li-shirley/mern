import React, { useState} from 'react'
import { useHistory } from "react-router-dom";

const Form = () => {
    const [resource, setResource] = useState("people")
    const [id, setId] = useState("")
    const history = useHistory();

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`/${resource}/${id}`)
    }

    return (
        <div className="d-flex justify-content-center p-5">
            <form className="row g-3 align-items-center" onSubmit={handleSearch}>
                <div className="col-auto">
                    <label className="form-label">Search for: </label>
                </div>
                <div className="col-auto">
                    <select className="form-select" name="resource" onChange={(e) => setResource(e.target.value)} value={resource}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="films">Films</option>
                    </select>
                </div>
                <div className="col-auto">
                    <label className="form-label">Id: </label>
                </div>
                <div className="col-auto">
                    <input className="form-control" type="number" name="id" placeholder="#" onChange={(e) => setId(e.target.value)} value={id}>
                    </input>
                </div>
                <div className="col-auto">
                    <button className="btn btn-success">Search</button>
                </div>
            </form>               
        </div>
    )
}

export default Form