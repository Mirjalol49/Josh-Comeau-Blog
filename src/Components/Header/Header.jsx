import React, { useEffect, useState } from "react";
import Lightmode from "../../assets/images/icons/lightMode.svg";
import Darkmode from "../../assets/images/icons/darkmode.svg";
import Rss from "../../assets/images/icons/rss.svg";
import "./Header.css";

const Header = ({ toggleDarkMode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--text-color", darkMode ? "white" : "#20222B");
    root.style.setProperty("--bg-color", darkMode ? "#0E141B" : "#C8E3F5");
    root.style.setProperty("--main-bg-color", darkMode ? "#0E141B" : "white");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [darkMode]);

  return (
    <header
      className={`main-header py-14 fixed top-0 text-center w-[100%] ${
        darkMode ? "dark" : ""
      } ${isScrolled ? "hidden" : ""}`}
    >
      <div className="container">
        <div className="main-header__wrapper flex align-middle justify-between">
          <div className="main-header__start-wrapper flex items-center">
            <a
              className="main-header__logo-link text-[30px] tracking-tighter text-[#4433FF] font-medium"
              href="./index.html"
            >
              Josh Comeau
            </a>
            <nav className="main-header__nav">
              <ul className="main-header__list flex justify-between  items-center w-96 mt-1 ml-16">
                <li className="main-header__item">
                  <a className="main-header__nav-link" href="#link">
                    Latest
                  </a>
                </li>
                <li className="main-header__item">
                  <a className="main-header__nav-link" href="#link">
                    Posts
                  </a>
                </li>
                <li className="main-header__item">
                  <a className="main-header__nav-link" href="#link">
                    Goodies
                  </a>
                </li>
                <li className="main-header__item">
                  <a className="main-header__nav-link" href="#link">
                    Courses
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="main-header__end-wrapper flex items-center">
            <button
              className="main-header__lightmode-btn mr-5"
              onClick={() => {
                toggleDarkMode();
                setDarkMode(!darkMode);
              }}
            >
              {darkMode ? (
                <img src={Darkmode} alt="light mode" width={30} height={30} />
              ) : (
                <img src={Lightmode} alt="dark mode" width={50} height={50} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
