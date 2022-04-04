import React from 'react';
import './Home.css';
import headerImage from '../../Assets/dress.jpg';
const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-details">
                <h1>Choice your favorite dress</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> At inventore corrupti, atque distinctio id quasi officiis suscipit similique iure minima.
                </p>
                <button>Live Demo</button>
            </div>
            <div className="home-images">
                <img src={headerImage} alt="" />
            </div>
        </div>
    );
};

export default Home;