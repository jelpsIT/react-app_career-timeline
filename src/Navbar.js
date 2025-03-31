import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg font-bold">Portfolio</h2>
        <div className="flex space-x-4">
          <a href="#skills" className="hover:text-blue-300">Skills</a>
          <a href="#career" className="hover:text-blue-300">Career</a>
        </div>
      </div>
      <motion.div
        className="h-1 bg-blue-500"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

export default Navbar;