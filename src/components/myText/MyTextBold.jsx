import { Typography } from "antd";

const { Text } = Typography;

const MyTextBold = ({ children, color, fontSize, style, ...otherProps }) => {
  let styleLoc = {
    color: color,
    fontSize: fontSize,
    ...style,
  };
  return (
    <Text {...otherProps} style={styleLoc} strong={true}>
      {children}
    </Text>
  );
};

export default MyTextBold;
