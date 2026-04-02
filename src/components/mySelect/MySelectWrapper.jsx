import { Select } from 'antd';
import SVGDropdownArrow from '../icons/SVGDropdownArrow';

const MySelectWrapper = ({ value, loading, suffixIcon, children, ...rest }) => (
  <Select
    value={loading ? undefined : value}
    loading={loading}
    suffixIcon={loading ? undefined : suffixIcon || <SVGDropdownArrow />}
    {...rest}
  >
    {children}
  </Select>
);

export default MySelectWrapper;
