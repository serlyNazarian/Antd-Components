import { Select } from 'antd';
import { ChevronDown } from 'lucide-react';

const MySelectWrapper = ({ value, loading, suffixIcon, children, ...rest }) => (
  <Select
    value={loading ? undefined : value}
    loading={loading}
    suffixIcon={loading ? undefined : suffixIcon || (
      <ChevronDown size={10} aria-hidden="true" style={{ pointerEvents: 'none' }} />
    )}
    {...rest}
  >
    {children}
  </Select>
);

export default MySelectWrapper;
