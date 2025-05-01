import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PreLoader = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const companyName = "Media Swift";
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(timer);
          
          setTimeout(() => {
            setIsComplete(true);
          }, 500);
          
          return 100;
        }
        return newProgress;
      });
    }, 30);
    
    return () => clearInterval(timer);
  }, []);

  const letters = companyName.split('');
  
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
      style={{
        pointerEvents: isComplete ? "none" : "all"
      }}
    >
      <motion.div 
        className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-blue-100 opacity-30" 
        initial={{ scale: 0 }}
        animate={{ 
          scale: [0, 1.2, 1],
          opacity: [0, 0.3, 0.2]
        }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-1/3 w-1/3 h-1/3 rounded-full bg-amber-100 opacity-30" 
        initial={{ scale: 0 }}
        animate={{ 
          scale: [0, 1.3, 1],
          opacity: [0, 0.4, 0.2]
        }}
        transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
      />
      
     
      <motion.div 
        className="mb-8 relative"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-600 to-yellow-500 flex items-center justify-center shadow-lg">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: progress * 3.6 }}
            transition={{ duration: 3, ease: "linear" }}
            className="w-16 h-16 rounded-full bg-white flex items-center justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-green-600 to-yellow-500"></div>
          </motion.div>
        </div>
      </motion.div>
     
      <div className="flex justify-center mb-8">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.5 + index * 0.08,
              ease: "easeOut"
            }}
            className="text-4xl md:text-5xl font-bold inline-block mx-1"
            style={{
              color: index < 5 ? '#16a34a' : '#eab308',
              marginRight: letter === ' ' ? '12px' : '0px',
              fontFamily: "'Montserrat', sans-serif"
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
 
      <div className="w-64 md:w-80 h-1 bg-gray-100 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-gradient-to-r from-green-500  to-amber-500 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
      
 
      <motion.p 
        className="mt-4 text-gray-500 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {progress}%
      </motion.p>
      

    </motion.div>
  );
};

export default PreLoader;