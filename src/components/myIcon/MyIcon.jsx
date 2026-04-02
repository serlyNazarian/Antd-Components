import { cloneElement, memo } from "react";
import Icon from "@ant-design/icons";
// import useMyTheme from "../../theme/useMyTheme";

const MyIcon = ({
  icon,
  style,
  color,
  rotate,
  onClick,
  size = 28,
  ...otherProps
}) => {
  // const { token } = useMyTheme();

  return (
    <Icon
      style={style}
      component={() =>
        cloneElement(icon, {
          size: size,
          rotate: rotate,
          // color: color || token.colorText,
          color: color,
          ...otherProps,
        })
      }
      onClick={onClick}
    />
  );
};

export default memo(MyIcon);
