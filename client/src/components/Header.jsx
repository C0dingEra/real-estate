import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header className='flex justify-between p-2 items-center border-gray-200 gap-2 shadow-[rgba(0,0,0,0,5)] bg-blue-200 h-[70px]'>
            <h1 className='md:text-xl font-bold flex items-center gap-1'>
                <span className='text-red-800 text-xl md:text-xl lg:text-2xl xl:text-3xl '>Find</span>
                <span className='text-xl md:text-xl lg:text-2xl xl:text-3xl'>One</span>
            </h1>
            <form className='flex items-center text-sm md:text-xl lg:text-2xl xl:text-3xl bg-white rounded-md p-2 border h-full md:h-full'>
                <input type="text" placeholder='Search...' className='focus:outline-none md:w-64 w-44 text-xl' />
                <FaSearch className='cursor-pointer text-slate-600' />
            </form>
            <ul className='flex gap-2 sm:gap-4 items-center'>
                <Link to='/'>
                    <li className='text-sm md:text-lg lg:text-lg xl:text-lg hidden sm:inline hover:underline'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='text-sm md:text-lg lg:text-lg xl:text-lg hidden sm:inline hover:underline'>About</li>
                </Link>
                <Link to='signin'>
                    <li className='text-xl md:text-lg lg:text-lg xl:text-lg hover:underline'>Sign in</li>
                </Link>
            </ul>
        </header>
    )
}
