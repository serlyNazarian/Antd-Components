import { useMemo } from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import UtilString from '../../utils/UtilString';
import './MyOtpInput.scss';

const InputOtpFormItem = ({
  name,
  label,
  hidden,
  loading,
  required,
  disabled,
  onSuccess,
  length = 6,
  hasFeedback,
  autoFocus = true,
  className = UtilString.EMPTY_STRING,
}) => {
  const { t } = useTranslation();

  const labelText = label || t('WORD_AUTHENTICATION_CODE');

  const rules = useMemo(() => {
    return [
      {
        required: required && !hidden,
        message: `${labelText} ${t('WORD_IS_REQUIRED')}`,
      },
    ];
  }, [hidden, labelText, required, t]);

  return (
    <Form.Item
      name={name}
      rules={rules}
      label={labelText}
      validateTrigger="onSubmit"
    >
      <Input.OTP
        length={length}
        hidden={hidden}
        disabled={disabled || loading}
        hasFeedback={hasFeedback}
        className={className}
        onChange={() => {
          onSuccess && onSuccess();
        }}
        autoFocus={autoFocus}
      />
    </Form.Item>
  );
};

export default InputOtpFormItem;
