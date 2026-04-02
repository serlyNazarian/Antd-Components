import { memo } from 'react';
import MyIcon from '../myIcon/MyIcon';

const SVGIcon = ({ color }) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1L5 5L1 1"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const SVGDropdownArrow = ({ style, ...otherProps }) => {
  return (
    <MyIcon
      icon={<SVGIcon />}
      style={{ pointerEvents: 'none', ...style }}
      {...otherProps}
    />
  );
};

export default memo(SVGDropdownArrow);
