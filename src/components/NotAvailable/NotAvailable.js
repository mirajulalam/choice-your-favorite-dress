import React from 'react';
import './NotAvailable.css';
import NotFound from '../../Assets/notfound.jpeg';
const NotAvailable = () => {
    return (
        <div className='Page-notfound'>
            <img src={NotFound} alt="" />
        </div>
    );
};

export default NotAvailable;