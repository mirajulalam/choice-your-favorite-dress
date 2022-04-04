import React from 'react';
import './Home.css';
import headerImage from '../../Assets/dress.jpg';
import useProducts from './../../hooks/useProducts';
import { Link } from 'react-router-dom';
import ShotOrderReviews from '../ShotOrderReviews/ShotOrderReviews';
const Home = () => {
    const [products, setProducts] = useProducts();
    return (
        <>
            <div className='home-container'>
                <div className="home-details">
                    <h1>Choice your favorite dress</h1>
                    <p>Welcome to my shopping website.and choice your favorite dress.high quality <br /> flexible dress.this dress price is very low don't miss this offer.</p>
                    <button>Live Demo</button>
                </div>
                <div className="home-images">
                    <img src={headerImage} alt="" />
                </div>
            </div>


            <div className='customer-reviews'>
                <h1 className='customer-title'>Customer Reviews({products.slice(0, 3).length})</h1>
                {
                    products.slice(0, 3).map(item => <ShotOrderReviews
                        key={item.id}
                        item={item}
                    ></ShotOrderReviews>)
                }
                <div className="customer-btn">
                    <Link to="/reviews">See All Reviews</Link>
                </div>
            </div>
        </>
    );
};

export default Home;