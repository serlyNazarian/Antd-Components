import { useMemo } from 'react';
import { Form, DatePicker } from 'antd';
import { useTranslation } from 'react-i18next';
import { UtilDate } from '../../utils/UtilDate';
import { UtilString } from '../../utils/UtilString';

const InputFormDatePicker = ({
  size,
  label,
  style,
  hidden,
  layout,
  picker,
  variant,
  onChange,
  suffixIcon,
  placeholder,
  disabledDate,
  required = false,
  disabled = false,
  readOnly = false,
  allowClear = true,
  name = 'DateValue',
  hasFeedback = false,
  format = 'DD/MM/YYYY',
  className = UtilString.EMPTY_STRING,
}) => {
  const { t } = useTranslation();

  const rules = useMemo(() => {
    return [
      {
        required: required && !hidden,
        message: `${label || placeholder} ${t('WORD_IS_REQUIRED')}`,
      },
    ];
  }, [hidden, label, placeholder, required, t]);

  const handleGetValueFromEvent = (date) => {
    if (date) {
      const currentTime = UtilDate.getDate();
      return date
        .hour(currentTime.hour())
        .minute(currentTime.minute())
        .second(currentTime.second());
    }
    return date;
  };

  const handleOnChange = (date, dateString) => {
    if (!readOnly) {
      onChange && onChange(date, dateString);
    }
  };

  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      style={style}
      hidden={hidden}
      layout={layout}
      required={required}
      className={className}
      hasFeedback={hasFeedback}
      getValueFromEvent={handleGetValueFromEvent}
    >
      <DatePicker
        size={size}
        variant={variant}
        picker={picker}
        className="full_width"
        placeholder={placeholder || label || t('WORD_SELECT_DATE')}
        disabledDate={disabledDate}
        format={format}
        showNow={true}
        suffixIcon={suffixIcon}
        inputReadOnly={true} //for mobile keyboard
        allowClear={(!readOnly && allowClear) || false}
        onChange={handleOnChange}
        disabled={disabled}
      />
    </Form.Item>
  );
};

export default InputFormDatePicker;
