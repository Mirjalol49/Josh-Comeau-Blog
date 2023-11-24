const LinkButton = ({ href, children, ...props }) => {
  return (
    <a href={href} target="blank" role="button" {...props}>
      {children}
    </a>
  );
};

export default LinkButton;
