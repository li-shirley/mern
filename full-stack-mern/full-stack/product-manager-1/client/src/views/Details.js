import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Details = (props) => {
    const [product, setProduct] = useState()
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="text-center">
            {
                product &&
                    <div>
                        <h3> Name: {product.title}</h3>
                        <h3> Price: ${product.price}</h3>
                        <h3> Description: {product.description}</h3>
                        <Link to={`/products/${product._id}/edit`}>Edit</Link>


                    </div> 
            }
        </div>
    )
}

export default Details;

