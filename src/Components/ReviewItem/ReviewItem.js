import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product }) => {
    return (
        <div className='review'>
            <div className='review-item'>
                <img src={product.img} alt="" srcset="" />
            </div>
            <div className='review-item-details-container'>
                <div className='review-item-details'>
                    <h6>{product.name}</h6>
                    <p>Price: ${product.price}</p>
                    <p>Shipping Charge: ${product.shipping}</p>
                </div>
                <button className='delete-container'>
                <FontAwesomeIcon className='icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;