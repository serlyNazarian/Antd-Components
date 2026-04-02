import MyButton from './MyButton';

const MyButtonFilled = ({ ...otherProps }) => {
  return <MyButton {...otherProps} variant="filled" />;
};

export default MyButtonFilled;
