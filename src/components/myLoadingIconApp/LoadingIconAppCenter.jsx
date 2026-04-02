import Div from '../div/Div';
import LoadingIconApp from './LoadingIconApp';
import useWindowSize from '../../utils/useWindowSize';

const LoadingIconAppCenter = ({ size = 30, divHeight, style }) => {
  const { height } = useWindowSize();

  return (
    <Div
      style={{
        height: divHeight || height - 120,
        ...style,
      }}
      className="loading_icon_app_center full_width"
    >
      <LoadingIconApp size={size} />
    </Div>
  );
};

export default LoadingIconAppCenter;
