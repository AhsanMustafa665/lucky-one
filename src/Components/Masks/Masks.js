import React, { useEffect, useState } from 'react';

import Mask from '../Mask/Mask';
import './Masks.css';

const Masks = () => {

    const [masks, setMasks] = useState([])
    const [cart, setCart] = useState([])
    const [selected, setSelected] = useState()
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setMasks(data))
    }, []);
    const handleAddToClick = (mask) => {
        const newCart = [...cart, mask]
        setCart(newCart)
        if (cart.length > 4) {
            alert('fsajdfjsd')
        }

    }
    // const handle = () => {
    //     console.log('asfd');
    // }
    const chooseProduct = () => {
        const chosen = (Math.floor(Math.random() * cart.length))
        setSelected(cart[chosen])
    }
    return (
        <div className='masks-container'>
            <div className='all-mask'>
                {
                    masks.map(mask => <Mask
                        mask={mask}
                        key={mask.id}
                        handleAddToClick={handleAddToClick
                        }></Mask>)
                }
            </div>
            <div className='collection-cart'>
                <h2 style={{ color: 'indigo', fontStyle: 'oblique' }} >Pick your mask now</h2>
                <div className='selection-container'>{

                    cart.slice(0, 4).map((mask) => <div className='do-flex' > <img src={mask.img} alt="" /> <h3>{mask.name}</h3></div>)
                }
                </div>

                <button onClick={chooseProduct} style={{ padding: '10px', marginTop: '20px', color: 'white', backgroundColor: 'green', fontSize: '15px', borderRadius: '10px', cursor: 'pointer' }}>CHOOSE 1 FOR ME</button>


                <button onClick={() => setSelected("")} style={{ padding: '10px', marginTop: '20px', color: 'white', backgroundColor: 'green', fontSize: '15px', borderRadius: '10px', cursor: 'pointer' }}>CHOOSE AGAIN</button>

                {
                    selected &&
                    <div className='justOne'>
                        <img src={selected?.img} alt="" />
                        <div className='product-info'>
                            <h2>{selected?.name}</h2>
                            <p>{selected?.service}</p>
                            <h4>Price : ${selected?.price}</h4>
                        </div>
                    </div>
                }

            </div>


        </div >


    );
};

export default Masks;