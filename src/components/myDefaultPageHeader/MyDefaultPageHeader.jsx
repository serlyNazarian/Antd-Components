import { Flex } from 'antd';
import Div from '../myDiv/Div';
import MyFlex from '../myFlex/MyFlex';

const MyDefaultPageHeader = ({ left, right }) => {
  return (
    <Div>
      <MyFlex align="center">{left}</MyFlex>
      <Flex align="center">{right}</Flex>
    </Div>
  );
};

export default MyDefaultPageHeader;
