import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

const Contact = ({isDarkMode}) => {
    const [result, setResult]=useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "397c40e7-126e-4507-9d04-a0b639439e76");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
     id='contact' className={`w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] ${isDarkMode ? 'bg-none' : ''}`}>
      <motion.h4
       initial={{y:-20,opacity:0}}
       whileInView={{y:0,opacity:1}}
       transition={{duration:0.5,delay:0.1}}
       className='text-center mb-2 text-lg font-ovo'>Contact with me</motion.h4>
      <motion.h2
       initial={{y:-20,opacity:0}}
       whileInView={{y:0,opacity:1}}
       transition={{duration:0.5,delay:0.3}}
       className='text-center text-5xl font-ovo'>Get in touch</motion.h2>
      <motion.p 
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={{duration:0.5,delay:0.5}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below</motion.p>

      <motion.form
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={{duration:0.5,delay:0.7}}
       onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
            <motion.input
             initial={{x:-50,opacity:0}}
             whileInView={{x:0,opacity:1}}
             transition={{duration:0.6,delay:0.8}}
             type='text' placeholder='Enter your name' required className={`p-3 outline-none border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-700 transition-colors duration-300 ${isDarkMode ? 'bg-[#2a004a]/30 border-white/90 ' : 'bg-white'}`} name='name'/>
            <motion.input
             initial={{x:50,opacity:0}}
             whileInView={{x:0,opacity:1}}
             transition={{duration:0.6,delay:0.9}}
             type='email' placeholder='Enter your email' required className={`p-3 outline-none border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-700 transition-colors duration-300 ${isDarkMode ? 'bg-[#2a004a]/30 border-white/90 ' : 'bg-white'}`} name='email'/>
        </div>
        <motion.textarea
         initial={{y:100,opacity:0}}
         whileInView={{y:0,opacity:1}}
         transition={{duration:0.6,delay:1}}
         rows='6' placeholder='Enter your message' required className={`w-full p-4 outline-none border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-700 transition-colors duration-300 ${isDarkMode ? 'bg-[#2a004a]/30 border-white/90 ' : 'bg-white'}`} name='message'></motion.textarea>
        <motion.button
         whileHover={{scale:1.05}}
         transition={{duration:0.3}}
         type='submit' className={`py-3 px-8 mt-4 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto cursor-pointer ${isDarkMode ? 'bg-transparent border-[0.5px] hover:bg-[#2a004a] duration-500' : ' hover:bg-black duration-500'}`}>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>
        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
