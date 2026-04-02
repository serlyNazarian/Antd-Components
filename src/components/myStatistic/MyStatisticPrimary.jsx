import { Statistic } from 'antd';

const MyStatisticPrimary = ({
  style,
  color,
  value = 0,
  fontSize = 14,
  fontWeight = 500,
  textAlign = 'right',
  ...otherProps
}) => {
  let contentStyle = {
    // color: colors.primaryColor,
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

export default MyStatisticPrimary;
