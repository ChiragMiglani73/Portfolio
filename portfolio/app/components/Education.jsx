import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const Education = ({ isDarkMode }) => {
  return (
    <motion.div
      id="education"
      className={`${isDarkMode ? 'bg-dark-theme' : 'bg-gray-100 text-white'} font-sans w-full min-h-screen flex flex-col justify-center px-[12%] py-20 scroll-mt-20`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="my-auto py-10"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}

        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h4
          className={`text-center mb-2 text-lg font-ovo ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
  
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Academic Background
        </motion.h4>
        <motion.h2
          className={`text-center text-5xl font-ovo mb-16 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
  
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          My Education
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
  
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* School Card */}
          <motion.div
            className={`${isDarkMode ? 'border-white border-2 hover:shadow-white hover:-translate-y-1 duration-500 bg-dark-theme' : ''} bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-black hover:-translate-y-1 duration-500`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
    
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="w-full h-56 overflow-hidden">
              <Image
                src="/school.png"
                alt="School"
                width={500}
                height={300}
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>
            <div className="p-6">
              <motion.h2
                className={`text-2xl font-semibold mb-2 font-ovo ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
        
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                New Green Field School, New Delhi
              </motion.h2>
              <motion.p
                className={`text-gray-600 mb-1 ${isDarkMode ? 'text-white/70' : 'text-gray-800'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
        
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                10th & 12th Board: CBSE
              </motion.p>
              <motion.p
                className={`text-gray-600 ${isDarkMode ? 'text-white/70' : 'text-gray-800'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
        
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                2023
              </motion.p>
            </div>
          </motion.div>

          {/* College Card */}
          <motion.div
            className={`${isDarkMode ? 'border-white border-2 hover:shadow-white hover:-translate-y-1 duration-500 bg-dark-theme' : ''} bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-black hover:-translate-y-1 duration-500`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
    
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="w-full h-56 overflow-hidden">
              <Image
                src="/college.png"
                alt="College"
                width={500}
                height={300}
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>
            <div className="p-6">
              <motion.h2
                className={`text-2xl font-semibold mb-2 font-ovo ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
        
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                NSUT, Delhi
              </motion.h2>
              <motion.p
                className={`text-gray-600 mb-1 ${isDarkMode ? 'text-white/70' : 'text-gray-800'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
        
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                Degree: B.Tech in Electronics and Communication with AI and ML
              </motion.p>
              <motion.p
                className={`text-gray-600 ${isDarkMode ? 'text-white/70' : 'text-gray-800'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
        
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                2023-2027 (Pursuing)
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Education;