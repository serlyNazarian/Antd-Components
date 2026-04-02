import MyButton from './MyButton';

const MyButtonSecondary = ({
  color = 'primary',
  variant = 'outlined',
  ...otherProps
}) => {
  return <MyButton {...otherProps} color={color} variant={variant} ghost />;
};

export default MyButtonSecondary;
