import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
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
                {/* <Link to="/home">HOME</Link>
                <Link to="/reviews">REVIEWS</Link>
                <Link to="/dashboard">DASHBOARD</Link>
                <Link to="/blogs">BLOGS</Link>
                <Link to="/about">ABOUT</Link> */}
            </ul>
        </div>
    );
};

export default Header;