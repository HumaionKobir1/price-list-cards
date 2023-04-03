import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

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
        <nav className='bg-fuchsia-800'>
            <div className='flex justify-between container mx-auto items-center p-3'>
            <h1 className='text-3xl text-white font-semibold'>Humaion Kobir</h1>
            <div>
            <div onClick={()=> setOpen(!open)} className='md:hidden py-3'>
                
                <span>
                    {
                    open === true ? 
                    <XMarkIcon className="h-6 w-6 text-white" />
                    : <Bars3Icon className="h-6 w-6 text-white" />  
                    }
                </span>
                
                
            </div>
            <ul className={`md:flex gap-8 absolute md:static duration-500 text-white bg-fuchsia-800 w-full text-center text-base font-bol ${open ? 'top-16 left-0' : '-top-36'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
            </div>
            </div>
        </nav>
    );
};

export default Navber;