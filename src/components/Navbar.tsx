import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-[#FF007F] text-white shadow-lg p-4 flex justify-between items-center z-20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      {/* LOGO */}
      <motion.h1
        className="text-3xl font-extrabold tracking-wide"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        🚀 My Portfolio
      </motion.h1>

      {/* HAMBURGER MENU */}
      <motion.button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        whileTap={{ scale: 0.8, rotate: 180 }}
      >
        ☰
      </motion.button>

      {/* NAV LINKS */}
      <motion.ul
        className={`md:flex gap-6 absolute md:static bg-[#FF007F] w-full md:w-auto left-0 top-16 p-4 md:p-0 shadow-lg md:shadow-none transition-all ${
          menuOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <motion.li
            key={item}
            className="p-2 cursor-pointer hover:text-[#FFD700] transition-all duration-300 text-lg"
            whileHover={{ scale: 1.1 }}
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}
