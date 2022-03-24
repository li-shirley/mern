import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from "react"
import axios from "axios"

const Dashboard = () => {
    const [authors, setAuthors] = useState()

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }, [])

    const deleteAuthor = (deleteId) => {
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
            .then(res => {
                setAuthors(authors.filter(author => author._id !== deleteId))
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <Link to="/authors/new">Add an author</Link>
            <h5>We have quotes by:</h5>
            {
                authors ?
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Author
                            </th>
                            <th>
                                Actions Available
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors.map((author, i) => (
                                <tr key={i}>
                                    <td>
                                        {author.name}
                                    </td>
                                    <td>
                                        <Link to={`/authors/edit/${author._id}`} className="btn btn-sm btn-outline-secondary me-2">Edit</Link>
                                        <button className="btn btn-sm btn-secondary" onClick={() => deleteAuthor(author._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table> :
                <h3>There are no authors added yet. Please click the link above to add your favorite authors.</h3>
            }
        </div>
    )
}

export default Dashboard