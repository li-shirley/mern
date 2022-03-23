import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from "axios";

const Main = () => {
    const [products, setProducts] = useState();
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => (setProducts(res.data)))
            .catch(err => console.error(err));
    }, [refresh]);

    function refreshPage() {
        setRefresh(!refresh);
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products/new', product)
            .then(res => {
                setProducts([...products, res.data])
                refreshPage()
            })
    }

    return (
        <div>
            <div className="container w-50 shadow p-3 my-5 bg-body rounded">
                <h3>Add a Product</h3>
                <ProductForm onSubmit={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            </div>
                {
                    products && 
                    <ProductList products={products} onNewSubmit={refreshPage} />
                }
        </div>
    )
}

export default Main;

