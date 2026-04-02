import { forwardRef } from 'react';

const Div = forwardRef(({ onClick, className = '', ...otherProps }, ref) => {
  return (
    <div
      {...otherProps}
      ref={ref}
      onClick={onClick}
      className={`${className} ${onClick ? 'link_cursor' : ''}`}
    />
  );
});

export default Div;
