import { Divider } from 'antd';

const MyDividerSmall = ({ smaller = true, className = '' }) => {
  return (
    <Divider className={className} style={{ margin: smaller ? '5px 0' : '' }} />
  );
};

export default MyDividerSmall;
