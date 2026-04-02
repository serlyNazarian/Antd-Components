import { Empty } from 'antd';
import MyFlex from '../myFlex/MyFlex';

const MyDataEmpty = ({ description = '' }) => {
  return (
    <MyFlex
      style={{ minHeight: 500, height: '100%' }}
      justify="center"
      align="center"
      block
    >
      <Empty description={description} />
    </MyFlex>
  );
};

export default MyDataEmpty;
