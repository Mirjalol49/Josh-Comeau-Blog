import React from "react";
import "./Header.css";
import Lightmode from "../../assets/images/icons/lightMode.svg";
import Darkmode from "../../assets/images/icons/nightMode.png";
import Rss from "../../assets/images/icons/rss.svg";
const Header = () => {
  return (
    <header className="main-header  py-14 fixed top-0 text-center w-[100%]">
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
            <button className="main-header__darkmode-btn mr-5">
              <img src={Lightmode} alt="light mode" width={30} height={30} />
            </button>
            <button className="main-header__sound-btn">
              <img
                hidden
                src={Darkmode}
                alt="dark mode"
                width={30}
                height={30}
              />
            </button>
            <a className="main-header__rss" href="#link">
              <img src={Rss} alt="rss" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
