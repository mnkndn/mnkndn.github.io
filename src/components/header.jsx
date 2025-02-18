import { useStore } from "@nanostores/react";
import { $route } from "../store";

export default () => {
  const route = useStore($route);

  return (
    <header className="w-full bg-[#0b1528d1] shadow-sm backdrop-blur-md sticky top-0 z-10 border-b border-[#1b2741]">
      <div className="mx-auto max-w-7xl flex items-center justify-between p-4 px-6">
        <a href="/" className="gap-2 items-center hidden sm:flex">
          <img className="h-8" src={`/favicon.svg`} />
        </a>
        <nav className="flex gap-8 font-light text-gray-400 items-center flex-1 justify-evenly sm:flex-none sm:justify-normal">
          <a
            href="#home"
            className={`text-sm ${
              route === "home" ? "text-primary" : ""
            } hover:text-primary transition-colors`}
          >
            HOME
          </a>
          <a
            href="#about"
            className={`text-sm ${
              route === "about" ? "text-primary" : ""
            } hover:text-primary transition-colors`}
          >
            ABOUT
          </a>
          <a href="/" className="block sm:hidden gap-2 items-center">
            <img className="h-8" src={`/favicon.svg`} />
          </a>
          <a
            href="#work"
            className={`text-sm ${
              route === "work" ? "text-primary" : ""
            } hover:text-primary transition-colors`}
          >
            WORK
          </a>
          <a
            href="#skills"
            className={`text-sm ${
              route === "skills" ? "text-primary" : ""
            } hover:text-primary transition-colors`}
          >
            SKILLS
          </a>
        </nav>
      </div>
    </header>
  );
};
