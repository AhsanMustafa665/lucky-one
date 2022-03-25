import React from 'react';
import './Musk.css';

const Musk = (props) => {
    const { name, img, price, service } = props.musk;
    return (
        <div>
            <div className='product'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>{service}</p>
                <h4>Price : ${price}</h4>
            </div>

        </div>
    );
};

export default Musk;