import React from 'react';

const PriceCart = ({price}) => {
    return (
        <div>
            <h5><span className='text-4xl font-bold text-fuchsia-500'>{price.price}</span> /mon</h5>
            <h4 className='text-xl font-semibold'>{price.name}</h4>
        </div>
    );
};

export default PriceCart;