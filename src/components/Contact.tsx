import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaDribbble } from "react-icons/fa";

// Updated darker themes
const themes = [
  {
    name: "Dark Cyberpunk",
    bgGradient: "from-[#0A001F] to-[#220033]",
    textColor: "text-gray-200",
    formBg: "bg-black bg-opacity-40",
    inputBg: "bg-black bg-opacity-70",
    buttonGradient: "from-[#7B0057] to-[#270033]",
    borderColor: "border-purple-900"
  },
  {
    name: "Abyss",
    bgGradient: "from-[#000C14] to-[#0A1A24]",
    textColor: "text-gray-300",
    formBg: "bg-gray-900 bg-opacity-70",
    inputBg: "bg-gray-900 bg-opacity-80",
    buttonGradient: "from-gray-800 to-gray-700",
    borderColor: "border-gray-800"
  },
  {
    name: "Ember",
    bgGradient: "from-[#190000] to-[#330F0F]",
    textColor: "text-gray-200",
    formBg: "bg-black bg-opacity-50",
    inputBg: "bg-black bg-opacity-70",
    buttonGradient: "from-red-900 to-red-800",
    borderColor: "border-red-900"
  },
  {
    name: "Woodland",
    bgGradient: "from-[#0C1F14] to-[#0A1A0F]",
    textColor: "text-gray-300",
    formBg: "bg-black bg-opacity-40",
    inputBg: "bg-black bg-opacity-60",
    buttonGradient: "from-green-900 to-emerald-800",
    borderColor: "border-green-900"
  }
];

export default function Contact() {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const theme = themes[currentTheme];
  
  const cycleTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          message: ""
        });
      }, 3000);
    }, 1500);
  };

  // Social links with darker colors
  const socialLinks = [
    { icon: FaGithub, link: "https://github.com", color: "#111111", label: "GitHub" },
    { icon: FaLinkedin, link: "https://linkedin.com", color: "#0A4882", label: "LinkedIn" },
    { icon: FaTwitter, link: "https://twitter.com", color: "#0A5585", label: "Twitter" },
    { icon: FaDribbble, link: "https://dribbble.com", color: "#93274F", label: "Dribbble" },
    { icon: FaEnvelope, link: "mailto:example@example.com", color: "#7D2919", label: "Email" },
  ];

  return (
    <motion.section
      id="contact"
      className={`min-h-screen flex flex-col justify-center items-center px-8 py-16 text-center bg-gradient-to-b ${theme.bgGradient} ${theme.textColor} relative`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Theme Switcher */}
      <motion.button
        className="absolute top-8 right-8 bg-black bg-opacity-40 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-opacity-60 transition-all"
        onClick={cycleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Theme: {theme.name}
      </motion.button>
      
      <div className="max-w-4xl w-full">
        {/* Section Header */}
        <motion.div className="mb-16">
          <motion.h2
            className="text-5xl font-extrabold mb-4"
            whileHover={{ scale: 1.1, rotate: -2 }}
            transition={{ duration: 0.3 }}
          >
            📬 Contact Me
          </motion.h2>
          <motion.div 
            className="w-28 h-1 bg-gray-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 112 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="mt-6 text-xl max-w-lg mx-auto opacity-70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Feel free to reach out for collaborations, questions, or just to say hello!
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.form 
              onSubmit={handleSubmit}
              className={`${theme.formBg} backdrop-blur-sm p-8 rounded-2xl shadow-xl text-left ${theme.borderColor} border border-opacity-20`}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Send a Message</h3>
              
              {isSubmitted ? (
                <motion.div 
                  className="py-8 text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <div className="text-5xl mb-4">✨</div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p>Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 opacity-80">Your Name</label>
                    <motion.input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg ${theme.inputBg} backdrop-blur-sm border ${theme.borderColor} border-opacity-20 focus:border-opacity-40 outline-none text-gray-200 placeholder-gray-400 placeholder-opacity-50`}
                      placeholder="John Doe"
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 opacity-80">Your Email</label>
                    <motion.input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg ${theme.inputBg} backdrop-blur-sm border ${theme.borderColor} border-opacity-20 focus:border-opacity-40 outline-none text-gray-200 placeholder-gray-400 placeholder-opacity-50`}
                      placeholder="john@example.com"
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 opacity-80">Message</label>
                    <motion.textarea
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg ${theme.inputBg} backdrop-blur-sm border ${theme.borderColor} border-opacity-20 focus:border-opacity-40 outline-none text-gray-200 placeholder-gray-400 placeholder-opacity-50`}
                      placeholder="Hi there! I'd like to talk about..."
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg bg-gradient-to-r ${theme.buttonGradient} text-gray-200 font-medium shadow-lg`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : "Send Message"}
                  </motion.button>
                </>
              )}
            </motion.form>
          </motion.div>
          
          {/* Social Links & Info */}
          <motion.div
            className="text-center md:text-left"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8">Connect With Me</h3>
            
            {/* Location & Contact Info */}
            <motion.div 
              className={`${theme.formBg} backdrop-blur-sm rounded-xl p-6 mb-8 border ${theme.borderColor} border-opacity-20`}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col space-y-4">
                <div>
                  <h4 className="text-lg font-semibold">Location</h4>
                  <p className="opacity-70">San Francisco, California</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="opacity-70">hello@example.com</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Working Hours</h4>
                  <p className="opacity-70">Mon - Fri: 9AM - 6PM</p>
                </div>
              </div>
            </motion.div>
            
            {/* Social Icons */}
            <div>
              <h3 className="text-xl font-bold mb-4">Find Me On</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {socialLinks.map(({ icon: Icon, link, color, label }, index) => (
                  <motion.a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-lg text-2xl shadow-lg flex items-center backdrop-blur-sm bg-black bg-opacity-30`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index + 0.5 }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: color,
                      color: "white",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Icon />
                    <span className="ml-2 text-sm font-medium hidden md:inline">{label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}