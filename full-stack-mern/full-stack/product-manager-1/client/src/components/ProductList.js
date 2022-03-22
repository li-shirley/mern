import React from 'react'
import {Link} from "react-router-dom";
import axios from "axios"


const ProductList = (props) => {
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                props.onNewSubmit(productId)
            })
            .catch(err => console.error(err));
    }
    return (
        <div className="container w-50 my-5">
            <h3>All Products</h3> 
            {
                props.products &&
                props.products.map((product, i) => (
                    <div className="d-flex align-items-center m-2">
                        <button className="btn btn-sm btn-outline-secondary me-3" onClick={e=>{deleteProduct(product._id)}}>Delete</button>
                        <Link to={`/products/${product._id}`} key={i}>
                            <p>{product.title}</p>
                        </Link>
                    </div>
                ))
                
            }
        </div>
    )
}

export default ProductList;

