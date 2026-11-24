import MyButton from './MyButton';

const MyButtonDanger = ({ ...otherProps }) => {
  return (
    <MyButton
      {...otherProps}
      style={{ backgroundColor: 'transparent' }}
      danger
    />
  );
};

export default MyButtonDanger;
