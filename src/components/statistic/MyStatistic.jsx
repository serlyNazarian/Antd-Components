import { Statistic } from 'antd';

const MyStatistic = ({
  style,
  color,
  value = 0,
  fontSize = 14,
  fontWeight = 500,
  textAlign = 'right',
  ...otherProps
}) => {
  const contentStyle = {
    color,
    fontSize,
    textAlign,
    fontWeight,
    ...style,
  };

  return (
    <Statistic
      {...otherProps}
      value={value}
      styles={{ content: contentStyle }}
    />
  );
};

export default MyStatistic;
