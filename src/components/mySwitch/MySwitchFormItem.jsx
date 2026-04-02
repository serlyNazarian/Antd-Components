import { Form, Switch } from 'antd';
import UtilString from '../../utils/UtilString';
import { InfoCircleOutlined } from '@ant-design/icons';

const MySwitchFormItem = ({
  name,
  label,
  onChange,
  disabled,
  required,
  tooltipTitle,
  className = UtilString.EMPTY_STRING,
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      valuePropName="checked"
      layout="horizontal"
      required={required}
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

export default MySwitchFormItem;
