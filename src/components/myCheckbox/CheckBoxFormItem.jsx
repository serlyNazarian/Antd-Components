import { Checkbox, Form } from 'antd';

const CheckBoxFormItem = ({ name, label, onChange }) => {
  return (
    <Form.Item
      name={name}
      valuePropName="checked"
      className="remove_margin_bottom"
    >
      <Checkbox
        onChange={(e) => {
          onChange && onChange(e.target.checked);
        }}
      >
        {label}
      </Checkbox>
    </Form.Item>
  );
};

export default CheckBoxFormItem;
