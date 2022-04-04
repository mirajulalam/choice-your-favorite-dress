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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> At inventore corrupti, atque distinctio id quasi officiis suscipit similique iure minima.
                    </p>
                    <button>Live Demo</button>
                </div>
                <div className="home-images">
                    <img src={headerImage} alt="" />
                </div>
            </div>


            <div className='customer-reviews'>
                <h1>Customer Reviews({products.length})</h1>
                {
                    products.map(item => <ShotOrderReviews
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