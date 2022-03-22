import React from 'react'
import {Link} from "react-router-dom";

const ProductList = (props) => {
    return (
        <div className="container w-50 my-5">
            <h3>All Products</h3> 
            {
                props.products &&
                props.products.map((product, i) => (
                    <Link to={`/products/${product._id}`} key={i}>
                        <p>{product.title}</p>
                    </Link>
                ))
                
            }
            {/* <table className="table">
                <thead>
                    <tr>
                        <th> Title</th>
                        <th> Price</th>
                        <th> Description</th>
                        <th> Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.products &&
                        props.products.map((product, i) => (
                            <tr key={i}>
                                <td> {product.title}</td>
                                <td> ${product.price}</td>
                                <td> {product.description}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table> */}
            
        </div>
    )
}

export default ProductList;

