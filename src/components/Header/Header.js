import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <ul className='header-link'>
                <Link to="/home">HOME</Link>
                <Link to="/reviews">REVIEWS</Link>
                <Link to="/dashboard">DASHBOARD</Link>
                <Link to="/blogs">BLOGS</Link>
                <Link to="/about">ABOUT</Link>
            </ul>
        </div>
    );
};

export default Header;