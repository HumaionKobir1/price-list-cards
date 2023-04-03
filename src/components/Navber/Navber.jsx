import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon } from '@heroicons/react/24/solid'

const Navber = () => {
    const [open, setOpen] = useState(false);
    let routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Contact", path: "/contact" },
        { id: 4, name: "Blog", path: "/blog" },
        { id: 5, name: "Products", path: "/products" }
      ];
      
    return (
        <nav>
            <div onClick={()=> setOpen(!open)}>
                <span>{open === true ? 'open' : 'close'}</span>
                <Bars3Icon className="h-6 w-6 text-blue-500" />
            </div>
            <ul className='md:flex gap-6'>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navber;