import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from "axios";

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [refresh, setRefresh] = useState(true);

    function refreshAfterFormSubmit() {
        setRefresh(!refresh);
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => console.error(err));
    }, [refresh]);

    return (
        <div>
            <ProductForm onNewFormSubmit={refreshAfterFormSubmit}/>
            {products && <ProductList products={products} />}
        </div>
    )
}

export default Main;

