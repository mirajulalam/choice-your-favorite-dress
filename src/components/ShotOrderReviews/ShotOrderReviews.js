import React from 'react';
import './ShotOrderReview.css';
const ShotOrderReviews = ({ item }) => {
    return (
        <div>
            <div className='order-review'>
                <div className="order-image">
                    <img src={item.picture} alt="" />
                </div>
                <div className="order-detail">
                    <h1>Name: {item.name}</h1>
                    <h3>Clinte review : {item.clintReview}</h3>
                    <p>Rating: {item.rating} Star</p>
                </div>
            </div>
        </div>
    );
};

export default ShotOrderReviews;