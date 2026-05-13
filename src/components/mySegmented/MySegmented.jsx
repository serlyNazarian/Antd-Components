import { Segmented } from 'antd';

const MySegmented = ({ color, style, ...otherProps }) => {
  return <Segmented {...otherProps} style={{ width: 300, ...style }} />;
};

export default MySegmented;
