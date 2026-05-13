import { theme } from 'antd';
import { MenuOutlined, ArrowRightOutlined } from '@ant-design/icons';
import MyText from '../myText/MyText';
import MyFlex from '../myFlex/MyFlex';
import MyTextBold from '../myText/MyTextBold';
import useWindowSize from '../../hooks/UseWindowSize';

const MyPageHeader = ({
  title,
  onBack,
  subTitle,
  extraLeft,
  extraRight,
  fontSize = 20,
  iconColor,
}) => {
  const { token } = theme.useToken();
  const { isMobile } = useWindowSize();

  const backIconColor = iconColor || token.colorText;

  return (
    <MyFlex align="center" justify="space-between" style={{ minHeight: 50 }}>
      <MyFlex>
        {Boolean(isMobile) && <MenuOutlined style={{ cursor: 'pointer' }} />}
        <MyFlex align="center">
          {onBack && (
            <MyText className="arrow_icon" style={{ cursor: 'pointer' }}>
              <ArrowRightOutlined
                onClick={onBack}
                style={{ color: backIconColor }}
              />
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
