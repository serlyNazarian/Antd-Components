import { Flex } from "antd";

const MyFlex = ({
  block,
  children,
  gap = 10,
  className = "",
  ...otherProps
}) => {
  return (
    <Flex
      gap={gap}
      className={`${block ? "full_width" : ""} ${className}`}
      {...otherProps}
    >
      {children}
    </Flex>
  );
};

export default MyFlex;
