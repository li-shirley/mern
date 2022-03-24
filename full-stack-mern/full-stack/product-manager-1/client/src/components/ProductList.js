import {Link} from "react-router-dom";
import DeleteButton from './DeleteButton';


const ProductList = (props) => {
    const {products, onNewSubmit} = props;

    // const deleteProduct = (productId) => {
    //     axios.delete(`http://localhost:8000/api/products/${productId}`)
    //         .then(res => {
    //             props.onNewSubmit()
    //         })
    //         .catch(err => console.error(err));
    // }

    return (
        <div className="container w-50 my-5">
            <h3>All Products</h3> 
            {
                products &&
                products.map((product, i) => (
                    <div key={i} className="d-flex align-items-center m-2">
                        <DeleteButton productId = {product._id} successCallback={onNewSubmit}/>
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

