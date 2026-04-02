import { Dropdown } from 'antd';
import SVGDropdownArrow from '../../icons/SVGDropdownArrow';
import UtilArray from '../../utils/UtilArray';
import MyDefaultCenteredColumn from '../infiniteScrollTable/MyDefaultCenteredColumn';

const MyDefaultDropdownButton = ({
  size,
  title,
  width,
  onClick,
  titleIcon,
  onItemClick,
  className = '',
  dropdownMenuItems = UtilArray.EMPTY_ARRAY,
}) => {
  return (
    <Dropdown.Button
      className={className}
      type="primary"
      onClick={onClick}
      menu={{
        items: dropdownMenuItems,
        onClick: onItemClick,
      }}
      icon={<SVGDropdownArrow color="white" />}
      trigger={['click']}
      size={size}
    >
      <div style={{ width: width }}>
        {titleIcon ? (
          <MyDefaultCenteredColumn gap={10}>
            {titleIcon}
            {title}
          </MyDefaultCenteredColumn>
        ) : (
          title
        )}
      </div>
    </Dropdown.Button>
  );
};

export default MyDefaultDropdownButton;
