import { Space } from 'antd';
import UtilString from '../../utils/UtilString';

const MySpaceColumn = ({
  children,
  fullWidth,
  size = 'small',
  className = UtilString.EMPTY_STRING,
  ...otherProps
}) => {
  return (
    <Space
      {...otherProps}
      size={size}
      direction="vertical"
      className={`${fullWidth ? 'full_width' : ''} ${className}`}
    >
      {children}
    </Space>
  );
};

export default MySpaceColumn;
