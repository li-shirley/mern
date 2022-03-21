import React, { useState } from 'react'
import axios from 'axios';
export default () => {

    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState(""); 

    const onSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <div className="container w-50 shadow p-3 mb-5 bg-body rounded">
            <h3>Add Product</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label className="form-label">Title</label>
                    <input class="form-control" type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                </div>
                <div>
                    <label className="form-label">Price</label>
                    <input class="form-control" type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </div>
                <div>
                    <label className="form-label">Description</label>
                    <input class="form-control" type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                <button class="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    )
}

