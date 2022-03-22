import React, { useState } from 'react'
import axios from 'axios';

export default (props) => {
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState(""); 

    const onSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
                setTitle("")
                setPrice("")
                setDescription("")
                props.onNewFormSubmit()
            .catch(err=>console.log(err))
    }

    return (
        <div className="container w-50 shadow p-3 my-5 bg-body rounded">
            <h3>Add Product</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label className="form-label">Title</label>
                    <input className="form-control" type="text" name="title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </div>
                <div>
                    <label className="form-label">Price</label>
                    <input className="form-control" type="number" name="price" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </div>
                <div>
                    <label className="form-label">Description</label>
                    <textarea className="form-control" type="text" name="description" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                <button className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    )
}

