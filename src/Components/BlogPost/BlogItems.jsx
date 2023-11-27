import React from "react";

const BlogItem = ({ title, subtitle, context, link, btn, img }) => {
  const h3MarginClass = subtitle ? "" : "mb-5";

  const handleMouseEnter = (event) => {
    const arrowImg = event.currentTarget.querySelector(".arrow-img");
    if (arrowImg) {
      arrowImg.style.visibility = "visible";
    }
  };

  const handleMouseLeave = (event) => {
    const arrowImg = event.currentTarget.querySelector(".arrow-img");
    if (arrowImg) {
      arrowImg.style.visibility = "hidden";
    }
  };

  return (
    <li
      className="list my-10 cursor-pointer"
      key={title}
      onClick={() => window.open(link, "_blank")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3
        className={`title font-bold ${h3MarginClass} hover:text-blue-500 text-[22px] leading-[33.6px]`}
      >
        {title}
      </h3>
      <p className="text-[#6C7693] font-medium mb-5 leading-[28.6px]">
        {subtitle}
      </p>
      <p>{context}</p>
      <div className="flex">
        <a href={link} role="button" className="block font-semibold mt-5">
          {btn}
        </a>
        <img
          className="mt-4 ml-4 arrow-img"
          src={img}
          alt="arrow"
          width={30}
          height={30}
          style={{ visibility: "hidden" }}
        />
      </div>
    </li>
  );
};

export default BlogItem;
