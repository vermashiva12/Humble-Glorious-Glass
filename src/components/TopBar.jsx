import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'

import Logo from '../assets/LogoA.svg'


const TopBar = () => {
  return (
    <div className='flex justify-between  bg-neutral-200 items-center px-4 py-8'>
        <div className='flex items-center max-h-[25px] '>
            <img src={Logo}  alt="Logo" style={{width: '180px' , height: '140px'}} />
            <h1 className='text-2xl font-bold text-black '>Humble Glorious Glass Inc. </h1>

        </div>
        <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
                <AiOutlineClockCircle  size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700 '>9AM -6PM</p>
            </div>
            <div className='hidden md:flex items-center px-6'>
                <AiFillPhone className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700 '>1-236-818-1008</p>

            </div>
            <div className='hidden md:flex items-center px-6'>
                <AiFillPhone className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700 '>1-905-872-3010</p>

            </div>
            <div>
                <button>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default TopBar