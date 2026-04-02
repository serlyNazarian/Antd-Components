const MyLinkA = ({
  bold,
  label,
  underline,
  blank = false,
  color = "",
  className = "",
  ...otherProps
}) => {
  return (
    <a
      className={`${color} ${className} ${
        underline ? "text_underline" : ""
      } ${bold ? "text_bold" : ""}`}
      target={blank ? "_blank" : ""}
      rel="noopener noreferrer"
      {...otherProps}
    >
      {label}
    </a>
  );
};

export default MyLinkA;
