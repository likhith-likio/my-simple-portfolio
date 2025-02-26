import { motion } from "framer-motion";
import { useState } from "react";

// Import technology logos (Assuming you have them as local assets or use URLs)
const techLogos = [
  { name: "Vue.js", src: "/logos/vue.png", color: "#42b883" },
  { name: "React.js", src: "/logos/react.png", color: "#61dafb" },
  { name: "Tailwind", src: "/logos/tailwind.png", color: "#38b2ac" },
  { name: "Bootstrap", src: "/logos/bootstrap.png", color: "#7952b3" },
  { name: "WebRTC", src: "/logos/webrtc.png", color: "#f16529" },
  { name: "Socket.io", src: "/logos/socketio.png", color: "#010101" },
  { name: "Laravel", src: "/logos/laravel.png", color: "#ff2d20" },
  { name: "Express.js", src: "/logos/express.png", color: "#000000" },
  { name: "MySQL", src: "/logos/mysql.png", color: "#4479A1" },
  { name: "PostgreSQL", src: "/logos/postgresql.png", color: "#336791" },
  { name: "Linux", src: "/logos/linux.png", color: "#FCC624" },
  { name: "JWT", src: "/logos/jwt.png", color: "#d63aff" },
  { name: "Java", src: "/logos/java.png", color: "#007396" },
  { name: "JavaScript", src: "/logos/js.png", color: "#F7DF1E" },
  { name: "HTML", src: "/logos/html.png", color: "#E34F26" },
  { name: "CSS", src: "/logos/css.png", color: "#1572B6" },
  { name: "TypeScript", src: "/logos/ts.png", color: "#3178c6" },
  { name: "Node JS", src: "/logos/nodejs.png", color: "#339933" },
  { name: "GitHub", src: "/logos/github.png", color: "#181717" },
  { name: "Git", src: "/logos/git.png", color: "#F05032" },
];

// Theme options (updated with dark theme as first option)
const themes = [
  {
    name: "Dark Mode",
    bgGradient: "from-gray-900 to-black",
    textColor: "text-gray-200",
    accentColor: "text-purple-400",
    borderColor: "border-gray-700",
    logoBg: "bg-gray-800"
  },
  {
    name: "Midnight",
    bgGradient: "from-indigo-900 to-purple-900",
    textColor: "text-gray-100",
    accentColor: "text-indigo-300",
    borderColor: "border-indigo-700",
    logoBg: "bg-indigo-900"
  },
  {
    name: "Hacker",
    bgGradient: "from-gray-900 to-green-900",
    textColor: "text-green-400",
    accentColor: "text-gray-300",
    borderColor: "border-green-700",
    logoBg: "bg-gray-900"
  },
  {
    name: "Obsidian",
    bgGradient: "from-gray-900 to-gray-800",
    textColor: "text-gray-300",
    accentColor: "text-blue-400",
    borderColor: "border-gray-600",
    logoBg: "bg-gray-800"
  },
  {
    name: "Deep Ocean",
    bgGradient: "from-blue-900 to-gray-900",
    textColor: "text-blue-100",
    accentColor: "text-blue-300",
    borderColor: "border-blue-800",
    logoBg: "bg-blue-900"
  }
];

export default function About() {
  const [currentTheme, setCurrentTheme] = useState(0);
  const theme = themes[currentTheme];
  
  const cycleTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  return (
    <motion.section
      id="about"
      className={`min-h-screen flex flex-col justify-center items-center px-8 text-center bg-gradient-to-b ${theme.bgGradient} ${theme.textColor} relative`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Theme Switcher */}
      <motion.button
        className="absolute top-8 right-8 bg-gray-800 bg-opacity-60 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-opacity-80 transition-all"
        onClick={cycleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Theme: {theme.name}
      </motion.button>

      {/* TITLE */}
      <motion.h2
        className="text-5xl font-extrabold mb-6"
        whileHover={{ scale: 1.1, rotate: 3 }}
      >
        About Me 💻
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
  className={`text-xl max-w-3xl mx-auto ${theme.accentColor} leading-relaxed mb-12`}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  I'm a passionate <strong>full-stack developer</strong> with expertise in <strong>React</strong>, <strong>Vue</strong>, 
  <strong> Node.js</strong>, and <strong>Laravel</strong>. I create <strong>real-time applications</strong> using 
  <strong> WebRTC</strong> and <strong>Socket.io</strong>, style with <strong>Tailwind</strong> and <strong>Bootstrap</strong>, 
  and manage data with <strong>MySQL</strong> and <strong>PostgreSQL</strong>. From <strong>TypeScript</strong> to 
  <strong> Java</strong>, I build <strong>responsive</strong>, <strong>secure</strong>, and <strong>scalable</strong> solutions. ✨💻
</motion.p>

      {/* SKILLS SECTION */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4">My Tech Stack</h3>
        <div className="w-20 h-1 bg-purple-500 mx-auto mb-8 rounded-full"></div>
      </motion.div>

      {/* TECHNOLOGY LOGOS */}
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
        {techLogos.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <motion.div
              className={`w-16 h-16 rounded-lg shadow-lg ${theme.borderColor} border-2 ${theme.logoBg} p-2 flex items-center justify-center overflow-hidden`}
              whileHover={{ 
                scale: 1.15, 
                boxShadow: `0 0 15px ${tech.color}`,
                borderColor: tech.color 
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{ 
                y: { 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: index * 0.1 % 1.5 
                }
              }}
            >
              <img src={tech.src} alt={tech.name} className="max-w-full max-h-full object-contain" />
            </motion.div>
            <motion.span 
              className="text-xs mt-2 opacity-80 font-medium"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              animate={{ opacity: 0.7 }}
            >
              {tech.name}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}