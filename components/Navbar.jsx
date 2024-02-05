import Image from 'next/image';
import React from 'react'
import { FaWallet } from "react-icons/fa";
import dan from '../public/assets/dan.svg'

import { FaBell } from "react-icons/fa";



const Navbar = () => {
  return (
    <div className='navbar-section flex items-center justify-between px-10 gap-10 sm:px-[54px]  h-[110px]'>
        <div className='font-bold cursor-pointer text-[24px] sm:ml-[69px]'><a href="/">aBit</a></div>
        <div className='flex items-center justify-between gap-6'>
          <div className='font-serif text-purple-700 bg-transparent border-purple-700 border-2  rounded-2xl sm:rounded-full px-4 py-2 text-xs font-bold cursor-pointer hidden sm:flex'>Share new video</div>
          <div className='cursor-pointer text-gray-500 sm:text-xl'><FaWallet /></div>
          <div className='text-gray-500 cursor-pointer sm:text-xl'><FaBell /></div>
          <div><Image src={dan} className='rounded-full cursor-pointer w-[25px] sm:w-[32px] border-2 border-black'/></div>
        </div>
    </div>
  )
}

export default Navbar