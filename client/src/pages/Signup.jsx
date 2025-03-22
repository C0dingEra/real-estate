import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

export const Signup = () => {
    const [formData, setFormData] = useState({});
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.id]: e.target.value
            }
        )
    }
    const handleSubmit=async(e)=>{
        try {
            setLoading(true);
        e.preventDefault();
        const res=await fetch('/api/auth/signup',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(formData),
        })
        const data=await res.json();
        if(data.success===false){
            setLoading(false)
            setError(data.message)
            return;
        }
        setLoading(false);
        setError(null);
        navigate('/signin');
        
        } catch (error) {
            setLoading(false)
            setError(error.message)
            console.log(error);
        }
    }
    return (
        <div className='p-3 mx-auto max-w-md text-sm'>
            <h1 className='text-2xl font-semibold text-center my-7 uppercase'>Sign Up</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input type="text" placeholder='Username' className='p-3 border border-gray-300 rounded-lg outline-none' id='username' onChange={handleChange} />
                <input type="email" placeholder='Email' className='p-3 border border-gray-300 rounded-lg outline-none'
                    id='email' onChange={handleChange}
                />
                <input type="password" placeholder='Password' className='p-3 border border-gray-300 rounded-lg outline-none' id='password' onChange={handleChange} />
                <button
                disabled={loading}
                className='uppercase bg-slate-700 p-3 rounded-lg text-white hover:opacity-90 cursor-pointer disabled:opacity-80' >{loading?'loading...':'Signup'}</button>
                <button className='uppercase bg-red-700 p-3 rounded-lg text-white hover:opacity-90 cursor-pointer'>continue with google</button>
            </form>
            <div className='flex mt-5 gap-2'>
                <p>have an account?</p>
                <Link to={'/signin'}>
                    <span className='text-blue-700'>Sign in</span>
                </Link>
            </div>
            {error && <p className='text-red-600 font-semibold mt-5'>{error}</p>}
        </div>
    )
}
