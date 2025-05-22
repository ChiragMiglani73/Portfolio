'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Debug log
  useEffect(() => {
    console.log("isDarkMode changed to:", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    // Always default to light mode unless explicitly set to dark
    if (localStorage.theme === 'dark') {
      setIsDarkMode(true);
    } else {
      // Clear any theme value and force light mode
      localStorage.removeItem('theme');
      setIsDarkMode(false);
    }
  }, []);

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.theme = '';
    }
  },[isDarkMode])

  return (
   <> 
   <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
   <Header isDarkMode={isDarkMode}/>
   <About  isDarkMode={isDarkMode}/>
   <Education  isDarkMode={isDarkMode}/>
   <Project  isDarkMode={isDarkMode} />
   <Contact  isDarkMode={isDarkMode}/>
   <Footer  isDarkMode={isDarkMode}/>
   </>
  );
}
