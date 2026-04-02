import Div from '../myDiv/Div';
import UtilString from '../../utils/UtilString';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingIconApp = ({ size, className = UtilString.EMPTY_STRING }) => {
  return (
    <Div>
      <LoadingOutlined style={{ fontSize: size }} className={className} />
    </Div>
  );
};

export default LoadingIconApp;
