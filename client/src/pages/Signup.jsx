import {Link} from 'react-router-dom'
import React from 'react'

export const Signup = () => {
    return (
        <div className='p-3 mx-auto max-w-lg'>
            <h1 className='text-3xl font-semibold text-center my-7'>Sign Up</h1>
            <form className='flex flex-col gap-4'>
            <input type="text" placeholder='Username' className='p-3 border rounded-lg outline-none' id='username'/>
            <input type="email" placeholder='Email' className='p-3 border rounded-lg outline-none'/>
            <input type="password" placeholder='Password' className='p-3 border rounded-lg outline-none'/>
            <button className='uppercase bg-slate-700 p-3 rounded-lg text-white hover:opacity-90 cursor-pointer disabled:opacity-80'>Signup</button>
            <button className='uppercase bg-red-700 p-3 rounded-lg text-white hover:opacity-90 cursor-pointer'>continue with google</button>
            </form>
            <div className='flex mt-5 gap-2'>
                <p>have an account?</p>
                <Link to={'/signin'}>
                    <span className='text-blue-700'>Sign in</span>
                </Link>
            </div>
        </div>
    )
}
