import { useState } from "react";
import { ThemeContext } from "theme/index";
import Navbar from "components/navbar/Navbar";
import Home from "sections/Home";
import Stack from "sections/Stack";
import Projects from "sections/Projects";
import Blogs from "sections/Blogs";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div
        className={
          isDarkMode
            ? "dark bg-gradient-to-t from-gray-800 to-gray-900"
            : "bg-gradient-to-b from-slate-50 to-slate-100"
        }
      >
        <Navbar />
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <Home />
          <Stack />
          <Projects />
          <Blogs />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
