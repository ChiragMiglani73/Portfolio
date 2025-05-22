import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-10'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-30 mx-auto '/>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>chiragmiglani73@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Chirag Miglani. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0' >
            <li className='hover:text-blue-700 transition-colors duration-300'><a target='_blank' href='https://github.com/ChiragMiglani73'>GitHub</a></li>
            <li className='hover:text-blue-700 transition-colors duration-300'><a target='_blank' href='https://www.linkedin.com/in/chirag-miglani/'>LinkedIn</a></li>
            <li className='hover:text-blue-700 transition-colors duration-300'><a target='_blank' href='https://x.com/ChiragMigl25875'>Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
