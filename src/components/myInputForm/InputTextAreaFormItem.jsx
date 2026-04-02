import { useMemo } from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { UtilString } from '../../utils/UtilString';

const { TextArea } = Input;

const InputTextAreaFormItem = ({
  name,
  label,
  style,
  onBlur,
  readOnly,
  rows = 4,
  placeholder,
  hidden = false,
  autoSize = true,
  bordered = true,
  required = false,
  allowClear = true,
  className = UtilString.EMPTY_STRING,
  classNameInput = UtilString.EMPTY_STRING,
}) => {
  const { t } = useTranslation();

  const rules = useMemo(() => {
    return [
      {
        required: required && !hidden,
        message: `${t('WORD_PLEASE_INPUT_YOUR_USERNAME')}`,
      },
    ];
  }, [hidden, required, t]);

  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      hidden={hidden}
      className={className}
      validateTrigger="onSubmit"
    >
      <TextArea
        className={classNameInput}
        placeholder={placeholder || label || ''}
        autoComplete="nope"
        allowClear={allowClear}
        rows={rows}
        readOnly={readOnly}
        variant={!bordered ? 'borderless' : 'outlined'}
        onBlur={onBlur}
        autoSize={autoSize}
        style={style}
      />
    </Form.Item>
  );
};

export default InputTextAreaFormItem;
