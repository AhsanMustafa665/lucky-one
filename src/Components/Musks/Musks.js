import React, { useEffect, useState } from 'react';
import Musk from '../Musk/Musk';
import './Musks.css';

const Musks = () => {

    const [musks, setMusks] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setMusks(data))
    }, []);
    const handleAddToClick = (musk) => {
        console.log(musk);
    }
    return (

        <div className='musks-container'>
            <div className='all-musk'>
                {
                    musks.map(musk => <Musk
                        musk={musk}
                        key={musk.id}
                        handleAddToClick={handleAddToClick}></Musk>)
                }
            </div>
            <div className='collection-cart'>
                <h1>Pick your favourite now</h1>
            </div>

        </div>

    );
};

export default Musks;