import React from 'react';
import useProducts from '../../hooks/useProducts';
import './Reviews.css';
const Reviews = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='review-container'>
            <div className="review-image"></div>
            <div className="review-details">
                <h3>Name: {products.name}</h3>
                <p>rating: {products.rating}</p>
            </div>
            <h1>This is reviews: {products.length}</h1>

        </div>
    );
};

export default Reviews;