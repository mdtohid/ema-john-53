import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Order = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h1>This is Orders:{products.length}</h1>
            <h1>Cart:{cart.length}</h1>
        </div>
    );
};

export default Order;