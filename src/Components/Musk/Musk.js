import React from 'react';
import './Musk.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Musk = (props) => {
    const { handleAddToClick } = props;
    const { name, img, price, service } = props.musk;
    return (

        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2>{name}</h2>
                <p>{service}</p>
                <h4>Price : ${price}</h4>
            </div>
            <button onClick={() => handleAddToClick(props.musk)} className='btn-cart'>ADD TO CART
                <FontAwesomeIcon className='font' icon={faCartShopping}></FontAwesomeIcon> </button>
        </div>


    );
};

export default Musk;