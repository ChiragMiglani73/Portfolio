import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import {motion} from "motion/react"


const About = ({ isDarkMode }) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity:0}}
     whileInView={{opacity:1}}
     ransition={{duration:1}}>

      <motion.h4 className='text-center mb-2 text-lg font-ovo'
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5,delay:0.3}}
      >Introduction</motion.h4>

      <motion.h2 className='text-center text-5xl font-ovo'
      initial={{y:30,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5,delay:0.5}}
      >About Me</motion.h2>

      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.8}}
       className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <motion.div
        initial={{opacity:0,scale:0.9}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.6}}
         className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.profile_img} alt='user' className='w-full rounded-3xl'/>
        </motion.div>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:0.8}}
         className='flex-1'>
            <p className='mb-10 max-w-2xl font-ovo'>
            I am a passionate web developer with experience in making various projects using HTML, CSS, JavaScript, React Js, Next Js, and other related technologies. I have a strong foundation in front-end development and am constantly expanding my knowledge to stay up-to-date with the latest trends and best practices.
            </p>
            <motion.ul
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.8,delay:1}}
             className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon,iconDark,title,description},index)=>(
                    <motion.li
                 whileInView={{scale:1.05}}
                     className={`border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer  hover:shadow-black hover:-translate-y-1 duration-500 ${isDarkMode ? 'hover:bg-[#2a004a] hover:shadow-white hover:-translate-y-1 border-white' : 'hover:bg-gray-100'}`} key={index}>
                        <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                        <h3 className={`my-4 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{title}</h3>
                        <p className={`text-gray-600 text-sm ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>{description}</p>
                    </motion.li>
                ))}
            </motion.ul>
            <motion.h4
            initial={{y:20,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.5,delay:1.3}}
             className={`my-6 text-gray-700 font-ovo ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Tools I use</motion.h4>
            <motion.ul
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6,delay:1.5}}
             className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool,index)=>(
                    <motion.li
                    whileHover={{scale:1.1}}
                     className={`flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ${isDarkMode ? 'bg-white' : ''}`} key={index}>
                        <Image src={tool} alt='tool' className={`w-5 sm:w-7 ${isDarkMode ? '' : ''}`}/>
                    </motion.li>
                ))}
            </motion.ul>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
