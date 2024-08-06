import React from 'react';
import { NavLink } from 'react-router-dom';
import Mart from './Assests/Mart.png'
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
    const { carts } = useSelector((state) => state.AllGrocery)

    // console.log(carts);
    return (
        <>
            <nav className="bg-gray-800 p-4 w-full border border-b-2 border-white ">
                <div className="container mx-auto flex items-center justify-between">

                    <div className="text-white font-bold text-xl"> <img className='rounded' src={Mart} alt="Mart" height={20} width={40} /></div>
                    <div className="text-yellow-400 font-serif font-bold text-4xl">Shooping <span className='text-white'>Mart</span> </div>

                    <div className="flex space-x-8 ">
                        <NavLink
                            to="/"
                            className="text-yellow-300  font-serif text-2xl hover:text-white transition duration-300"
                            activeclassname="border-b-2 border-white"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="about"
                            className="text-yellow-300 font-serif text-xl hover:text-white transition duration-300"
                            activeclassname="border-b-2 border-white"
                        >
                            <div className='flex'>
                                
                                <span className='flex' >
                                    <ShoppingCartIcon   style={{ fontSize: 48 }}/>
                                    <p className='font-serif  text-xl text-white'>{carts.length}</p>
                                </span>
                            </div>
                        </NavLink>

                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;




