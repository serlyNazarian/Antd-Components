import { Card } from 'antd';

const MyCard = ({
  block,
  style,
  onClick,
  loading,
  disabled,
  children,
  withoutShadow,
  variant = 'borderless',
  ...otherProps
}) => {
  return (
    <Card
      {...otherProps}
      onClick={onClick}
      variant={variant}
      loading={loading}
      style={{ boxShadow: withoutShadow ? 'none' : '', ...style }}
      className={`my_card ${block ? 'full_width' : ''} ${
        onClick && !disabled ? 'link_cursor' : ''
      }`}
    >
      {children}
    </Card>
  );
};

export default MyCard;
