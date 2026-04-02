import { useMemo } from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { UtilString } from '../../utils/UtilString';

const InputTextFormItem = ({
  name,
  label,
  style,
  onChange,
  disabled,
  placeholder,
  errorMessage,
  onPressEnter,
  hidden = false,
  readOnly = false,
  required = false,
  autoFocus = false,
  hasFeedback = false,
  allowClear = !required,
  className = UtilString.EMPTY_STRING,
  classNameInput = UtilString.EMPTY_STRING,
}) => {
  const { t } = useTranslation();

  const errMessage = errorMessage
    ? errorMessage
    : `${t('WORD_PLEASE_ENTER')} ${placeholder || label}!`;

  const rules = useMemo(() => {
    return [
      {
        required: required && !hidden,
        message: errMessage,
      },
    ];
  }, [errMessage, hidden, required]);

  return (
    <Form.Item
      name={name}
      label={label}
      style={style}
      rules={rules}
      hidden={hidden}
      className={className}
      hasFeedback={hasFeedback}
      validateTrigger="onSubmit"
    >
      <Input
        className={classNameInput}
        style={style}
        readOnly={readOnly}
        placeholder={placeholder || label || ''}
        autoComplete="nope"
        autoFocus={autoFocus}
        allowClear={allowClear}
        disabled={disabled}
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onPressEnter && onPressEnter(e.target.value);
          }
        }}
      />
    </Form.Item>
  );
};

export default InputTextFormItem;
