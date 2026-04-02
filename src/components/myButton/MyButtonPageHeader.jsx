import SVGPlusBtn from '../icons/SVGPlusBtn';
import MyButton from './MyButton';

const MyButtonPageHeader = ({ icon, type = 'primary', ...otherProps }) => {
  return (
    <MyButton
      {...otherProps}
      typse={type}
      htmlType="submit"
      style={{ height: 44 }}
      icon={icon || <SVGPlusBtn type={type} />}
    />
  );
};

export default MyButtonPageHeader;
