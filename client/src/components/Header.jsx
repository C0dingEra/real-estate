import React from 'react';
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
export default function Header() {
    const { currentUser } = useSelector((state) => state.user)
    const navigate = useNavigate()
    return (
        <header className='flex justify-between p-2 items-center border-slate-200 gap-2 shadow-md bg-slate-300 h-[70px]'>
            <h1 onClick={() => navigate('/')} className='md:text-xl font-bold flex items-center gap-1 cursor-pointer'>
                <span className='text-red-800 text-sm md:text-xl lg:text-2xl xl:text-3xl'>Find</span>
                <span className='text-sm md:text-xl lg:text-2xl xl:text-3xl'>One</span>
            </h1>
            <form className='flex items-center text-sm md:text-xl lg:text-2xl xl:text-3xl bg-white rounded-md p-2 border border-gray-400 h-full md:h-full w-38 sm:w-64 md:w-100 lg:w-80 xl:w-96'>
                <input type="text" placeholder='Search...' className='focus:outline-none w-full text-sm' />
                <FaSearch className='cursor-pointer text-slate-600 md:text-sm' />
            </form>
            <ul className='flex gap-2 sm:gap-4 items-center'>
                <Link to='/'>
                    <li className='text-sm md:text-lg lg:text-lg xl:text-lg hidden sm:inline underline-animation hover:text-green-700'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='text-sm md:text-lg lg:text-lg xl:text-lg hidden sm:inline underline-animation hover:text-green-700'>About</li>
                </Link>
                <Link to='/profile'>
                    {currentUser ? (<img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt="profile" />) : (<li className='text-sm md:text-lg lg:text-lg xl:text-lg underline-animation hover:text-green-700'>Sign in</li>)}

                </Link>
            </ul>
        </header>
    )
}
