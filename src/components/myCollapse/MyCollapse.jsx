import { Collapse } from 'antd';
import SVGArrow from '../../icons/SVGArrow';
import LoadingIconApp from '../loadingIconApp/LoadingIconApp';

const MyCollapse = ({
  style,
  loading,
  bordered = false,
  collapsible = 'icon',
  ...otherProps
}) => {
  return (
    <Collapse
      {...otherProps}
      bordered={bordered}
      collapsible={collapsible}
      expandIcon={({ isActive }) =>
        loading ? (
          <LoadingIconApp />
        ) : (
          <div className="arrow_bg_always" style={style}>
            <SVGArrow rotate={isActive ? 180 : 0} />
          </div>
        )
      }
      ghost
    />
  );
};

export default MyCollapse;
