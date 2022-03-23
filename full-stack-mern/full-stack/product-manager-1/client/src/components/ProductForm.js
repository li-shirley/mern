import React, { useState } from 'react'
// import axios from 'axios';

export default (props) => {
    const {initialTitle, initialPrice, initialDescription, onSubmit} = props;
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription); 

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({title, price, description})
        setTitle(initialTitle)
        setPrice(initialTitle)
        setDescription(initialDescription)
        // axios.post('http://localhost:8000/api/products/new', {
        //     title,
        //     price,
        //     description
        // })
        //     .then(res=>console.log(res))
        //         setTitle("")
        //         setPrice("")
        //         setDescription("")
        //         props.onNewSubmit()
        //     .catch(err=>console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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

