import React, { useEffect, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import Card from "components/card/Card";
import { projectData } from "constants/projects";

const Projects = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            // Animate section header
            const timeline = createTimeline({ defaults: { ease: "outExpo" } });
            
            timeline.add(".projects-title", {
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
            })
            .add(".projects-subtitle", {
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 600,
            }, "-=500")
            .add(".project-card", {
              opacity: [0, 1],
              translateY: [60, 0],
              scale: [0.95, 1],
              duration: 800,
              delay: stagger(100),
            }, "-=400");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-32 relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Section header */}
      <div className="relative z-10 mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-primary/30 to-transparent" />
          <span className="text-teal-primary font-mono text-sm">&lt;projects&gt;</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-primary/30 to-transparent" />
        </div>
        
        <h2 
          className="projects-title section-title text-center"
          style={{ opacity: 0 }}
        >
          Featured <span className="gradient-text">Work</span>
        </h2>
        <p 
          className="projects-subtitle section-subtitle text-center mx-auto mt-4"
          style={{ opacity: 0 }}
        >
          A collection of projects I've built, from professional work to personal experiments. 
          Each one taught me something new.
        </p>
      </div>

      {/* Project grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((item, index) => (
          <div 
            key={item.id} 
            className="project-card"
            style={{ opacity: 0 }}
          >
            <Card
              id={item.id}
              name={item.title}
              description={item.description}
              link={item.link}
              index={index}
            />
          </div>
        ))}
      </div>

      {/* Closing tag */}
      <div className="flex items-center gap-4 mt-16">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-primary/30 to-transparent" />
        <span className="text-teal-primary font-mono text-sm">&lt;/projects&gt;</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-primary/30 to-transparent" />
      </div>
    </section>
  );
};

export default Projects;
