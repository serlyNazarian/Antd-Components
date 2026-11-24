import MyButton from './MyButton';

const MyButtonMain = ({ ...otherProps }) => {
  return <MyButton {...otherProps} type="primary" />;
};

export default MyButtonMain;
