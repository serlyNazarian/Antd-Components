import { Form, Switch } from 'antd';
import UtilString from '../../utils/UtilString';
import { InfoCircleOutlined } from '@ant-design/icons';

const MySwitchFormItemNumVal = ({
  name,
  label,
  hidden,
  onChange,
  disabled,
  required,
  tooltipTitle,
  checkedValue = 1,
  uncheckedValue = 2,
  className = UtilString.EMPTY_STRING,
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      valuePropName="checked"
      layout="horizontal"
      required={required}
      getValueFromEvent={(checked) => (checked ? checkedValue : uncheckedValue)}
      getValueProps={(value) => ({
        checked: value === checkedValue,
      })}
      hidden={hidden}
      className={`my_switch_row ${className}`}
      tooltip={
        tooltipTitle
          ? {
              title: tooltipTitle,
              icon: <InfoCircleOutlined />,
            }
          : null
      }
    >
      <Switch onChange={onChange} disabled={disabled} />
    </Form.Item>
  );
};

export default MySwitchFormItemNumVal;
