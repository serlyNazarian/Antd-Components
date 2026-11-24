import { Flex } from 'antd';
import Div from '../div/Div';
import MyFlex from '../flex/MyFlex';

const MyDefaultPageHeader = ({ left, right }) => {
  return (
    <Div>
      <MyFlex align="center">{left}</MyFlex>
      <Flex align="center">{right}</Flex>
    </Div>
  );
};

export default MyDefaultPageHeader;
