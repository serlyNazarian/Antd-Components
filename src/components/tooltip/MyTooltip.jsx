import { Tooltip } from 'antd';
import { UtilString } from '../../utils/UtilString';

const MyTooltip = ({
  onClick,
  children,
  withLinkCursor = true,
  className = UtilString.EMPTY_STRING,
  ...otherProps
}) => {
  return (
    <div>
      <Tooltip {...otherProps} className={withLinkCursor ? 'link_cursor' : ''}>
        <div className={className} onClick={onClick}>
          {children}
        </div>
      </Tooltip>
    </div>
  );
};

export default MyTooltip;
