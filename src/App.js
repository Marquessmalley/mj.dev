import { useState, useEffect } from "react";
import { ThemeContext } from "theme/index";
import Navbar from "components/navbar/Navbar";
import Home from "sections/Home";
import Stack from "sections/Stack";
import Projects from "sections/Projects";
import Blogs from "sections/Blogs";
import Contact from "sections/Contact";
import { animate, random } from "animejs";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    // Page load animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Animate page entrance
      animate(".page-content", {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        ease: "outCubic",
      });
    }
  }, [isLoading]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div
        className={`min-h-screen transition-colors duration-500 ${
          isDarkMode
            ? "gradient-bg grid-pattern noise-overlay"
            : "light-mode bg-gradient-to-br from-slate-50 via-white to-teal-50/30"
        }`}
      >
        <Navbar />

        {/* Floating particles effect */}
        <FloatingParticles />

        <main
          className={`page-content relative z-10 ${
            isLoading ? "opacity-0" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Home />
            <Stack />
            <Projects />
            <Blogs />
            <Contact />
          </div>

          {/* Footer */}
          <footer className="footer mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-sm">
                © {new Date().getFullYear()} Marques Smalley. Crafted with
                passion.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

// Floating particles component
function FloatingParticles() {
  useEffect(() => {
    const container = document.querySelector(".particles-container");
    if (!container) return;

    // Create floating particles
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(0, 212, 170, ${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        pointer-events: none;
      `;
      container.appendChild(particle);
    }

    // Animate particles
    animate(".particle", {
      translateY: () => random(-100, 100),
      translateX: () => random(-50, 50),
      scale: () => random(0.5, 1.5),
      opacity: () => random(0.1, 0.4),
      duration: () => random(3000, 5000),
      delay: () => random(0, 1000),
      alternate: true,
      loop: true,
      ease: "inOutSine",
    });

    return () => {
      const particles = container.querySelectorAll(".particle");
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div
      className="particles-container fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
