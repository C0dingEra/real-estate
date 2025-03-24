import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice';
export const SignIn = () => {

    const [formData, setFormData] = useState({});
    const { loading, error } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.id]: e.target.value
            }
        )
    }
    const handleSubmit = async (e) => {
        try {
            dispatch(signInStart())
            e.preventDefault();
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            const data = await res.json();
            if (data.success === false) {
                dispatch(signInFailure(data.message))
                return;
            }
            dispatch(signInSuccess(data))
            navigate('/');

        } catch (error) {
            dispatch(signInFailure(error.message))
        }
    }
    return (
        <div className='p-3 mx-auto max-w-md text-sm'>
            <h1 className='text-2xl font-semibold text-center my-7 uppercase'>Sign in</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input type="email" placeholder='Email' className='p-3 border border-gray-300 rounded-lg outline-none'
                    id='email' onChange={handleChange}
                />
                <input type="password" placeholder='Password' className='p-3 border border-gray-300 rounded-lg outline-none' id='password' onChange={handleChange} />
                <button
                    disabled={loading}
                    className='uppercase bg-slate-700 p-3 rounded-lg text-white hover:opacity-90 cursor-pointer disabled:opacity-80' >{loading ? 'loading...' : 'SignIn'}</button>
                <OAuth />
            </form>
            <div className='flex mt-5 gap-2'>
                <p>Dont have an account?</p>
                <Link to={'/signup'}>
                    <span className='text-blue-700'>Sign up</span>
                </Link>
            </div>
            {error && <p className='text-red-600 font-semibold mt-5'>{error}</p>}
        </div>
    )
}
