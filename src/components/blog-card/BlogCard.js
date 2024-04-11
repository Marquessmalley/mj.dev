import React from "react";

const BlogCard = ({
  id,
  title,
  author,
  date,
  content,
  image,
  excerpt,
  url,
}) => {
  const formatDate = (isoDate) => {
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };

    const date = new Date(isoDate);
    return date.toLocaleString("en-US", options);
  };

  const formattedDate = formatDate(date);
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      {/* Image */}
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="flex items-center gap-x-4 text-xs">
        <time className="text-gray-500 dark:text-gray-100">
          {formattedDate}
        </time>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 dark:hover:text-gray-300 hover:text-gray-600 ">
          <a href={url}>
            <span className="absolute inset-0"></span>
            {title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-100">
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href={url}>
              <span className="absolute inset-0"></span>
              {author.first_name} {author.last_name}
            </a>
          </p>
          <p className="text-gray-600 dark:text-gray-100">Co-Founder / CTO</p>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
