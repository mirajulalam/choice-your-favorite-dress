import React from 'react';
import './OrderReviews.css';
const OrderReviews = ({ product }) => {
    console.log(product)

    return (
        <div className='order-review'>
            <div className="order-image">
                <img src={product.picture} alt="" />
            </div>
            <div className="order-detail">
                <h1>Name: {product.name}</h1>
                <h3>Clinte review : {product.clintReview}</h3>
                <p>Rating: {product.rating} Star</p>
            </div>
        </div>
    );
};

export default OrderReviews;