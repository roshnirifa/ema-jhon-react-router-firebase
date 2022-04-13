import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../images/Logo.svg';
import auth from '../firebase_init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='items'>
                <a href="/home">Home</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about-us">About Us</a>
                {
                    user ? <button onClick={handleSignOut}>SignOut</button>
                        : <a href="/login">Login</a>
                }



            </div>
        </nav>
    );
};

export default Header;