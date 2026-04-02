import MyFlex from '../myFlex/MyFlex';
import MyText from '../myText/MyText';
import MyTextBold from '../myText/MyTextBold';

const NumberWithBgAndTitle = ({
  title,
  number,
  gap = 8,
  // bgColor = colors.primaryColor,
  // numbColor = colors.whiteColor,
  // titleColor = colors.primaryColor,
}) => {
  return (
    <MyFlex gap={gap}>
      <MyText
        className="number_bg"
        style={{ color: numbColor, backgroundColor: bgColor }}
      >
        {number}
      </MyText>
      {title && <MyTextBold style={{ color: titleColor }}>{title}</MyTextBold>}
    </MyFlex>
  );
};

export default NumberWithBgAndTitle;
