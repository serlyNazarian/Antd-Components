import { Alert } from 'antd';

const MyAlert = ({ showIcon = true, ...otherProps }) => {
  return <Alert showIcon={showIcon} {...otherProps} />;
};

export default MyAlert;
