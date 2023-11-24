import React from "react";
import "./Hero.css";
import BlogData from "../BlogPost/Blog.data";
import BlogItem from "../BlogPost/BlogItems";
import LinkButtons from "../LinkButtons/LinkButtons";
import waveImage from "../../assets/images/img/wave.svg";
import Avatar from "../../assets/images/img/me-light.png";

const Hero = () => {
  return (
    <main className="main-header mt-[370px]  relative z-10">
      <img
        className="absolute right-[310px] top-[-111px]"
        src={Avatar}
        alt="avatar"
        width={"140px"}
        height={"auto"}
      />
      <img src={waveImage} alt="wave" width={"100%"} height={"auto"} />

      <section className="hero-section bg-white ">
        <div className="container">
          <div className="hero-section__main-box flex justify-between">
            <div className="hero-section__start-box  w-[626px]">
              <h1 className="visually-hidden">
                Josh Comeau this is an interactive blog
              </h1>
              <h2 className="font-semibold pt-10 text-[#E60067] leading-7 tracking-[2px]">
                RECENTLY PUBLISHED
              </h2>
              <ul>{BlogData.map(BlogItem)}</ul>
            </div>
            <div className="hero-section__end-box">
              <h2 className="font-semibold pt-10 text-[#E60067] leading-7 tracking-[2px] mb-10">
                TOP CATEGORIES
              </h2>
              <div className="flex w-[337px] flex-wrap">
                <LinkButtons
                  className="bg-[#CCE9F8] p-3 rounded-xl mr-2 mb-2"
                  href={"https://www.joshwcomeau.com/tutorials/react/"}
                  children={"React"}
                />
                <LinkButtons
                  className="bg-[#CCE9F8] p-3 rounded-xl mr-2 mb-2"
                  href={"https://www.joshwcomeau.com/tutorials/animation/"}
                  children={"Animation"}
                />
                <LinkButtons
                  className="bg-[#CCE9F8] p-3 rounded-xl mr-2 mb-2"
                  href={"https://www.joshwcomeau.com/tutorials/css/"}
                  children={"Css"}
                />
                <LinkButtons
                  className="bg-[#CCE9F8] p-3 rounded-xl mr-2 mb-2"
                  href={"https://www.joshwcomeau.com/tutorials/career/"}
                  children={"Carrer"}
                />
                <LinkButtons
                  className="bg-[#CCE9F8] p-3 rounded-xl mr-2 mb-2"
                  href={"https://www.joshwcomeau.com/tutorials/gatsby/"}
                  children={"Gatsby"}
                />
                <LinkButtons
                  className="bg-[#CCE9F8] p-3 rounded-xl mr-2 mb-2"
                  href={"https://www.joshwcomeau.com/tutorials/nextjs/"}
                  children={"Nextjs"}
                />
                <LinkButtons
                  className="bg-[#CCE9F8] p-3 rounded-xl mr-2 mb-2"
                  href={"https://www.joshwcomeau.com/tutorials/performance/"}
                  children={"Performance"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
