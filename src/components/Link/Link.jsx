import React from 'react';

const Link = ({route}) => {
    return (
        <li className='hover:bg-sky-500 md:px-3 md:py-2 rounded-lg'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;