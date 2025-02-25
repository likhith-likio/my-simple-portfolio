import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#007FFF] to-[#FFD700] text-white text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.h1
        className="text-6xl font-extrabold"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Hey, I’m <span className="text-[#00FFFF]">Likhith</span> 🚀
      </motion.h1>
      <motion.p
        className="text-xl mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Welcome to my crazy, animated portfolio!
      </motion.p>
    </motion.section>
  );
}
