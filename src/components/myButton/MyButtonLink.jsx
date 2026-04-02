import MyButton from './MyButton';

const MyButtonLink = ({ ...otherProps }) => {
  return <MyButton {...otherProps} type="link" />;
};

export default MyButtonLink;
