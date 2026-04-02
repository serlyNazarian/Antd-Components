import { DeleteOutlined } from '@ant-design/icons';
import MyButtonConfirmDelete from './MyButtonConfirmDelete';

const MyButtonDelete = ({ icon, withIcon, ...otherProps }) => {
  return (
    <MyButtonConfirmDelete
      {...otherProps}
      icon={icon || (withIcon ? <DeleteOutlined /> : null)}
    />
  );
};

export default MyButtonDelete;
