const BlogItem = ({ title, subtitle, context, link, btn }) => {
  const h3MarginClass = subtitle ? "" : "mb-5";
  return (
    <li
      className="list my-10 transition duration-300 ease-in-out cursor-pointer"
      key={title}
      onClick={() => window.open(link, "_blank")}
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
      <a href={link} role="button" className="font-semibold mt-5">
        {btn}
      </a>
    </li>
  );
};

export default BlogItem;
