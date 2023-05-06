import React from 'react';
import {useSelector} from "react-redux";
import {prodSelect} from "../../redux/productsSlice.js";
import Product from "../Product/Product.jsx";


const Products = () => {
    const {products} = useSelector(prodSelect)

    return (
        <div>
            <div className="container">
                <h2>Main Page</h2>
                <div className='blocks'>
                    {
                        products.map(i => <Product i={i}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;