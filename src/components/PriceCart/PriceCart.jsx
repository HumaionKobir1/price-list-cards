import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h5 className='text-white text-center'><span className='text-4xl text-center font-bold text-yellow-400 '>{price.price}</span> /mon</h5>
            <h4 className='text-2xl font-semibold text-center'>{price.name}</h4>
            <p className='text-xl font-semibold text-white underline'>Features:</p>
            {
                price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='w-full bg-orange-700 hover:bg-orange-950 py-3 text-white font-bold rounded-lg mt-auto'>Buy Now</button>
        </div>
    );
};

export default PriceCart;