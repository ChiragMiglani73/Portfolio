import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Projects = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="mt-10 w-full flex flex-col justify-center items-center px-4 sm:px-[12%] py-5 scroll-mt-30"
    >
      <div className="w-full max-w-7xl">
        {/* Section Title */}
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-1 text-lg font-ovo"
        >
          My Portfolio
        </motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl font-ovo"
        >
          My Latest Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-16 font-ovo"
        >
          Welcome to my portfolio! Explore a collection of projects showcasing
          my expertise in web development.
        </motion.p>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-10 mb-16">
          {workData.map((project, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={index}
              className={`w-[250px] h-[250px] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group border-2 border-gray-300 hover:border-black hover:shadow-black duration-500 ${
                isDarkMode
                  ? 'border-white/60 hover:border-white hover:shadow-white hover:-translate-y-1'
                  : ''
              }`}
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-4 flex items-center justify-between duration-500 group-hover:bottom-7 border border-gray-200">
                <div>
                  <h2
                    className={`font-semibold text-base ${
                      isDarkMode ? 'text-black' : ''
                    }`}
                  >
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                  <Image
                    src={assets.send_icon}
                    alt="send_icon"
                    className="w-5"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;