import React, { useRef } from "react";

const BlogCard = ({
  id,
  title,
  author,
  date,
  content,
  image,
  excerpt,
  url,
  index,
}) => {
  const cardRef = useRef(null);

  const formatDate = (isoDate) => {
    const options = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };

    const dateObj = new Date(isoDate);
    return dateObj.toLocaleString("en-US", options);
  };

  const formattedDate = formatDate(date);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <article
      ref={cardRef}
      className="glass-card group overflow-hidden h-full transition-all duration-500"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-teal-primary/20 to-purple-500/20 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-midnight-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Date badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-midnight-950/80 backdrop-blur-sm text-xs font-medium text-midnight-200 border border-midnight-700/50">
          {formattedDate}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-teal-primary transition-colors duration-300">
            {title}
          </h3>
        </a>

        {/* Excerpt */}
        <div
          dangerouslySetInnerHTML={{ __html: excerpt }}
          className="text-sm text-midnight-400 line-clamp-3 leading-relaxed"
        />

        {/* Author & Read more */}
        <div className="flex items-center justify-between pt-4 border-t border-midnight-800/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-teal-primary/20 flex items-center justify-center text-teal-primary font-medium text-sm">
              {author.first_name?.[0] || "M"}
              {author.last_name?.[0] || "S"}
            </div>
            <div>
              <p className="text-sm font-medium">
                {author.first_name} {author.last_name}
              </p>
            </div>
          </div>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-teal-primary hover:text-teal-secondary transition-colors duration-300 flex items-center gap-1 group/link"
          >
            Read
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
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
