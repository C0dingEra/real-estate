import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header className='flex justify-between p-2 items-center border-gray-200 gap-2 shadow-[rgba(0,0,0,0,5)] bg-blue-200 h-[70px]'>
            <h1 className='md:text-xl font-bold flex items-center gap-1'>
                <span className='text-red-800 text-sm md:text-xl lg:text-2xl xl:text-3xl '>Find</span>
                <span className='text-sm md:text-xl lg:text-2xl xl:text-3xl'>One</span>
            </h1>
            <form className='flex items-center text-sm md:text-xl lg:text-2xl xl:text-3xl bg-white rounded-md p-2 border border-gray-400 h-full md:h-full w-38 sm:w-64 md:w-100 lg:w-80 xl:w-96'>
                <input type="text" placeholder='Search...' className='focus:outline-none w-full text-sm' />
                <FaSearch className='cursor-pointer text-slate-600 md:text-sm'/>
            </form>
            <ul className='flex gap-2 sm:gap-4 items-center'>
                <Link to='/'>
                    <li className='text-sm md:text-lg lg:text-lg xl:text-lg hidden sm:inline hover:underline'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='text-sm md:text-lg lg:text-lg xl:text-lg hidden sm:inline hover:underline'>About</li>
                </Link>
                <Link to='signin'>
                    <li className='text-sm md:text-lg lg:text-lg xl:text-lg hover:underline'>Sign in</li>
                </Link>
            </ul>
        </header>
    )
}
