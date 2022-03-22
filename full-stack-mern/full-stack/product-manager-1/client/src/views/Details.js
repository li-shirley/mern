import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const Details = (props) => {
    const [product, setProduct] = useState()
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data)
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
                    </div> 
            }
        </div>
    )
}

export default Details;
