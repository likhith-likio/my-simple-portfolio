import { motion } from "framer-motion";
import { useState } from "react";

// Sample project data - replace with your actual projects
const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive portfolio showcasing my skills and projects with smooth animations and modern design.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    image: "/projects/portfolio.jpg",
    color: "#4FC08D"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Full-stack application for organizing tasks with real-time updates and team collaboration features.",
    tags: ["TypeScript", "Node.js", "Socket.io"],
    image: "/projects/taskapp.jpg",
    color: "#61DAFB"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Feature-rich online store with payment processing, user authentication, and inventory management.",
    tags: ["Vue.js", "Express", "PostgreSQL"],
    image: "/projects/ecommerce.jpg",
    color: "#FF6B6B"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Interactive weather application with location tracking, forecasts, and customizable alerts.",
    tags: ["JavaScript", "REST API", "Chart.js"],
    image: "/projects/weather.jpg",
    color: "#5E72E4"
  },
  {
    id: 5,
    title: "Chat Application",
    description: "Real-time messaging platform with encryption, media sharing, and group conversation features.",
    tags: ["WebRTC", "Firebase", "React"],
    image: "/projects/chat.jpg",
    color: "#FF9F43"
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "Health monitoring tool for tracking workouts, nutrition, and progress with data visualization.",
    tags: ["React Native", "GraphQL", "MongoDB"],
    image: "/projects/fitness.jpg",
    color: "#38B2AC"
  }
];

// Theme options
const themes = [
  {
    name: "Cyberpunk",
    bgGradient: "from-[#5700FF] to-[#FF007F]",
    cardBg: "bg-white",
    textColor: "text-black",
    accentColor: "from-[#FFD700] to-[#FF007F]",
    buttonBg: "bg-[#FF007F]",
    buttonText: "text-white"
  },
  {
    name: "Midnight",
    bgGradient: "from-[#0F2027] to-[#203A43]",
    cardBg: "bg-gray-800",
    textColor: "text-gray-100",
    accentColor: "from-[#3A1C71] to-[#D76D77]",
    buttonBg: "bg-indigo-600",
    buttonText: "text-white"
  },
  {
    name: "Sunset",
    bgGradient: "from-[#FF512F] to-[#DD2476]",
    cardBg: "bg-orange-50",
    textColor: "text-gray-800",
    accentColor: "from-[#FCAF45] to-[#FF512F]",
    buttonBg: "bg-orange-500",
    buttonText: "text-white"
  },
  {
    name: "Nature",
    bgGradient: "from-[#134E5E] to-[#71B280]",
    cardBg: "bg-green-50",
    textColor: "text-gray-800",
    accentColor: "from-[#2E7D32] to-[#81C784]",
    buttonBg: "bg-green-600",
    buttonText: "text-white"
  }
];

export default function Projects() {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const theme = themes[currentTheme];
  
  const cycleTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };
  
  const showMoreProjects = () => {
    setVisibleProjects(projectsData.length);
  };
  
  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.section
      id="projects"
      className={`min-h-screen flex flex-col justify-center items-center px-8 py-16 text-center bg-gradient-to-b ${theme.bgGradient} text-white relative`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Theme Switcher */}
      <motion.button
        className="absolute top-8 right-8 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-opacity-30 transition-all"
        onClick={cycleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Theme: {theme.name}
      </motion.button>

      {/* TITLE */}
      <motion.div className="mb-16">
        <motion.h2
          className="text-5xl font-extrabold mb-4"
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ duration: 0.3 }}
        >
          🚀 My Projects  
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-white mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      {/* PROJECT GRID */}
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsData.slice(0, visibleProjects).map((project) => (
          <motion.div
            key={project.id}
            className={`relative ${theme.cardBg} ${theme.textColor} p-8 rounded-2xl shadow-xl overflow-hidden cursor-pointer`}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
          >
            {/* PROJECT IMAGE (Placeholder) */}
            <motion.div 
              className="h-48 -mx-8 -mt-8 mb-6 bg-gray-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <div 
                className="w-full h-full"
                style={{ 
                  background: `linear-gradient(135deg, ${project.color}80, ${project.color})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span className="text-5xl opacity-30">📱</span>
              </div>
            </motion.div>

            {/* ANIMATED BACKGROUND */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${theme.accentColor} opacity-0`}
              whileHover={{ opacity: 0.15 }}
              transition={{ duration: 0.5 }}
            />

            {/* PROJECT CONTENT */}
            <h3 className="text-2xl font-bold relative mb-3">{project.title}</h3>
            <p className={`${theme.textColor === 'text-black' ? 'text-gray-700' : 'text-gray-300'} mt-2 relative text-sm mb-4`}>
              {project.description}
            </p>
            
            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 text-xs rounded-full bg-opacity-20"
                  style={{ 
                    backgroundColor: `${project.color}30`,
                    border: `1px solid ${project.color}60`
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: project.color,
                    color: '#fff'
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* SHOW MORE/LESS BUTTON */}
      {projectsData.length > 3 && (
        <motion.button
          className={`mt-12 ${theme.buttonBg} ${theme.buttonText} px-8 py-3 rounded-full font-bold shadow-lg`}
          onClick={visibleProjects === 3 ? showMoreProjects : showLessProjects}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {visibleProjects === 3 ? "Show More Projects" : "Show Less"}
        </motion.button>
      )}
    </motion.section>
  );
}