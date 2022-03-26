import React, { useEffect, useState } from 'react';
import Musk from '../Musk/Musk';
import './Musks.css';

const Musks = () => {

    const [musks, setMusks] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setMusks(data))
    }, []);
    const handleAddToClick = (musk) => {
        const newCart = [...cart, musk]
        setCart(newCart)

    }
    return (


        <div className='musks-container'>
            <div className='all-musk'>
                {
                    musks.map(musk => <Musk
                        musk={musk}
                        key={musk.id}
                        handleAddToClick={handleAddToClick
                        }></Musk>)
                }

            </div>
            <div className='collection-cart'>
                <h2 style={{ color: 'indigo', fontStyle: 'oblique' }} >Pick your musk now</h2>
                <div className='selection-container'>{
                    cart.map((musk) => <div className='do-flex'> <img src={musk.img} alt="" />,<h3>{musk.name}</h3></div>)
                }</div>
                <button style={{ padding: '10px', marginTop: '20px', color: 'white', backgroundColor: 'green', fontSize: '15px', borderRadius: '10px', cursor: 'pointer' }}>CHOOSE 1 FOR ME</button>
                <button style={{ padding: '10px', marginTop: '20px', color: 'white', backgroundColor: 'green', fontSize: '15px', borderRadius: '10px', cursor: 'pointer' }}>CHOOSE AGAIN</button>

            </div>

        </div >

    );
};

export default Musks;