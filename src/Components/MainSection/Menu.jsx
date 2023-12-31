import React, { useEffect } from "react";
import BlogData from "../BlogPost/Blog.data";
import BlogItem from "../BlogPost/BlogItems";
import LinkButtons from "../LinkButtons/LinkButtons";
import AvatarDark from "../../assets/images/img/me-dark.png";
import Avatar from "../../assets/images/img/me-light.png";
import PopularContent from "../PopularContent/PopularContent";
import NewsLetter from "../NewsLetter/NewsLetter";
import "./Menu.css";

const Menu = ({ darkMode }) => {
  const svgFill = darkMode ? "#0E141B" : "#fff";

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--text-color", darkMode ? "white" : "#20222B");
    root.style.setProperty("--bg-color", darkMode ? "#0E141B" : "#C8E3F5");
    root.style.setProperty(
      "--main-bg-color",
      darkMode ? "#0E141B" : "var(--main-bg-color)"
    );
  }, [darkMode]);

  return (
    <main
      className={`main-header mt-[320px] pb-10 relative z-10  ${
        darkMode ? "dark" : ""
      }`}
    >
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id="wave"
        style={{
          transform: "rotate(0deg)",

          transition: "1s",
        }}
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(255, 255, 255, 1)" offset="0%" />
            <stop stopColor="rgba(255, 255, 255, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          style={{
            transform: "translate(0px, 1px)",
            opacity: 1,
          }}
          fill={svgFill}
          d="M0,0L30,5C60,10,120,20,180,33.3C240,47,300,63,360,70C420,77,480,73,540,71.7C600,70,660,70,720,61.7C780,53,840,37,900,40C960,43,1020,67,1080,71.7C1140,77,1200,63,1260,51.7C1320,40,1380,30,1440,23.3C1500,17,1560,13,1620,13.3C1680,13,1740,17,1800,23.3C1860,30,1920,40,1980,46.7C2040,53,2100,57,2160,48.3C2220,40,2280,20,2340,25C2400,30,2460,60,2520,71.7C2580,83,2640,77,2700,73.3C2760,70,2820,70,2880,58.3C2940,47,3000,23,3060,21.7C3120,20,3180,40,3240,41.7C3300,43,3360,27,3420,21.7C3480,17,3540,23,3600,30C3660,37,3720,43,3780,51.7C3840,60,3900,70,3960,61.7C4020,53,4080,27,4140,23.3C4200,20,4260,40,4290,50L4320,60L4320,100L4290,100C4260,100,4200,100,4140,100C4080,100,4020,100,3960,100C3900,100,3840,100,3780,100C3720,100,3660,100,3600,100C3540,100,3480,100,3420,100C3360,100,3300,100,3240,100C3180,100,3120,100,3060,100C3000,100,2940,100,2880,100C2820,100,2760,100,2700,100C2640,100,2580,100,2520,100C2460,100,2400,100,2340,100C2280,100,2220,100,2160,100C2100,100,2040,100,1980,100C1920,100,1860,100,1800,100C1740,100,1680,100,1620,100C1560,100,1500,100,1440,100C1380,100,1320,100,1260,100C1200,100,1140,100,1080,100C1020,100,960,100,900,100C840,100,780,100,720,100C660,100,600,100,540,100C480,100,420,100,360,100C300,100,240,100,180,100C120,100,60,100,30,100L0,100Z"
        />
      </svg>
      <section className="hero-section bg-white ">
        <div className="container">
          {/* This is the main box that holds two boxes to flex  */}
          <div className="hero-section__main-box flex justify-between">
            {/* This is first box, it is holding recently published posts */}
            <div className="hero-section__start-box  w-[626px]">
              <h1 className="visually-hidden">
                Josh Comeau this is an interactive blog
              </h1>
              <h2 className="font-semibold pt-10 text-[#E60067] leading-7 tracking-[2px]">
                RECENTLY PUBLISHED
              </h2>
              {/* Here we are looping the data and displaying to screen */}
              <ul>{BlogData.map(BlogItem)}</ul>
            </div>

            {/* This is second box, it is holding Top categries links */}
            <div className="hero-section__end-box ">
              <h2 className="font-semibold pt-10 pl-7 text-[#E60067] leading-7 tracking-[2px] mb-10">
                TOP CATEGORIES
              </h2>
              <div className="flex w-[377px] pl-7 flex-wrap relative ">
                {darkMode ? (
                  <img
                    className="absolute right-[60px] top-[-335px]"
                    src={AvatarDark}
                    alt="avatar"
                    width={"140px"}
                    height={"auto"}
                  />
                ) : (
                  <img
                    className=" absolute right-[60px] top-[-335px]"
                    src={Avatar}
                    alt="avatar"
                    width={"140px"}
                    height={"auto"}
                  />
                )}

                <LinkButtons
                  className={` p-3 rounded-xl mr-2 mb-2 font-medium hover:scale-105 ${
                    darkMode
                      ? "bg-[#243A47] hover:bg-[#385A6E]"
                      : "bg-[#CCE9F8]"
                  } transition-all`}
                  href={"https://www.joshwcomeau.com/tutorials/react/"}
                  children={"React"}
                />

                <LinkButtons
                  className={` p-3 rounded-xl mr-2 mb-2 font-medium hover:scale-105 ${
                    darkMode
                      ? "bg-[#243A47] hover:bg-[#385A6E]"
                      : "bg-[#CCE9F8]"
                  } transition-all`}
                  href={"https://www.joshwcomeau.com/tutorials/animation/"}
                  children={"Animation"}
                />
                <LinkButtons
                  className={` p-3 rounded-xl mr-2 mb-2 font-medium hover:scale-105 ${
                    darkMode
                      ? "bg-[#243A47] hover:bg-[#385A6E]"
                      : "bg-[#CCE9F8]"
                  } transition-all`}
                  href={"https://www.joshwcomeau.com/tutorials/css/"}
                  children={"Css"}
                />
                <LinkButtons
                  className={`p-3 rounded-xl mr-2 mb-2 font-medium hover:scale-105 ${
                    darkMode
                      ? "bg-[#243A47] hover:bg-[#385A6E]"
                      : "bg-[#CCE9F8]"
                  } transition-all`}
                  children={"Carrer"}
                />
                <LinkButtons
                  className={` p-3 rounded-xl mr-2 mb-2 font-medium hover:scale-105 ${
                    darkMode
                      ? "bg-[#243A47] hover:bg-[#385A6E]"
                      : "bg-[#CCE9F8]"
                  } transition-all`}
                  href={"https://www.joshwcomeau.com/tutorials/gatsby/"}
                  children={"Gatsby"}
                />
                <LinkButtons
                  className={` p-3 rounded-xl mr-2 mb-2 font-medium hover:scale-105 ${
                    darkMode
                      ? "bg-[#243A47] hover:bg-[#385A6E]"
                      : "bg-[#CCE9F8]"
                  } transition-all`}
                  href={"https://www.joshwcomeau.com/tutorials/nextjs/"}
                  children={"Nextjs"}
                />
                <LinkButtons
                  className={` p-3 rounded-xl mr-2 mb-2 font-medium hover:scale-105 ${
                    darkMode
                      ? "bg-[#243A47] hover:bg-[#385A6E]"
                      : "bg-[#CCE9F8]"
                  } transition-all`}
                  href={"https://www.joshwcomeau.com/tutorials/performance/"}
                  children={"Performance"}
                />
              </div>
              {/* This displays popular posts */}
              <PopularContent />
            </div>
          </div>
        </div>
      </section>

      {/* This is newsletter section */}
      <section className="down-main__shadow  newsletter-section bg-white">
        <div className="container">
          <div className="flex justify-between align-middle w-full max-w-[800px]">
            <NewsLetter />
            <div className="avatar-img__box mt-28">
              {darkMode ? (
                <img
                  className="avatar-img__floating"
                  src={AvatarDark}
                  alt="avatar"
                  width={"140px"}
                  height={"auto"}
                />
              ) : (
                <img
                  className="avatar-img__floating"
                  src={Avatar}
                  alt="avatar"
                  width={"140px"}
                  height={"auto"}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
