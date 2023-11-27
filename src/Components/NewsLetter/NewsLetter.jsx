import React, { useEffect } from "react";
import "./NewsLetter.css";

const NewsLetter = ({ darkMode }) => {
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--text-color", darkMode ? "white" : "#21232C");
    root.style.setProperty("--bg-color", darkMode ? "#0E141B" : "white");
  }, [darkMode]);

  return (
    <div
      className={` flex w-[100%] max-w-[600px] pt-24 pb-16 ${
        darkMode ? "dark" : ""
      }`}
    >
      <div>
        <h2 className=" newsletter-title text-2xl text-[#21232C] font-bold leading-8 mb-4">
          A front-end web development newsletter that sparks joy
        </h2>
        <p className="w-full">
          My goal with this blog is to create helpful content for front-end web
          devs, and my newsletter is no different! I'll let you know when I
          publish new content, and I'll even share
          <em className="font-semibold px-2">
            exclusive newsletter-only content
          </em>
          now and then.
        </p>
        <span className="block mt-8">No spam, unsubscribe at any time.</span>

        <form className="pt-20 flex align-middle justify-between w-full max-w-[600px]">
          <div className="name-box flex flex-col">
            <label className="input-label leading-7 font-medium" htmlFor="name">
              First Name
            </label>
            <input
              className="name-input pt-1 pb-3 w-full max-w-[150px]"
              type="text"
              id="name"
              autoComplete="off"
              required
            />
          </div>

          <div className="name-box flex flex-col">
            <label
              className="input-label leading-7 font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="email-input pt-1 pb-3 w-full max-w-[200px]"
              type="email"
              id="email"
              autoComplete="off"
              required
            />
          </div>

          <button className="magical-btn">
            Subscribe<div className="btn-rainbow"></div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
