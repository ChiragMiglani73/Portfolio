'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
  const [isScroll,setIsScroll]=useState(false);
  const sideMenuRef=useRef();
  const openMenu=()=>{
    sideMenuRef.current.style.transform='translate(-16rem)'
  }
  const closeMenu=()=>{
    sideMenuRef.current.style.transform='translateX(16rem)'
  }

  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[])

  console.log("Dark mode state:", isDarkMode); // Debug log

  return (
    <>
<nav
  className={`w-full fixed text-lg px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50
    ${isScroll ? "backdrop-blur-lg shadow-sm" : ""}
    ${isScroll ? (isDarkMode ? "bg-dark-theme" : "bg-white") : ""}
    ${isDarkMode ? "" : "py-4"}
  `}
>
        <a href='#top'>
            <Image src={isDarkMode ? (assets.logo_dark) : assets.logo} className='w-32 cursor-pointer mr-14 text-xl' alt='logo'/>
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-20 dark:border dark:border-white/50 dark:bg-transparent'>
            <li className='font-ovo'> <a href='#top'>Home</a></li>
            <li className='font-ovo'> <a href='#about'>About Me</a></li>
            <li className='font-ovo'> <a href='#education'>Education</a></li>
            <li className='font-ovo'> <a href='#work'>My work</a></li>
            <li className='font-ovo'> <a href='#contact'>Contact me</a></li>
        </ul>
        <div className='flex items-center gap-4'>
          <button onClick={()=> {
            console.log("Toggle button clicked, current state:", isDarkMode); // Debug log
            setIsDarkMode(prev=>!prev);
          }}>
            <Image 
              src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
              className='w-6 cursor-pointer' 
              alt={isDarkMode ? 'light' : 'dark'}
            />
          </button>
          <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo'>
            Contact <Image src={isDarkMode ? assets.arrow_icon_dark || assets.arrow_icon : assets.arrow_icon} className='w-3' alt='arrow'/>
          </a>
          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={isDarkMode ? (assets.menu_white || assets.menu_black) : assets.menu_black} className='w-6' alt='menu'/>
          </button>
        </div>

        {/* Mobile Menu */}
        <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 ${isDarkMode ? 'bg-[#2a004a] text-white' : 'bg-[#fff1f2]'}`}>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white || assets.close_black : assets.close_black} alt='' className='w-5 cursor-pointer'/>
          </div>
          <li className='font-ovo' onClick={closeMenu}> <a href='#top'>Home</a></li>
          <li className='font-ovo' onClick={closeMenu}> <a href='#about'>About Me</a></li>
          <li className='font-ovo' onClick={closeMenu}> <a href='#education'>Education</a></li>
          <li className='font-ovo' onClick={closeMenu}> <a href='#work'>My Projects</a></li>
          <li className='font-ovo' onClick={closeMenu}> <a href='#contact'>Contact me</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar


