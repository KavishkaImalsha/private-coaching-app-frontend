'use client'
import React from 'react'
import LogInSignupOptions from '../components/LogInSignupOptions';
import Image from 'next/image';
const SignupPage = () => {
  return (
    <div className='m-7 md:w-[30%] md:m-auto'>
        <Image
            src='/coach-img.jpg' 
            alt='Coach Image'
            width={200}
            height={200}
            className='m-auto'
        />
        <div className='text-center'>
            <h1 className='text-3xl font-bold text-[#1e3308]'>Private Coaching</h1>
            <p className='text-gray-500 text-md'>Add one-on-one, confidential sessions for only 
                <span className='block'>$35 per session</span>
            </p>
        </div>

       <div className='flex gap-2 my-10'>
            <div className="bg-[#bde288] h-2 rounded-full" style={{ width: '100%' }}></div>
            <div className="bg-[#bde288] h-2 rounded-full" style={{ width: '100%' }}></div>
            <div className="bg-gray-200 h-2 rounded-full" style={{ width: '100%' }}></div>
        </div>

        <LogInSignupOptions/>

        <div className='mt-2'>
            <p className='text-center text-sm text-[#686963]'>Already have an account? <button className='font-bold hover:text-gray-700 hover:cursor-pointer'>Log In</button></p>
        </div>
    </div>
  )
}

export default SignupPage