import React from 'react';
import Timeline from './Timeline';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.h1
        className="text-6xl font-extrabold text-center pt-12 pb-8 tracking-tight text-indigo-300"
        style={{ fontFamily: "'Poppins', sans-serif" }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
      >
        Josh Dobson
      </motion.h1>
      <Timeline />
    </div>
  );
}

export default App;