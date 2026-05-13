import Div from '../myDiv/Div';
import LoadingIconApp from './LoadingIconApp';

const LoadingIconAppAbsolute = ({ size = 30 }) => {
  return (
    <Div className="loading_icon_app_absolute">
      <LoadingIconApp size={size} />
    </Div>
  );
};

export default LoadingIconAppAbsolute;
