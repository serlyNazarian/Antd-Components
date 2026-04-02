import { useMemo } from 'react';
import { Form, Input } from 'antd';
import SVGEmail from '../../icons/SVGEmail';
import { useTranslation } from 'react-i18next';
import { UtilString } from '../../utils/UtilString';

const InputEmailFormItem = ({
  label,
  suffix,
  readOnly,
  placeholder,
  hidden = false,
  required = true,
  bordered = true,
  allowClear = true,
  prefix = <SVGEmail />,
  validateTrigger = 'onSubmit',
  classNameInput = UtilString.EMPTY_STRING,
  ...otherProps
}) => {
  const { t } = useTranslation();

  const rules = useMemo(() => {
    return [
      {
        required: required && !hidden,
        message: `${t('WORD_PLEASE_INPUT_YOUR')} ${label || placeholder}`,
      },
      {
        type: 'email',
        message: `${placeholder || label} ${t('WORD_NOT_VALID_EMAIL')}`,
      },
    ];
  }, [hidden, label, placeholder, required, t]);

  return (
    <Form.Item
      {...otherProps}
      label={label}
      rules={rules}
      hidden={hidden}
      validateTrigger={validateTrigger}
    >
      <Input
        suffix={suffix}
        prefix={prefix}
        autoComplete="nope"
        readOnly={readOnly}
        allowClear={allowClear}
        className={classNameInput}
        placeholder={placeholder || label || ''}
        variant={!bordered ? 'borderless' : 'outlined'}
      />
    </Form.Item>
  );
};

export default InputEmailFormItem;
