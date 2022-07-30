import React from 'react';
import logo from '../../images/Logo.svg';
import './Headers.css';
const Headers = () => { 
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/order review">Order Review</a>
                <a href="/manage inventory">Manage Inventory</a>
            </div>
        </nav>
    );
};

export default Headers;