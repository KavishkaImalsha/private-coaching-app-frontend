import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

const LogInSignupOptions = () => {
  return (
    <div className='space-y-2'>
        <button className='border-0 rounded-full p-2 md:p-3 bg-[#f0f3ec] hover:bg-gray-200 w-full flex justify-center gap-2 hover:cursor-pointer'>
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