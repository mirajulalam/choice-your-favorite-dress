import React from 'react';
import './Header.css';
import CustomLink from './../CustomLink/CustomLink';
const Header = () => {
    return (
        <div>
            <ul className='header-link'>
                <CustomLink to="/home">HOME</CustomLink>
                <CustomLink to="/reviews">REVIEWS</CustomLink>
                <CustomLink to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink to="/blogs">BLOGS</CustomLink>
                <CustomLink to="/about">ABOUT</CustomLink>
            </ul>
        </div>
    );
};

export default Header;