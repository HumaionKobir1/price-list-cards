import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {
    const [prices, setPrice] = useState([]);

    useEffect( () => {
        fetch('price.json')
        .then(res => res.json())
        .then(data => setPrice(data));
    }, [])
    return (
        <div className='container mx-auto'>
            <h2 className='text-5xl text-center text-purple-950 bg-purple-300 py-3'>Awesome Affordable Prices</h2>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 container mx-auto'>
                {
                    prices.map(price => <PriceCart
                        key={price.id}
                        price ={price}    
                    ></PriceCart>)
                }
            </div>
        </div>
    );
};

export default PriceList;