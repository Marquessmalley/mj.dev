import knowHonesty from "assets/images/knowhonesty.png";
import logrhythm from "assets/images/logrhythm.jpeg";
import shop from "assets/icons/shop.svg";
import shineLogo from "assets/images/logo.png";
import kikcitLogo from "assets/images/kikcitLogo.jpg";
import coldbrookLogo from "assets/images/coldbrookLogo.svg";

const Card = ({ id, name,  description, link }) => {
  const renderImage = (id) => {
    switch (id) {
      case 1:
        return logrhythm;

      case 2:
        return knowHonesty;
      case 3:
        return shineLogo;
      case 4:
        return shop;
      case 5:
        return kikcitLogo;
      case 6:
        return coldbrookLogo;
      default:
        break;
    }
  };

  const renderLinkName = (id) => {
    switch (id) {
      case 1:
        return "logrhythm.com";
      case 2:
        return "assessment.knowhonesty.com";
      case 3:
        return "ptshinetime.com";
      case 4:
        return "github.com";
      case 5:
        return "kikcit.com";
      case 6:
        return "49Coldbrook.com";
      default:
        break;
    }
  };
  
  return (
    <div
      key={id}
      className="transition ease-in delay-150 hover:bg-zinc-50 dark:hover:bg-gray-800 rounded-lg p-10 shadow-md dark:shadow-md shadow-zinc-800/5 cursor-pointer"
    >
      <div className="relative  flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:rin">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-contain"
            src={renderImage(id)}
            alt="project"
            style={{ background: "#fff" }}
          />
        </div>
      </div>
      <div>
        <p className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
          {name}
        </p>
        <p className="mt-3 text-sm text-gray-700 dark:text-gray-100">
          {description}
        </p>

        <a href={link} className="mt-5  text-slate-400 text-sm flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 28 28"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
          {renderLinkName(id)}
        </a>
      </div>
    </div>
  );
};

export default Card;
