import { Plus } from 'lucide-react';
import MyButton from './MyButton';

const MyButtonPageHeader = ({ icon, type = 'primary', ...otherProps }) => {
  return (
    <MyButton
      {...otherProps}
      typse={type}
      htmlType="submit"
      style={{ height: 44 }}
      icon={icon || <Plus size={14} aria-hidden="true" />}
    />
  );
};

export default MyButtonPageHeader;
