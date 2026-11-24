import { cloneElement, memo } from 'react';
import Icon from '@ant-design/icons';

const MyIcon = ({
  icon,
  style,
  color,
  rotate,
  onClick,
  size = 28,
  ...otherProps
}) => {
  return (
    <Icon
      style={style}
      component={() =>
        cloneElement(icon, {
          size: size,
          rotate: rotate,
          color: color,
          ...otherProps,
        })
      }
      onClick={onClick}
    />
  );
};

export default memo(MyIcon);
