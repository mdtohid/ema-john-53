import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {id, name, img, price, seller, ratings}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p> 
            <p>Price:${price}</p>
            <p> <small>Manufacturer:{seller}</small></p>
            <p> <small>Ratings:{ratings}</small></p>
            </div>
            <button className='btn-cart' onClick={()=>props.handleAddToCart(props.product)}>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;