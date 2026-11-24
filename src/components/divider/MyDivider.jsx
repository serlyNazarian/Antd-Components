import { Divider } from 'antd';

const MyDivider = ({ smaller = true }) => {
  return <Divider style={{ margin: smaller ? '10px 0' : '' }} />;
};

export default MyDivider;
