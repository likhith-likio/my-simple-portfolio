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
      className={`fixed top-0 left-0 w-full text-white shadow-lg p-4 flex justify-between items-center z-30 transition-all duration-300 ${
        scrolled ? "bg-[#220033] shadow-xl" : "bg-black bg-opacity-40 backdrop-blur-md"
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
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        whileTap={{ scale: 0.8, rotate: 180 }}
      >
        {menuOpen ? "✖" : "☰"}
      </motion.button>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-8">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-lg cursor-pointer relative transition-all duration-300 hover:text-[#FF007F]"
            whileHover={{ scale: 1.1 }}
          >
            {item}
            <motion.div
              className="h-[2px] bg-[#FF007F] w-0 absolute bottom-0 left-0"
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
            className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#0A001F] to-[#220033] flex flex-col items-center justify-center text-2xl z-40"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="py-4 text-white text-2xl tracking-wide hover:text-[#FF007F] transition-all duration-300"
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
