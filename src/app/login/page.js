'use client'
import React, { useState } from 'react'
import { Eye, EyeOff, Mail, LockKeyhole } from 'lucide-react'
import LogInSignupOptions from '../components/LogInSignupOptions';

const LoginPage = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
  return (
    <div className='m-7 md:w-[30%] md:m-auto'>
        <h1 className='flex justify-center items-center my-10 text-[#1e3308] text-4xl md:text-5xl font-bold'>Login</h1>
        <form className='flex-1 space-y-6' action="">

            <div className='relative'>
                <div className='absolute left-3 inset-y-3.5 text-gray-400'>
                    <Mail className='w-4.5 h-4.5'/>
                </div>
                <input type="email" name='email' className="pl-10 bg-neutral-secondary-medium border border-default-medium focus:outline-none focus:ring-0 text-heading text-sm rounded-full block w-full px-3 py-3 placeholder:text-body" placeholder="john@example.com" required />
            </div>

            <div className='relative'>
                <div className='absolute left-3 inset-y-3.5 text-gray-400'>
                    <LockKeyhole className='w-4.5 h-4.5'/>
                </div>
                <input name='password' className="pl-10 bg-neutral-secondary-medium border border-default-medium focus:outline-none focus:ring-0 text-heading text-sm rounded-full block w-full px-3 py-3 placeholder:text-body" placeholder="••••••••" required 
                    type={isPasswordVisible ? 'text' : 'password'}
                />
                <button type='button' className='absolute right-3 inset-y-0 text-gray-400 hover:text-gray-500'
                    onClick={togglePasswordVisibility}
                >
                    {isPasswordVisible ? <Eye /> : <EyeOff />}
                </button>
            </div>

            <div className='flex justify-center'>
                <button type='button' className='underline text-sm text-[#686963] hover:text-gray-500 hover:cursor-pointer'>Forget Password?</button>
            </div>

            <button type='submit' className='border w-full rounded-full p-2 md:p-3 bg-[#1e3308] text-lg font-bold text-white hover:cursor-pointer'>
                Login
            </button>
        </form>

        <div className='my-10 flex justify-center items-center gap-4 text-gray-400'>
            <hr className='w-[40%]'/>
            <p>or</p>
            <hr className='w-[40%]'/>
        </div>

        <LogInSignupOptions/>

        <div className='mt-2'>
            <p className='text-center text-sm text-[#686963]'>Don't have an account? <button className='hover:text-gray-700 hover:cursor-pointer'>Sign Up</button></p>
        </div>
    </div>
  )
}

export default LoginPage