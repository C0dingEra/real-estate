import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
export const Profile = () => {
    const fileRef = useRef(null);
    const { currentUser } = useSelector((state) => state.user)
    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl font-semibold text-center my-4'>Profile</h1>
            <form className='flex flex-col gap-4'>
                <input type="file" ref={fileRef} hidden accept='image/*' />
                <img onClick={() => fileRef.current.click()} className='rounded-full h-20 w-20 cursor-pointer self-center' src={currentUser.avatar} alt="profile" />
                <input type="username" placeholder='Username' id='username' className='border border-slate-300 outline-none p-3 rounded-lg' />
                <input type="email" placeholder='Email' id='email' className='border border-slate-300 outline-none p-3 rounded-lg' />
                <input type="password" placeholder='Password' id='password' className='border border-slate-300 outline-none p-3 rounded-lg' />
                <button className='uppercase bg-slate-700 p-3 hover:opacity-95 disabled:opacity-80 rounded-lg cursor-pointer text-white'>Update</button>
            </form>
            <div className='flex justify-between mt-2'>
                <span className='text-red-700 cursor-pointer'>Delete account</span>
                <span className='text-red-700 cursor-pointer'>sign Out</span>
            </div>

        </div>
    )
}
