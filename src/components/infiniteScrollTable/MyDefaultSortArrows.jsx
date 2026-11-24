import { SortAscendingOutlined } from '@ant-design/icons';
import MyFlexVertical from '../flex/MyFlexVertical';

const MyDefaultSortArrows = ({ sortOrder }) => {
  return (
    <MyFlexVertical gap={5}>
      <SortAscendingOutlined rotate={'-180'} />
      <SortAscendingOutlined />
    </MyFlexVertical>
  );
};

export default MyDefaultSortArrows;
