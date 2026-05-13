import { memo } from 'react';
import MyIcon from '../myIcon/MyIcon';

const SVGIcon = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.99968 0.0834961C7.50594 0.0834961 7.91634 0.493902 7.91634 1.00016V13.0002C7.91634 13.5064 7.50594 13.9168 6.99968 13.9168C6.49341 13.9168 6.08301 13.5064 6.08301 13.0002V1.00016C6.08301 0.493902 6.49341 0.0834961 6.99968 0.0834961Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.0830078 7.00016C0.0830078 6.4939 0.493413 6.0835 0.999674 6.0835H12.9997C13.5059 6.0835 13.9163 6.4939 13.9163 7.00016C13.9163 7.50642 13.5059 7.91683 12.9997 7.91683H0.999674C0.493413 7.91683 0.0830078 7.50642 0.0830078 7.00016Z"
      />
    </svg>
  );
};

const SVGPlusBtn = ({ ...otherProps }) => {
  return <MyIcon size={14} icon={<SVGIcon />} {...otherProps} />;
};

export default memo(SVGPlusBtn);
