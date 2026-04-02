import { Statistic } from 'antd';

const MyStatisticBold = ({
  style,
  color,
  value = 0,
  fontSize = 14,
  fontWeight = 700,
  textAlign = 'right',
  ...otherProps
}) => {
  let contentStyle = {
    color: color,
    fontSize: fontSize,
    textAlign: textAlign,
    fontWeight: fontWeight,
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

export default MyStatisticBold;
