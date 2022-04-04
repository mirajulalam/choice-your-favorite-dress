import React from 'react';
import './ShotOrderReview.css';
const ShotOrderReviews = ({ item }) => {
    console.log(item)
    return (
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
    );
};

export default ShotOrderReviews;