import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

const Update = (props) => {
    const { id } = useParams();
    // const [title, setTitle] = useState('');
    // const [price, setPrice] = useState('');
    // const [description, setDescription] = useState('');
    const [product, setProduct] = useState();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data)
                // setTitle(res.data.title);
                // setPrice(res.data.price);
                // setDescription(res.data.description);
            })
    }, []);

    const updateProduct = product => {
        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then(res => {
                console.log(res)
                history.push(`/products/${id}`)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <div className="container w-50 shadow p-3 my-5 bg-body rounded">
                <h3>Update a Product</h3>
                {
                    product && (
                        <div>
                            <ProductForm onSubmit={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} />
                            <DeleteButton productId={product._id} successCallback={() => history.push(`/products`)}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Update;

