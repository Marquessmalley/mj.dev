import React, { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";

const Home = () => {
  const heroRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const timeline = createTimeline({
      defaults: { ease: "outExpo" },
    });

    // Animate the greeting
    timeline.add(".hero-greeting", {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
    });

    // Animate name letters
    timeline.add(
      ".hero-name .letter",
      {
        opacity: [0, 1],
        translateY: [50, 0],
        rotateX: [-90, 0],
        duration: 800,
        delay: stagger(40),
      },
      "-=400"
    );

    // Animate the title
    timeline.add(
      ".hero-title",
      {
        opacity: [0, 1],
        translateX: [-30, 0],
        duration: 600,
      },
      "-=400"
    );

    // Animate description
    timeline.add(
      ".hero-description",
      {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
      },
      "-=300"
    );

    // Animate buttons
    timeline.add(
      ".hero-buttons .btn",
      {
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.9, 1],
        duration: 500,
        delay: stagger(100),
      },
      "-=300"
    );

    // Animate the decorative elements
    timeline.add(
      ".hero-decoration",
      {
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 1000,
      },
      "-=600"
    );

    // Animate code snippets
    timeline.add(
      ".code-line",
      {
        opacity: [0, 1],
        translateX: [20, 0],
        duration: 400,
        delay: stagger(100),
      },
      "-=800"
    );
  }, []);

  // Split name into letters for animation
  const name = "Marques Smalley";
  const nameLetters = name.split("").map((letter, i) => (
    <span key={i} className="letter inline-block" style={{ opacity: 0 }}>
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));

  return (
    <section
      ref={heroRef}
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="hero-decoration absolute top-1/4 right-1/4 w-72 h-72 bg-teal-primary/5 rounded-full blur-3xl"
          style={{ opacity: 0 }}
        />
        <div
          className="hero-decoration absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-primary/3 rounded-full blur-3xl"
          style={{ opacity: 0 }}
        />
      </div>

      <div className="relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Greeting badge */}
            <div
              className="hero-greeting inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-primary/30 bg-teal-primary/5"
              style={{ opacity: 0 }}
            >
              <span className="text-2xl">👋🏾</span>
              <span className="text-teal-primary font-medium">
                Welcome to my portfolio
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-2">
              <p
                className="hero-title text-lg text-midnight-400 dark:text-midnight-300 font-mono"
                style={{ opacity: 0 }}
              >
                &lt;SoftwareEngineer /&gt;
              </p>
              <h1 className="hero-name text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                {nameLetters}
              </h1>
            </div>

            {/* Description */}
            <p
              className="hero-description text-xl text-midnight-400 dark:text-midnight-300 max-w-lg leading-relaxed"
              style={{ opacity: 0 }}
            >
              I transform complex problems into elegant, user-centric solutions.
              From concept to deployment, I build performant applications that
              drive business growth and deliver measurable results.
            </p>

            {/* Buttons */}
            <div className="hero-buttons flex flex-wrap gap-4">
              <a
                href="/MarquesSmalley-Resume.pdf"
                download={true}
                className="btn btn-primary flex items-center gap-2"
                style={{ opacity: 0 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
              <a
                href="#projects"
                className="btn btn-outline flex items-center gap-2"
                style={{ opacity: 0 }}
              >
                View Projects
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <Stat number="6+" label="Projects" />
              <Stat number="3+" label="Years Exp" />
              <Stat number="∞" label="Curiosity" />
            </div>
          </div>

          {/* Right content - Code decoration */}
          <div className="hidden lg:block">
            <div className="glass-card p-6 relative">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-midnight-700/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-sm text-midnight-400 font-mono">
                  developer.js
                </span>
              </div>

              {/* Code content */}
              <pre className="font-mono text-sm leading-relaxed">
                <code>
                  <div className="code-line" style={{ opacity: 0 }}>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-teal-primary">developer</span>{" "}
                    <span className="text-white">=</span> {"{"}
                  </div>
                  <div className="code-line pl-4" style={{ opacity: 0 }}>
                    <span className="text-midnight-300">name:</span>{" "}
                    <span className="text-amber-300">'Marques Smalley'</span>,
                  </div>
                  <div className="code-line pl-4" style={{ opacity: 0 }}>
                    <span className="text-midnight-300">role:</span>{" "}
                    <span className="text-amber-300">'Software Engineer'</span>,
                  </div>
                  <div className="code-line pl-4" style={{ opacity: 0 }}>
                    <span className="text-midnight-300">skills:</span> [
                  </div>
                  <div className="code-line pl-8" style={{ opacity: 0 }}>
                    <span className="text-amber-300">'React'</span>,{" "}
                    <span className="text-amber-300">'TypeScript'</span>,
                  </div>
                  <div className="code-line pl-8" style={{ opacity: 0 }}>
                    <span className="text-amber-300">'.Net'</span>,{" "}
                    <span className="text-amber-300">'C#'</span>,
                  </div>
                  <div className="code-line pl-8" style={{ opacity: 0 }}>
                    <span className="text-amber-300">'Node.js'</span>,{" "}
                    <span className="text-amber-300">'AWS'</span>
                  </div>
                  <div className="code-line pl-4" style={{ opacity: 0 }}>
                    ],
                  </div>
                  <div className="code-line pl-4" style={{ opacity: 0 }}>
                    <span className="text-midnight-300">passion:</span>{" "}
                    <span className="text-amber-300">
                      'Building amazing things'
                    </span>
                  </div>
                  <div className="code-line" style={{ opacity: 0 }}>
                    {"}"};
                  </div>
                  <div className="code-line mt-4" style={{ opacity: 0 }}>
                    <span className="text-teal-primary">developer</span>
                    <span className="text-white">.</span>
                    <span className="text-purple-400">create</span>
                    <span className="text-white">(</span>
                    <span className="text-amber-300">'magic'</span>
                    <span className="text-white">)</span>;
                    <span className="animate-pulse text-teal-primary ml-1">
                      ▊
                    </span>
                  </div>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-midnight-400 uppercase tracking-widest">
            Scroll
          </span>
          <svg
            className="w-5 h-5 text-teal-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

// Stat component
const Stat = ({ number, label }) => (
  <div className="text-center">
    <div className="text-3xl font-bold gradient-text">{number}</div>
    <div className="text-sm text-midnight-400">{label}</div>
  </div>
);

export default Home;
