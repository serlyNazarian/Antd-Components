import { Input } from 'antd';
import './MyOtpInput.scss';

const MyOtpInput = ({
  onComplete,
  otpLength = 4,
  autoFocus = true,
  ...otherProps
}) => {
  return (
    <Input.OTP
      {...otherProps}
      length={otpLength}
      autoFocus={autoFocus}
      onChange={(value) => {
        if (value.length === otpLength && onComplete) {
          onComplete(value);
        }
      }}
    />
  );
};

export default MyOtpInput;
