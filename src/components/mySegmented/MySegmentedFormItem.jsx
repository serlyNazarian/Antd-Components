import { useMemo } from 'react';
import { Segmented, Form } from 'antd';
import UtilString from '../../utils/UtilString';
import './MySegmentedFormItem.scss';

const MySegmentedFormItem = ({
  name,
  label,
  block,
  color,
  hidden,
  options,
  required,
  disabled,
  onChange,
  className = UtilString.EMPTY_STRING,
  ...otherProps
}) => {
  const rules = useMemo(() => {
    return [
      {
        required: required && !hidden,
      },
    ];
  }, [hidden, required]);

  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      hidden={hidden}
      className={className}
      {...otherProps}
    >
      <Segmented
        block={block}
        options={options}
        onChange={onChange}
        disabled={disabled}
        className={`my_segment ${color}`}
      />
    </Form.Item>
  );
};

export default MySegmentedFormItem;
