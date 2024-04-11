import React from "react";
import Card from "components/card/Card";
import { projectData } from "constants/projects";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-white py-24 mt-20 rounded-xl dark:bg-gray-900"
    >
      <div className="max-w-xl w-50 ml-10">
        <h1 className="text-4xl text-gray-800 font-extrabold  dark:text-gray-100">
          Step into my portfolio
        </h1>
        <p className=" text-lg text-gray-700 font-light mt-5  dark:text-gray-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          explicabo natus rerum! Perspiciatis molestiae maiores reprehenderit
          nam dicta? Distinctio, doloribus.
        </p>
      </div>

      {/* PROJECT CARDS */}
      <div className="m-10 mt-16 ml-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {projectData.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.title}
            img={item.imageUrl}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
