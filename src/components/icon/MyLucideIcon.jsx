import { forwardRef, memo } from 'react';

const MyLucideIcon = memo(
  forwardRef(function MyLucideIcon(
    { onClick, size = 14, icon: Icon, strokeWidth = 1.75, ...otherProps },
    ref
  ) {
    return (
      <span ref={ref} className="anticon" onClick={onClick}>
        <Icon size={size} strokeWidth={strokeWidth} {...otherProps} />
      </span>
    );
  })
);

export default MyLucideIcon;
