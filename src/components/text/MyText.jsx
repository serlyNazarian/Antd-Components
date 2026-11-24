import { Typography } from "antd";

const { Text } = Typography;

const MyText = ({
  color,
  style,
  children,
  fontSize,
  lineHeight,
  fontWeight,
  bold = false,
  ...otherProps
}) => {
  let styleLocal = {
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
    ...style,
  };

  return (
    <Text {...otherProps} style={styleLocal} strong={bold}>
      {children}
    </Text>
  );
};

export default MyText;
