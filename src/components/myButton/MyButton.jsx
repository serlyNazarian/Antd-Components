import { forwardRef } from 'react';
import { Button } from 'antd';
import MyFlex from '../myFlex/MyFlex';

const MyButton = forwardRef(
  (
    { block, style, width, label, children, suffixIcon, ...otherProps },
    ref
  ) => {
    const styleLocal = { ...style, width: block ? '100%' : width || '' };
    return (
      <Button {...otherProps} ref={ref} block={block} style={styleLocal}>
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
