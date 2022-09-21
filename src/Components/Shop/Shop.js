import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb, getStoredCart } from '../../utilities/fakedb'; 
import useProducts from '../../hooks/useProducts';

const Shop = () => {
    const [products, setProduct]=useProducts();
    const [cart, setCart]=useState([]);
    // console.log(cart)

    useEffect(()=>{
        const storedCart=getStoredCart();
        const savedCart = [];

        for(const id in storedCart){
            const addedProduct = products.find(product=>product.id === id);
           if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // console.log(addedProduct)
            savedCart.push(addedProduct);
           }
            }
            // console.log(savedCart);
            setCart(savedCart);
    },[products]);

    const handleAddToCart=(selectedProduct)=>{
        
        let newCart=[];
        const exists = products.find(product=>product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else{
            const rest = products.filter(product => product.id !== selectedProduct.id );
            exists.quantity = exists.quantity+1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id); 
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;