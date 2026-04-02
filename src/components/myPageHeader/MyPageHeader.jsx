import SVGArrow from '../../icons/SVGArrow';
import MyText from '../myText/MyText';
import SVGMenu from '../../icons/SVGMenu';
import useWindowSize from '../../utils/useWindowSize';
import MyFlex from '../myFlex/MyFlex';
import useMyTheme from '../../theme/useMyTheme';
import MyTextBold from '../myText/MyTextBold';
import colors from '../../styles/Color.scss';

const MyPageHeader = ({
  title,
  onBack,
  subTitle,
  extraLeft,
  extraRight,
  fontSize = 20,
}) => {
  const { isMobile } = useWindowSize();
  const { isDark } = useMyTheme();

  let color = isDark ? colors.whiteColor : colors.blueishColor;

  return (
    <MyFlex align="center" justify="space-between" style={{ minHeight: 50 }}>
      <MyFlex>
        {Boolean(isMobile) && <SVGMenu />}
        <MyFlex align="center">
          {onBack && (
            <MyText className="arrow_icon">
              <SVGArrow onClick={onBack} rotate={90} color={color} />
            </MyText>
          )}
          {title && <MyTextBold fontSize={fontSize}>{title}</MyTextBold>}
        </MyFlex>
        {subTitle && <MyText>{subTitle}</MyText>}
        <div>{extraLeft}</div>
      </MyFlex>
      <div>{extraRight}</div>
    </MyFlex>
  );
};

export default MyPageHeader;
