import React from 'react';
import './Mask.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Mask = (props) => {
    const { handleAddToClick } = props;
    const { name, img, price, service } = props.mask;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2>{name}</h2>
                <p>{service}</p>
                <h4>Price : ${price}</h4>
            </div>
            <button onClick={() => handleAddToClick(props.mask)}
                className='btn-cart'>ADD TO CART
                <FontAwesomeIcon className='font' icon={faCartShopping}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Mask;