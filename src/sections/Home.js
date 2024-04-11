import React from "react";

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight  text-gray-900 dark:text-white sm:text-4xl">
            Hello 👋🏾, my name is Marques Smalley.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-800 dark:text-gray-300">
            Welcome to the hub of innovation! I'm your tech enthusiast on a
            mission to revolutionize the digital world.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="#about"
              className="rounded-md  bg-gray-800 dark:bg-white px-3.5 py-2.5 text-sm font-semibold text-white dark:text-gray-900 shadow-sm dark:hover:bg-gray-100 hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="text-sm font-semibold leading-6 text-gray-800 dark:text-white"
            >
              Projects <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          <img
            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="App screenshot"
            width={1824}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
