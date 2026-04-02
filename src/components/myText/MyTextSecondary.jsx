import { Typography } from 'antd';
import colors from '../../styles/Color.scss';

const { Text } = Typography;

const MyTextSecondary = ({
  bold,
  style,
  children,
  fontSize = 14,
  color = colors.textSecondary,
}) => {
  return (
    <Text
      style={{ fontSize: fontSize, color: color, ...style }}
      strong={bold || false}
    >
      {children}
    </Text>
  );
};

export default MyTextSecondary;
