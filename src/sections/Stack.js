import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { animate, stagger } from "animejs";
import js from "assets/icons/js.svg";
import react from "assets/icons/react.svg";
import tailwind from "assets/icons/tailwind.svg";
import github from "assets/icons/git.svg";
import nextDark from "assets/icons/next-dark.svg";
import nextLight from "assets/images/next-light.png";
import c from "assets/images/c-sharp.png";
import { ThemeContext } from "theme/index";

const techStack = [
  {
    name: "JavaScript",
    icon: js,
    color: "#F7DF1E",
    description: "Dynamic scripting",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    color: "#3178C6",
    description: "Type-safe code",
  },
  {
    name: "React",
    icon: react,
    color: "#61DAFB",
    description: "UI components",
  },
  {
    name: "Next.js",
    icon: null, // Will be set dynamically
    color: "#ffffff",
    description: "Full-stack React",
  },
  {
    name: "Tailwind",
    icon: tailwind,
    color: "#06B6D4",
    description: "Utility CSS",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    color: "#339933",
    description: "Server runtime",
  },
  {
    name: "C#",
    icon: c,
    color: "#512BD4",
    description: ".NET development",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    color: "#47A248",
    description: "NoSQL database",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    color: "#FF9900",
    description: "Cloud services",
  },
  {
    name: "Git",
    icon: github,
    color: "#F05032",
    description: "Version control",
  },
];

const Stack = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            // Animate section title
            animate(".stack-title", {
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              ease: "outExpo",
            });

            // Animate subtitle
            animate(".stack-subtitle", {
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 600,
              delay: 200,
              ease: "outExpo",
            });

            // Animate tech icons with stagger
            animate(".tech-item", {
              opacity: [0, 1],
              scale: [0.5, 1],
              translateY: [40, 0],
              duration: 600,
              delay: stagger(80, { start: 400 }),
              ease: "outBack",
            });

            // Add floating animation after entrance
            setTimeout(() => {
              animate(".tech-item", {
                translateY: [0, -8, 0],
                duration: 2000,
                delay: stagger(200),
                loop: true,
                ease: "inOutSine",
              });
            }, 1500);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative">
      {/* Section header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="stack-title section-title" style={{ opacity: 0 }}>
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <p
          className="stack-subtitle section-subtitle mx-auto"
          style={{ opacity: 0 }}
        >
          Technologies I've been working with to build modern, scalable
          applications
        </p>
      </div>

      {/* Tech grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {techStack.map((tech, index) => (
          <TechCard
            key={tech.name}
            tech={tech}
            isDarkMode={isDarkMode}
            nextDark={nextDark}
            nextLight={nextLight}
            index={index}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-teal-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-40 h-40 bg-teal-primary/5 rounded-full blur-3xl -translate-y-1/2" />
    </section>
  );
};

const TechCard = ({ tech, isDarkMode, nextDark, nextLight, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const getIcon = () => {
    if (tech.name === "Next.js") {
      return isDarkMode ? nextLight : nextDark;
    }
    return tech.icon;
  };

  return (
    <div
      ref={cardRef}
      className="tech-item group"
      style={{ opacity: 0 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="glass-card p-6 text-center transition-all duration-300 cursor-pointer relative overflow-hidden"
        style={{
          "--glow-color": tech.color,
        }}
      >
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${tech.color}15, transparent 70%)`,
          }}
        />

        <div className="relative z-10">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <img
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              src={getIcon()}
              alt={tech.name}
            />
          </div>
          <h3 className="font-semibold text-sm mb-1">{tech.name}</h3>
          <p className="text-xs text-midnight-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tech.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stack;
