import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { UtilArray } from '../../utils/UtilArray';

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
      icon={<DownOutlined style={{ color: 'white' }} />}
      trigger={['click']}
      size={size}
    >
      <div style={{ width: width }}>
        {titleIcon ? (
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            {titleIcon}
            {title}
          </div>
        ) : (
          title
        )}
      </div>
    </Dropdown.Button>
  );
};

export default MyDefaultDropdownButton;
