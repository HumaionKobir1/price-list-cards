import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Feature = ({feature}) => {
    return (
        <div className='flex gap-2 items-center mb-3'>
            <CheckCircleIcon className='h-6 w-6 text-gray-600'/>
            <span className='mt-3'>{feature}</span>
        </div>
    );
};

export default Feature;