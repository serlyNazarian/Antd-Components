import { Select } from 'antd';
import SVGDropdownArrow from '../../icons/SVGDropdownArrow';

const MySelect = ({ style, width, block, ...otherProps }) => {
  const styleLocal = { ...style, width: block ? '100%' : width || '' };
  return (
    <Select
      {...otherProps}
      style={styleLocal}
      suffixIcon={<SVGDropdownArrow />}
    ></Select>
  );
};

export default MySelect;
