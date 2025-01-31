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
    <div 
    className=""
    >
      {/* Image */}
      <div 
      className="relative rounded-lg overflow-hidden"
      >
      
         <img
          src={image}
          alt=""
          className="h-64 w-96"
        /> 
      </div>

      {/* DATE */}
      <div className="flex items-center gap-x-4 text-xs mt-2">
        <p className="text-gray-500 dark:text-gray-100">
          {formattedDate}
        </p>
        
      </div>
      <div className="flex items-center gap-x-4 text-xs mt-2">
        < a href={url}
          className="font-bold text-lg text-gray-900 dark:text-gray-100 dark:hover:text-gray-300 hover:text-gray-600 "
        >
          {title}
        </a>
        
      </div>

      {/* TITLE LINK */}
   

         
          <div dangerouslySetInnerHTML={{ __html: excerpt }} className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-100" ></div>
 

      {/* AUTHOR */}
      <div className="relative mt-2 flex items-center gap-x-4">
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href={url}>
              <span className="absolute inset-0"></span>
              {author.first_name} {author.last_name}
            </a>
          </p>
          <p className="text-gray-600 dark:text-gray-100">Software Developer</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
