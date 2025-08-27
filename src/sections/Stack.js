import React from "react";
import { useContext } from "react";
import js from "assets/icons/js.svg";
import react from "assets/icons/react.svg";
import tailwind from "assets/icons/tailwind.svg";
import github from "assets/icons/git.svg";
import nextDark from "assets/icons/next-dark.svg";
import nextLight from "assets/images/next-light.png";
import c from "assets/images/c-sharp.png";
import { ThemeContext } from "theme/index";

const Stack = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32 rounded-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-center text-3xl font-extrabold leading-8 text-gray-900 dark:text-gray-100">
          My Tech Stack
        </h1>
        <p className="mt-6 text-lg text-center font-light leading-8 text-gray-800 dark:text-gray-300">
          Technologies I've been working with recently
        </p>
        {/* <div className="bg-white mx-auto mt-10 grid max-w-lg grid-cols-5 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 "> */}
        <div className=" mx-auto mt-10 grid grid-cols-5 md:grid-cols-5">
          <img
            className=" max-h-12 w-full object-contain "
            src={js}
            alt="javscript"
            width={158}
            height={48}
          />
          <img
            className="max-h-12 w-full object-contain "
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            alt="typscript"
            width={158}
            height={48}
          />

          <img
            className=" max-h-12 w-full object-contain"
            src={react}
            alt="react"
            width={158}
            height={48}
          />
          <img
            className=" max-h-12 w-full object-contain"
            src={tailwind}
            alt="tailwind"
            width={158}
            height={48}
          />

          <img
            className=" max-h-12 w-full object-contain "
            src={isDarkMode ? nextLight : nextDark}
            alt="nextjs"
            width={158}
            height={48}
          />
        </div>
        <div className=" mx-auto mt-10 grid grid-cols-5 md:grid-cols-5">
          <img
            className=" max-h-12 w-full object-contain "
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            alt="node"
            width={158}
            height={48}
          />

          <img
            className="max-h-12 w-full object-contain "
            src={c}
            alt="java"
            width={158}
            height={48}
          />

          <img
            className=" max-h-12 w-full object-contain"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
            alt="react"
            width={158}
            height={48}
          />
          <img
            className=" max-h-12 w-full object-contain"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            alt="aws"
            width={158}
            height={48}
          />
          <img
            className=" max-h-12 w-full object-contain "
            src={github}
            alt="github"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
};

export default Stack;
