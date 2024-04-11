import { useContext } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import moon from "assets/icons/moon.svg";
import sun from "assets/icons/sun.svg";
import MenuList from "components/menu/MenuList";
import { navigation } from "constants/navigation";
import { ThemeContext } from "theme/index";

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* NAVIGATION */}
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1"></div>
        {/* MENU BUTTON */}
        <div className="flex flex-1 justify-end lg:hidden ">
          <MenuList />
        </div>
        {/* MENU LIST */}
        <div className=" flex flex-1 hidden lg:flex lg:justify-center ">
          <div className="flex hidden lg:flex lg:gap-x-12 rounded-full px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-gray-900 dark:text-zinc-200 dark:ring-white/10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm p-2 font-normal  text-gray  hover:text-gray-500 dark:hover:text-gray-200 "
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* MEDIA ICONS */}
        <div className="  hidden lg:flex flex-1 lg:justify-end ">
          <a href="https://www.linkedin.com/in/m-smalley2120/">
            {/* <img
              className="inline-block h-8 w-8 rounded-full ring-1 mr-2"
              src={linkedin}
              alt=""
            /> */}
            <LinkedInIcon
              fontSize="large"
              sx={{
                marginRight: "1rem",
                color: isDarkMode ? "#e0e0e0" : "#424242",
              }}
            />
          </a>
          <a href="https://github.com/Marquessmalley">
            <GitHubIcon
              fontSize="large"
              sx={{
                marginRight: "1rem",
                color: isDarkMode ? "#e0e0e0" : "#424242",
              }}
            />
            {/* <img
              className="inline-block h-8 w-8 rounded-full ring-1 mr-2"
              src={github}
              alt=""
            /> */}
          </a>
        </div>
        {/* LIGHT/DARK ICONS */}
        {isDarkMode ? (
          <button
            onClick={() => toggleTheme()}
            className="bg-white/90 rounded-full bg-white/90 px-3 py-1 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          >
            <img className="inline-block h-6 w-6 " src={moon} alt="" />
          </button>
        ) : (
          <button
            onClick={() => toggleTheme()}
            className="bg-white/90 rounded-full bg-white/90 px-3 py-1 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          >
            <img className="inline-block h-6 w-6" src={sun} alt="" />
          </button>
        )}
      </nav>
    </header>
  );
}
