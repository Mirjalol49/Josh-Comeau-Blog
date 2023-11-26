import React, { useEffect, useState } from "react";
import PopularData from "./PopularContent.data";
import Arrow from "../../assets/images/icons/arrow.svg";
import "./Popular.css";

const PopularContent = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-[320px] z-50 ${isSticky ? "sticky top-0" : ""}`}>
      <h2 className="font-semibold pt-10 pl-7 text-[#E60067] leading-7 tracking-[2px] mb-10">
        POPULAR CONTENT
      </h2>
      <ul className="">
        {PopularData.map((item, index) => (
          <li className="popular-item mb-3 flex" key={index}>
            <img
              className="arrow-img"
              src={Arrow}
              alt="arrow"
              width={30}
              height={30}
            />
            <a
              className="font-medium leading-normal text-lg"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularContent;
