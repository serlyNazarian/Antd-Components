import { Flex } from 'antd';
import UtilString from '../../utils/UtilString';

const MyFlexVertical = ({
  block,
  gap = 10,
  children,
  className = UtilString.EMPTY_STRING,
  ...otherProps
}) => {
  return (
    <Flex
      {...otherProps}
      className={`${className} ${block ? 'full_width' : ''}`}
      gap={gap}
      vertical
    >
      {children}
    </Flex>
  );
};

export default MyFlexVertical;
