import Image from 'next/image'
import { assets } from '@/assets/assets'
import React from 'react'
import { motion } from "motion/react"

const Header = ({ isDarkMode }) => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{duration:0.8,type:"spring",stiffness:100}}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32 h-32'/>
      </motion.div>
      <motion.h3
       initial={{y:-20,opacity:0}}
       whileInView={{y:0,opacity:1}}
       transition={{duration:0.6,delay:0.3}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>Hi! I'm Chirag Miglani <Image src={assets.hand_icon} alt='' className='w-6'/> </motion.h3>

      <motion.h1
       initial={{y:-30,opacity:0}}
       whileInView={{y:0,opacity:1}}
       transition={{duration:0.8,delay:0.5}}
       className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>Full stack developer from India</motion.h1>
      <motion.p
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={{duration:0.6,delay:0.7}}
       className='max-w-2xl mx-auto font-ovo'>
       I am a full stack developer from Delhi, India, currently pursuing a B.Tech at Netaji Subhas University of Technology (NSUT)
      </motion.p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a
         initial={{y:30,opacity:0}}
         whileInView={{y:0,opacity:1}}
         transition={{duration:0.6,delay:1}}
         href='#contact' className={`px-10 py-3 border rounded-full flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isDarkMode ? 'border-white bg-transparent text-white hover:bg-white/10 hover:shadow-white/20' : 'border-white bg-black text-white hover:bg-black/90 hover:shadow-black/20'}`}>
          contact me <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_white} alt='' className='w-4'/>
        </motion.a>
        <motion.a
        initial={{y:30,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.6,delay:1.2}}
         href='/Chirag-Resume.pdf' download className={`px-10 py-3 border rounded-full flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isDarkMode ? 'border-white text-black bg-white hover:bg-white/90 hover:shadow-white/20' : 'border-gray-500 bg-white hover:bg-gray-50 hover:shadow-black/20'}`}>
          My resume <Image src={isDarkMode ? assets.download_icon : assets.download_icon} alt='' className='w-4'/>
        </motion.a>
      </div>
    </div>
  )
}

export default Header
