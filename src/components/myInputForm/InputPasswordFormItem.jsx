import { useMemo } from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import UtilString from '../../utils/UtilString';
import SVGLock from '../../icons/SVGLock';

const InputPasswordFormItem = ({
  name,
  label,
  readOnly,
  placeholder,
  hidden = false,
  required = true,
  allowClear = true,
  prefix = <SVGLock />,
  validateComplexity = true,
  className = UtilString.EMPTY_STRING,
  classNameInput = UtilString.EMPTY_STRING,
}) => {
  const { t } = useTranslation();

  const rules = useMemo(() => {
    const rulesList = [
      {
        required: required && !hidden,
        message: `${t('WORD_PLEASE_INPUT_YOUR_PASSWORD')}`,
      },
    ];

    if (validateComplexity && !hidden) {
      rulesList.push({
        validator: (_, value) => {
          if (!value) return Promise.resolve();

          const hasMinLength = value.length >= 8;
          const hasUppercase = /[A-Z]/.test(value);
          const hasLowercase = /[a-z]/.test(value);
          const hasNumber = /[0-9]/.test(value);
          const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value);

          if (
            hasMinLength &&
            hasUppercase &&
            hasLowercase &&
            hasNumber &&
            hasSpecial
          ) {
            return Promise.resolve();
          }

          return Promise.reject(new Error(t('WORD_PASSWORD_REQUIREMENTS')));
        },
      });
    }

    return rulesList;
  }, [hidden, required, validateComplexity, t]);

  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      hidden={hidden}
      className={className}
      validateTrigger="onSubmit"
    >
      <Input.Password
        className={classNameInput}
        readOnly={readOnly}
        placeholder={placeholder || label || ''}
        prefix={prefix}
        autoComplete="nope"
        allowClear={allowClear}
      />
    </Form.Item>
  );
};

export default InputPasswordFormItem;
