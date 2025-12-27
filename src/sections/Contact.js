import React, { useEffect, useRef, useState } from "react";
import { animate, stagger, createTimeline } from "animejs";

const Contact = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const timeline = createTimeline({ defaults: { ease: "outExpo" } });
            
            timeline.add(".contact-title", {
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
            })
            .add(".contact-subtitle", {
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 600,
            }, "-=500")
            .add(".contact-info-item", {
              opacity: [0, 1],
              translateX: [-30, 0],
              duration: 500,
              delay: stagger(100),
            }, "-=400")
            .add(".form-group", {
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 500,
              delay: stagger(80),
            }, "-=400")
            .add(".submit-btn", {
              opacity: [0, 1],
              scale: [0.9, 1],
              duration: 500,
            }, "-=200");
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    
    // Button animation feedback
    animate(".submit-btn", {
      scale: [1, 0.95, 1.02, 1],
      duration: 400,
      ease: "outElastic(1, .5)",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-32 relative"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 
            className="contact-title section-title"
            style={{ opacity: 0 }}
          >
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p 
            className="contact-subtitle section-subtitle mx-auto mt-4"
            style={{ opacity: 0 }}
          >
            Have a project in mind? I'd love to hear from you. 
            Drop me a message and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div 
              className="contact-info-item glass-card p-6"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-midnight-400">Email</p>
                  <p className="font-medium">hello@example.com</p>
                </div>
              </div>
            </div>

            <div 
              className="contact-info-item glass-card p-6"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-midnight-400">Location</p>
                  <p className="font-medium">United States</p>
                </div>
              </div>
            </div>

            <div 
              className="contact-info-item glass-card p-6"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-midnight-400">Availability</p>
                  <p className="font-medium text-teal-primary">Open to opportunities</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div 
              className="contact-info-item flex gap-4"
              style={{ opacity: 0 }}
            >
              <a
                href="https://www.linkedin.com/in/m-smalley2120/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-midnight-800/50 border border-midnight-700/50 flex items-center justify-center hover:border-teal-primary/50 hover:bg-teal-primary/10 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/Marquessmalley"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-midnight-800/50 border border-midnight-700/50 flex items-center justify-center hover:border-teal-primary/50 hover:bg-teal-primary/10 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="form-group" style={{ opacity: 0 }}>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="John"
                    required
                  />
                </div>

                <div className="form-group" style={{ opacity: 0 }}>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Doe"
                    required
                  />
                </div>

                <div className="form-group sm:col-span-2" style={{ opacity: 0 }}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group sm:col-span-2" style={{ opacity: 0 }}>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone <span className="text-midnight-400">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="form-group sm:col-span-2" style={{ opacity: 0 }}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="submit-btn btn-primary w-full mt-8 flex items-center justify-center gap-2"
                style={{ opacity: 0 }}
              >
                <span>Send Message</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
