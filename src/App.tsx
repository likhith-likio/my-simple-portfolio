import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray("section");

    sections.forEach((section: any) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1.2, // Smooth slow-to-fast scroll effect
          snap: 1, // Auto-snaps to the closest section
        },
      });
    });
  }, []);

  return (
    <div className=" bg-gray-100 text-gray-900">
      <Navbar />
      
      {/* Scroll Container */}
      <div ref={containerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <section className="h-screen snap-start"><Hero /></section>
        <section className="h-screen snap-start"><About /></section>
        <section className="h-screen snap-start"><Projects /></section>
        <section className="h-screen snap-start"><Contact /></section>
      </div>
    </div>
  );
}

export default App;
