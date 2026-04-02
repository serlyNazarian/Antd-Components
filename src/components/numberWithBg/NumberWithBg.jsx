import MyText from '../myText/MyText';

const NumberWithBg = ({
  number,
  // color = colors.whiteColor,
  // bgColor = colors.primaryColor,
}) => {
  return (
    <MyText
      className="number_bg"
      style={{ color: color, backgroundColor: bgColor }}
    >
      {number}
    </MyText>
  );
};

export default NumberWithBg;
