import { useState } from 'react';
import { motion } from "framer-motion";

export default function Hero() {
  const [hovered, setHovered] = useState(false);

  // Scroll to project section function
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('section:nth-of-type(3)');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to contact section function
  const scrollToContact = () => {
    const contactSection = document.querySelector('section:nth-of-type(4)');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-black text-gray-200 text-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Animated background elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-purple-500 bg-opacity-10"
          style={{
            width: Math.random() * 100 + 20,
            height: Math.random() * 100 + 20,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 0.8, 1],
            opacity: [0, 0.3, 0.2, 0],
            y: [0, -100],
          }}
          transition={{ 
            duration: Math.random() * 8 + 7,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <motion.div
        className="relative z-10 p-8 rounded-lg bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm border border-gray-700"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Hey, I'm{" "}
          <motion.span
            className="inline-block"
            animate={{ rotate: hovered ? [0, -5, 5, -5, 5, 0] : 0 }}
            transition={{ duration: 0.5 }}
          >
            <span 
              className="text-purple-400 relative"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Likhith
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-1 bg-purple-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </motion.span>{" "}
          <motion.span
            className="inline-block"
            animate={{ 
              rotate: [0, 20, -20, 10, -10, 0],
              scale: [1, 1.2, 1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatDelay: 5
            }}
          >
            💻
          </motion.span>
        </motion.h1>
        
        <motion.p
          className="text-xl mt-4 mb-6 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Welcome to my dark-themed portfolio!
        </motion.p>
        
        <motion.div
          className="flex space-x-4 justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            className="px-6 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
          >
            View Projects
          </motion.button>
          
          <motion.button
            className="px-6 py-3 bg-transparent border-2 border-purple-500 text-purple-400 font-bold rounded-full hover:bg-purple-900 hover:bg-opacity-20 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Animated Dev Emoji on the Right */}
      <motion.div
        className="absolute right-10 bottom-10 text-6xl md:text-7xl"
        animate={{ 
          y: [0, -10, 0], 
          rotate: [0, 5, -5, 0] 
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
      >
        👨‍💻
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          delay: 1.5, 
          duration: 1.5,
          y: {
            repeat: Infinity,
            duration: 1.5
          }
        }}
        onClick={() => {
          const aboutSection = document.querySelector('section:nth-of-type(2)');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <svg 
          className="w-6 h-6 text-purple-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </motion.div>
    </motion.section>
  );
}
