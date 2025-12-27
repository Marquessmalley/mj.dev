import { useEffect, useState, useRef } from "react";
import { stagger, createTimeline } from "animejs";
import BlogCard from "components/blog-card/BlogCard";

const Blogs = () => {
  const [posts, setPosts] = useState();
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const apiUrl =
      "https://public-api.wordpress.com/rest/v1/sites/lionnoodleselektra704539.wordpress.com/posts";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts.slice(0, 3));
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const timeline = createTimeline({ defaults: { ease: "outExpo" } });

            timeline
              .add(".blogs-title", {
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 800,
              })
              .add(
                ".blogs-subtitle",
                {
                  opacity: [0, 1],
                  translateY: [20, 0],
                  duration: 600,
                },
                "-=500"
              )
              .add(
                ".blog-card-item",
                {
                  opacity: [0, 1],
                  translateY: [50, 0],
                  scale: [0.95, 1],
                  duration: 700,
                  delay: stagger(150),
                },
                "-=400"
              );
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
    <section ref={sectionRef} id="blogs" className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-teal-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Section header */}
      <div className="relative z-10 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-primary/30 bg-teal-primary/5 mb-6">
          <svg
            className="w-4 h-4 text-teal-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          <span className="text-teal-primary text-sm font-medium">
            Latest Insights
          </span>
        </div>

        <h2 className="blogs-title section-title" style={{ opacity: 0 }}>
          From the <span className="gradient-text">Blog</span>
        </h2>
        <p
          className="blogs-subtitle section-subtitle mx-auto mt-4"
          style={{ opacity: 0 }}
        >
          Thoughts, tutorials, and insights on software development, technology,
          and building great products.
        </p>
      </div>

      {/* Blog grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts &&
          posts.map((item, index) => (
            <div
              key={item.ID}
              className="blog-card-item"
              style={{ opacity: 0 }}
            >
              <BlogCard
                id={item.ID}
                title={item.title}
                author={item.author}
                image={item.featured_image}
                content={item.content}
                date={item.date}
                excerpt={item.excerpt}
                url={item.URL}
                index={index}
              />
            </div>
          ))}
      </div>

      {/* View all link */}
      {posts && posts.length > 0 && (
        <div className="relative z-10 text-center mt-12">
          <a
            href="https://lionnoodleselektra704539.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-primary hover:text-teal-secondary transition-colors duration-300 group"
          >
            <span>View all posts</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
      )}
    </section>
  );
};

export default Blogs;
