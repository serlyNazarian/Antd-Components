import { forwardRef } from 'react';
import { Button } from 'antd';
import MyFlex from '../flex/MyFlex';

const MyButton = forwardRef(
  ({ form, label, children, suffixIcon, ...otherProps }, ref) => {
    return (
      <Button
        ref={ref}
        form={form}
        htmlType={form ? 'submit' : 'button'}
        {...otherProps}
      >
        {label || suffixIcon ? (
          <MyFlex>
            {Boolean(label) && <span className="bold">{label}</span>}
            {Boolean(suffixIcon) && <div>{suffixIcon}</div>}
          </MyFlex>
        ) : (
          children
        )}
      </Button>
    );
  }
);

export default MyButton;
