import { SortAscendingOutlined } from '@ant-design/icons';
import MyFlexVertical from '../myFlex/MyFlexVertical';

const MyDefaultSortArrows = ({ sortOrder }) => {
  return (
    <MyFlexVertical gap={5}>
      <SortAscendingOutlined rotate={'-180'} />
      <SortAscendingOutlined />
    </MyFlexVertical>
  );
};

export default MyDefaultSortArrows;
