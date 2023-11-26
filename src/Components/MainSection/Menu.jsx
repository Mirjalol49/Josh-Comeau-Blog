import React from "react";
import "./Menu.css";
import BlogData from "../BlogPost/Blog.data";
import BlogItem from "../BlogPost/BlogItems";
import LinkButtons from "../LinkButtons/LinkButtons";
import waveImage from "../../assets/images/img/wave.svg";
import Avatar from "../../assets/images/img/me-light.png";
import PopularContent from "../PopularContent/PopularContent";
import NewsLetter from "../NewsLetter/NewsLetter";

const Menu = () => {
  return (
    <main className="main-header mt-[370px] pb-10 relative z-10">
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
            <div className="hero-section__end-box ">
              <h2 className="font-semibold pt-10 pl-7 text-[#E60067] leading-7 tracking-[2px] mb-10">
                TOP CATEGORIES
              </h2>
              <div className="flex w-[377px] pl-7 flex-wrap relative ">
                <img
                  className="absolute right-[60px] top-[-335px]"
                  src={Avatar}
                  alt="avatar"
                  width={"140px"}
                  height={"auto"}
                />
                <LinkButtons
                  className="bg-[#CCE9F8]  p-3 rounded-xl mr-2 mb-2 font-medium hover:scale-105 hover:bg-[#B9E3F8] transition-all"
                  href={"https://www.joshwcomeau.com/tutorials/react/"}
                  children={"React"}
                />
                <LinkButtons
                  className="bg-[#CCE9F8] p-3 rounded-xl mr-2 mb-2 font-medium hover:scale-105 hover:bg-[#B9E3F8] transition-all"
                  href={"https://www.joshwcomeau.com/tutorials/animation/"}
                  children={"Animation"}
                />
                <LinkButtons
                  className="bg-[#CCE9F8] p-3 rounded-xl mr-2 mb-2 font-medium hover:scale-105 hover:bg-[#B9E3F8] transition-all"
                  href={"https://www.joshwcomeau.com/tutorials/css/"}
                  children={"Css"}
                />
                <LinkButtons
                  className="bg-[#CCE9F8] p-3 rounded-xl mr-2 mb-2 font-medium hover:scale-105 hover:bg-[#B9E3F8] transition-all"
                  href={"https://www.joshwcomeau.com/tutorials/career/"}
                  children={"Carrer"}
                />
                <LinkButtons
                  className="bg-[#CCE9F8] p-3 rounded-xl mr-2 mb-2 font-medium hover:scale-105 hover:bg-[#B9E3F8] transition-all"
                  href={"https://www.joshwcomeau.com/tutorials/gatsby/"}
                  children={"Gatsby"}
                />
                <LinkButtons
                  className="bg-[#CCE9F8] p-3 rounded-xl mr-2 mb-2 font-medium hover:scale-105 hover:bg-[#B9E3F8] transition-all"
                  href={"https://www.joshwcomeau.com/tutorials/nextjs/"}
                  children={"Nextjs"}
                />
                <LinkButtons
                  className="bg-[#CCE9F8] p-3 rounded-xl mr-2 mb-2 font-medium hover:scale-105 hover:bg-[#B9E3F8] transition-all"
                  href={"https://www.joshwcomeau.com/tutorials/performance/"}
                  children={"Performance"}
                />
              </div>
              <PopularContent />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container">
          <div className="flex justify-between align-middle w-full max-w-[800px]">
            <NewsLetter />
            <div className="avatar-img__box mt-28">
              <img
                className="avatar-img__floating"
                src={Avatar}
                alt="avatar"
                width={"140px"}
                height={"auto"}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
