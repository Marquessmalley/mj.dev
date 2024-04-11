import { useEffect, useState } from "react";
import BlogCard from "components/blog-card/BlogCard";
const Blogs = () => {
  const [posts, setPosts] = useState();

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

  return (
    <div
      id="blogs"
      className="bg-white py-24 mt-20 rounded-xl dark:bg-gray-900"
    >
      <div className=" ml-10">
        <h1 className="text-4xl text-gray-800 text-center font-extrabold  dark:text-gray-100">
          From the blog
        </h1>
        <p className="text-center text-lg text-gray-700 font-light mt-5  dark:text-gray-100">
          Learn how to grow your business with our expert advice.
        </p>
      </div>

      {/* PROJECT CARDS */}
      <div className="m-10 mt-16 ml-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {posts &&
          posts.map((item) => (
            <BlogCard
              key={item.ID}
              id={item.ID}
              title={item.title}
              author={item.author}
              image={item.featured_image}
              content={item.content}
              date={item.date}
              excerpt={item.excerpt}
              url={item.URL}
            />
          ))}
      </div>
    </div>
  );
};

export default Blogs;
