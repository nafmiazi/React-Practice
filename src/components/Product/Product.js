import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {img, name, price, stock, seller} = props.product;
    
    return (
        <div className="product row mb-4 p-3">
            <div className="col-lg-5 text-center">
                <img className="" src={img} alt="" />
            </div>

            <div className="col-lg-7">
                <h5 className="text-primary">{name}</h5>
                <p><small>by {seller}</small></p>
                <h4>Price: ${price}</h4>
                <p><small>only {stock} left in stock - order soon</small></p>
                <div className="d-grid col-5">
                    <button onClick={()=> props.handleAddToCart(props.product)} className="btn btn-warning btn-sm" type="button">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;