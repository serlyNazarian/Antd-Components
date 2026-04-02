import MyText from '../myText/MyText';
import colors from '../../styles/Color.scss';
import './NumberWithBg.scss';

const NumberWithBg = ({
  number,
  color = colors.whiteColor,
  bgColor = colors.primaryColor,
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
