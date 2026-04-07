'use client'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { useGoogleLogin } from '@react-oauth/google';
import { toast } from 'react-toastify';

const LogInSignupOptions = () => {
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try{
                const response = await fetch('http://localhost:5001/api/auth/google', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({token: tokenResponse.access_token})
                })

                if(!response.ok){
                    console.log(response)
                    toast.error('Google authentication failed')
                    return
                }
                const data = await response.json()
                toast.success('Google authentication successful')
            }catch(error){
                toast.error('Google authentication failed')
            }
        }
    })
  return (
    <div className='space-y-2'>
        <button className='border-0 rounded-full p-2 md:p-3 bg-[#f0f3ec] hover:bg-gray-200 w-full flex justify-center gap-2 hover:cursor-pointer'
            onClick={() => login()}
        >
            <FcGoogle className='w-6 h-6'/>
            <span className='text-sm md:text-md font-bold'>Continue with Google</span>
        </button>

        <button className='border-0 rounded-full p-2 md:p-3 bg-[#b0e77f] hover:bg-[#aacf8a] w-full flex justify-center gap-2 hover:cursor-pointer'>
            <FaApple className='w-6 h-6'/>
            <span className='text-sm md:text-md font-bold'>Continue with Apple</span>
        </button>

        <button className='border-0 rounded-full p-2 md:p-3 bg-[#f0f3ec] hover:bg-gray-200 w-full flex justify-center gap-2 hover:cursor-pointer'>
            <VscAccount className='w-6 h-6'/>
            <span className='text-sm md:text-md font-bold'>Continue As Guest</span>
        </button>
    </div>
  )
}

export default LogInSignupOptions