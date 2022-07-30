import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h4>Order summery in cart</h4>
            <p>Selected items:{cart.length}</p>
        </div>
    );
};

export default Cart;