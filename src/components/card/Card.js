import { useRef } from "react";
import knowHonesty from "assets/images/knowhonesty.png";
import logrhythm from "assets/images/logrhythm.jpeg";
import shop from "assets/icons/shop.svg";
import shineLogo from "assets/images/logo.png";
import kikcitLogo from "assets/images/kikcitLogo.jpg";
import coldbrookLogo from "assets/images/coldbrookLogo.svg";

const Card = ({ id, name, description, link, index }) => {
  const cardRef = useRef(null);

  const renderImage = (id) => {
    switch (id) {
      case 1:
        return logrhythm;
      case 2:
        return knowHonesty;
      case 3:
        return shineLogo;
      case 4:
        return shop;
      case 5:
        return kikcitLogo;
      case 6:
        return coldbrookLogo;
      default:
        return null;
    }
  };

  const renderLinkName = (id) => {
    switch (id) {
      case 1:
        return "logrhythm.com";
      case 2:
        return "assessment.knowhonesty.com";
      case 3:
        return "ptshinetime.com";
      case 4:
        return "github.com";
      case 5:
        return "kikcit.com";
      case 6:
        return "49Coldbrook.com";
      default:
        return "";
    }
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <article
      ref={cardRef}
      className="glass-card group p-6 h-full transition-all duration-500 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Project icon */}
      <div className="relative mb-6">
        <div className="w-14 h-14 rounded-2xl bg-midnight-800/50 border border-midnight-700/50 flex items-center justify-center overflow-hidden group-hover:border-teal-primary/30 transition-colors duration-300">
          <img
            className="w-10 h-10 object-contain"
            src={renderImage(id)}
            alt={name}
            style={{ background: "#fff", borderRadius: "8px" }}
          />
        </div>

        {/* Decorative number */}
        <span className="absolute -top-2 -right-2 text-6xl font-bold text-midnight-800/30 select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold group-hover:text-teal-primary transition-colors duration-300">
          {name}
        </h3>

        <p className="text-sm text-midnight-400 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm text-teal-primary hover:text-teal-secondary transition-colors duration-300 group/link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          />
        </svg>
        <span className="relative">
          {renderLinkName(id)}
          <span className="absolute bottom-0 left-0 w-0 h-px bg-teal-primary transition-all duration-300 group-hover/link:w-full" />
        </span>
        <svg
          className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
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
    </article>
  );
};

export default Card;
