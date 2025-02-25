import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full text-white shadow-lg p-4 flex justify-between items-center z-20 transition-all duration-300 ${
    scrolled ? "bg-[#FF007F] shadow-xl" : "bg-transparent"
  }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      {/* LOGO */}
      <motion.h1
        className="text-3xl font-extrabold tracking-wide cursor-pointer"
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
        {menuOpen ? "✖" : "☰"}
      </motion.button>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-6">
        {['Home', 'About', 'Projects', 'Contact'].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-lg cursor-pointer hover:text-[#FFD700] transition-all duration-300 relative"
            whileHover={{ scale: 1.1 }}
          >
            {item}
            <motion.div
              className="h-[2px] bg-[#FFD700] w-0 absolute bottom-0 left-0"
              animate={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-[#FF007F] flex flex-col items-center justify-center text-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="py-3 hover:text-[#FFD700]"
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
