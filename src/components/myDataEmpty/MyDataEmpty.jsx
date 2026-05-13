import { Empty } from 'antd';
import MyFlexCenter from '../myFlex/MyFlexCenter';

const MyDataEmpty = ({ description = '' }) => {
  return (
    <MyFlexCenter style={{ minHeight: 500, height: '100%' }}>
      <Empty description={description} />
    </MyFlexCenter>
  );
};

export default MyDataEmpty;
