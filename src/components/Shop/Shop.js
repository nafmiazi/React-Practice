import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    } 

    return (
        <div className="shop-container row">
            <div className="product-container col-lg-9">
                {
                    products.map(product => <Product product={product} key={product.key} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container col-lg-3">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;