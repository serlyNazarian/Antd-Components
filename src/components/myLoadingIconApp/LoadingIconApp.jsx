import { LoadingOutlined } from '@ant-design/icons';
import UtilString from '../../utils/UtilString';
import Div from '../div/Div';
import './LoadingIconApp.scss';

const LoadingIconApp = ({ size, className = UtilString.EMPTY_STRING }) => {
  return (
    <Div>
      <LoadingOutlined style={{ fontSize: size }} className={className} />
    </Div>
  );
};

export default LoadingIconApp;
