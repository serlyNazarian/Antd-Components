import { forwardRef } from 'react';
import MyButton from './MyButton';

const MyButtonRound = forwardRef(({ ...otherProps }, ref) => {
  return <MyButton {...otherProps} ref={ref} shape="circle" />;
});

export default MyButtonRound;
