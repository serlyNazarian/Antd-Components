import { useMemo } from 'react';
import { ColorPicker, Form } from 'antd';
import { useTranslation } from 'react-i18next';

const MyColorPicker = ({
  name,
  label,
  color,
  hidden,
  required,
  onChange,
  placeholder,
  disabled = false,
  layout = 'horizontal',
}) => {
  const { t } = useTranslation();

  const rules = useMemo(() => {
    return [
      {
        required: required,
        message: `${placeholder || label} ${t('WORD_IS_REQUIRED')}`,
      },
    ];
  }, [label, placeholder, required, t]);

  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      hidden={hidden}
      layout={layout}
      className="my_color_row"
      getValueFromEvent={(_, ee) => ee}
    >
      <ColorPicker
        value={color}
        disabled={disabled}
        onChange={(_, ee) => onChange && onChange(ee)}
      />
    </Form.Item>
  );
};

export default MyColorPicker;
