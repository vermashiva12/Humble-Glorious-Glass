import React from 'react'
import Logo from '../assets/LogoA.svg'

const Footer = () => {
  return (
    <div className='w-full h-[120px] justify-between items-start px-4 bg-gray-800/90 text-gray-100'>
        
     
            <img src={Logo} alt='Logo' style={{width: '20px'}} />
        
            <p className=' py-6 text-right text-[11px]'>Copyright @ 2023 Humble Glorious Glass. Rights Reserved </p>
            <p className='text-right  text-[9px]'>Desgined by Shivanshu </p>
        
    </div>
  )
}

export default Footer