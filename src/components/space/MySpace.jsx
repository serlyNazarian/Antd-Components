import { Space } from 'antd';

const MySpace = ({
  style,
  onClick,
  children,
  fullWidth,
  spaceBetween,
  size = 'small',
  ...otherProps
}) => {
  return (
    <Space
      {...otherProps}
      style={{
        width: fullWidth ? '100%' : '',
        justifyContent: spaceBetween ? 'space-between' : '',
        ...style,
      }}
      size={size}
    >
      {children}
    </Space>
  );
};

export default MySpace;
