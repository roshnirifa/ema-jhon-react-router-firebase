import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='items'>
                <a href="/home">Home</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about-us">About Us</a>
                <a href="/login">Login</a>


            </div>
        </nav>
    );
};

export default Header;